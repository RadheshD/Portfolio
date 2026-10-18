# Radhesh Dahagam Portfolio

Portfolio for Radhesh, an AI/ML Engineer building production-ready systems. The repository contains a Next.js portfolio frontend and a small FastAPI service that receives contact form submissions.

## Project Structure

```text
.
|-- frontend/     Next.js portfolio application
|-- backend/      FastAPI contact API with SQLite persistence
|-- index.html     Standalone static portfolio page
|-- styles.css     Styles for the standalone page
`-- script.js      Interactions for the standalone page
```

The `frontend/` application is the primary version. The root-level HTML files are a standalone version that can be opened directly in a browser when a Node.js server is not needed.

## Run The Full Stack

Use two terminals from the repository root.

### 1. Start the contact API

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The API is available at <http://localhost:8000>. Verify it with <http://localhost:8000/health>.

### 2. Start the portfolio frontend

```powershell
cd frontend
npm install
npm run dev
```

Open <http://localhost:3000>. The contact form sends submissions to `http://localhost:8000/contact` by default.

## Configuration

To use a different contact API URL, create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/contact
```

The backend stores submissions in `backend/contacts.db`, which is created automatically when the API starts. The database file is local runtime data and should not be committed.

## Useful Commands

```powershell
# Frontend checks
cd frontend
npm run lint
npm run build

# Serve a production frontend build
npm run start
```

## Portfolio Routes

- `/` - Home page
- `/about` - Background and approach
- `/work` - Selected production work
- `/work/autoextract` - AutoExtract case study
- `/work/faceattend-ai` - FaceAttend AI case study
- `/skills` - Technical toolkit
- `/projects` - Academic projects
- `/projects/bone-fracture-detection` - Bone fracture detection project
- `/projects/cricket-match-stats` - Cricket match statistics project
- `/projects/crime-pattern-prediction` - Crime pattern prediction project
- `/contact` - Contact form

## Contact API

`GET /health` returns the service status.

`POST /contact` accepts JSON with the following fields:

```json
{
	"name": "Ada Lovelace",
	"email": "ada@example.com",
	"message": "I would like to discuss a project."
}
```
