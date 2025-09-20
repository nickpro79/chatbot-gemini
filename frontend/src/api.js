import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // Backend URL

export const sendMessage = async (message) => {
  try {
    const res = await axios.post(`${API_URL}/chat`, { message });
    return res.data.reply;
  } catch (err) {
    console.error(err);
    return "⚠️ Error contacting server";
  }
};
