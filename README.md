# Radhesh Dahagam Portfolio

## Frontend

```powershell
cd frontend
npm run dev
```

Open http://localhost:3000. The contact form posts to `http://localhost:8000/contact` by default. To change it, set `NEXT_PUBLIC_API_URL`.

## Backend

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Submissions are persisted in `backend/contacts.db`. Health check: http://localhost:8000/health.
