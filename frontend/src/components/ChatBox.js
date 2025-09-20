import { useState } from "react";
import { sendMessage } from "../api";

function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "You", text: input }];
    setMessages(newMessages);

    // Call backend
    try {
      const res = await sendMessage(input);
      setMessages([...newMessages, { sender: "Bot", text: res.reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "Bot", text: "⚠️ Error: " + err.message },
      ]);
    }

    setInput("");
  };

  return (
    <div style={styles.container}>
      <h2>🤖 Gemini Chatbot</h2>
      <div style={styles.chatWindow}>
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button style={styles.button} onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { width: "400px", margin: "50px auto", textAlign: "center" },
  chatWindow: {
    height: "300px",
    overflowY: "auto",
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
  },
  inputArea: { display: "flex" },
  input: { flex: 1, padding: "8px" },
  button: { padding: "8px 12px", marginLeft: "5px" },
};

export default ChatBox;
