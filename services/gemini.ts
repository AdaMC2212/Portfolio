import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const generateChatResponseStream = async function* (
  history: { role: string; text: string }[],
  message: string
) {
  const client = getAIClient();
  
  // Create chat history in the format Gemini expects
  // Note: The @google/genai SDK might handle history differently in 'chats.create'.
  // We will map our simple history to the prompt context or use chat session if persistent.
  // For simplicity and robustness in this demo, we'll re-instantiate the chat structure or 
  // just pass the relevant context if the history is short.
  
  // Ideally, use:
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
