import React, { useState, useRef, useEffect } from "react";
import { sendMessage } from "./api";
import ChatMessage from "./components/ChatMessage";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const userMessage = input;
    setInput("");

    // Call backend
    const reply = await sendMessage(userMessage);
    setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
  };

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="app-container">
      <h1>🤖 Gemini Chatbot</h1>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} text={msg.text} sender={msg.sender} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
