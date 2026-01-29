
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "./constants.js";

let ai = null;

const getAIClient = () => {
  if (!ai) {
    // The API key must be obtained exclusively from the environment variable process.env.API_KEY.
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const generateChatResponseStream = async function* (
  history,
  message
) {
  const client = getAIClient();
  
  // Use 'gemini-3-flash-preview' for basic text tasks as per recommendations.
  const chat = client.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
    history: history.map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.text }]
    }))
  });

  try {
    const result = await chat.sendMessageStream({ message });

    for await (const chunk of result) {
      // The GenerateContentResponse features a text property (not a method) that directly returns the string output.
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
