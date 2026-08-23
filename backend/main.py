from contextlib import asynccontextmanager
from datetime import datetime, timezone
from pathlib import Path
import sqlite3
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

DB_PATH = Path(__file__).with_name("contacts.db")

class ContactSubmission(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(min_length=10, max_length=5000)

@asynccontextmanager
async def lifespan(app: FastAPI):
    with sqlite3.connect(DB_PATH) as connection:
        connection.execute("CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, message TEXT NOT NULL, created_at TEXT NOT NULL)")
        connection.commit()
    yield

app = FastAPI(title="Radhesh Portfolio Contact API", version="1.0.0", lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"], allow_methods=["POST"], allow_headers=["Content-Type"])

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/contact", status_code=201)
def create_contact(submission: ContactSubmission):
    created_at = datetime.now(timezone.utc).isoformat()
    with sqlite3.connect(DB_PATH) as connection:
        cursor = connection.execute("INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, ?)", (submission.name.strip(), str(submission.email), submission.message.strip(), created_at))
        connection.commit()
    return {"id": cursor.lastrowid, "message": "Signal received.", "created_at": created_at}
