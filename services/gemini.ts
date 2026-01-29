
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    // The API key is retrieved from the environment variable.
    // This works with the free tier API keys from Google AI Studio.
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const generateChatResponseStream = async function* (
  history: { role: string; text: string }[],
  message: string
) {
  const client = getAIClient();
  
  const chat = client.chats.create({
    // 'gemini-3-flash-preview' is the recommended model for basic text tasks 
    // and is available on the free tier.
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
    },
    history: history.map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.text }]
    }))
  });

  try {
    const result = await chat.sendMessageStream({ message });

    for await (const chunk of result) {
      const response = chunk as GenerateContentResponse;
      if (response.text) {
        yield response.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
