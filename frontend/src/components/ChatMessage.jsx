import React from "react";

const ChatMessage = ({ text, sender }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: sender === "user" ? "flex-end" : "flex-start",
        margin: "8px 0",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          padding: "10px 14px",
          borderRadius: "15px",
          backgroundColor: sender === "user" ? "#4f46e5" : "#e5e5ea",
          color: sender === "user" ? "white" : "black",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
