from fastapi import APIRouter
from app.models import ChatRequest, ChatResponse
from app.config import gemini_model

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        response = gemini_model.generate_content(request.message)
        return ChatResponse(reply=response.text)
    except Exception as e:
        return ChatResponse(reply=f"⚠️ Error: {str(e)}")
