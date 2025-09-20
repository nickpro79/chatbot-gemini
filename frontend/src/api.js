const API_URL = "http://localhost:8000";

export async function sendMessage(message) {
  const res = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,
    }),
  });

  if (!res.ok) throw new Error("Failed to connect to backend");

  return res.json();
}
