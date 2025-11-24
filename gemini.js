import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "./constants.js";

let ai = null;

const getAIClient = () => {
  if (!ai) {
    // In a production build environment, this comes from process.env.API_KEY.
    // For local testing without a bundler, you can paste your key string below.
    // const apiKey = "YOUR_GEMINI_API_KEY_HERE";
    const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : null;

    if (!apiKey) {
      console.warn("Gemini API Key is missing. If running locally, please edit gemini.js to include your key.");
    }

    ai = new GoogleGenAI({ apiKey: apiKey || "" });
  }
  return ai;
};

export const generateChatResponseStream = async function* (
  history,
  message
) {
  const client = getAIClient();
  
  // Create chat history in the format Gemini expects
  const chat = client.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
    history: history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }))
  });

  const result = await chat.sendMessageStream({ message });

  for await (const chunk of result) {
    yield chunk.text;
  }
};