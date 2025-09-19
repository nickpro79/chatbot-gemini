from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import chat

app = FastAPI(title="Gemini Chatbot API")

# Allow frontend requests (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # in production, restrict domain
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(chat.router)

@app.get("/")
def root():
    return {"message": "🚀 Gemini Chatbot Backend is running!"}
