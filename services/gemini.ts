
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export const generateChatResponseStream = async function* (
  history: { role: string; text: string }[],
  message: string
) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
    },
    // Filter out any messages with empty text to prevent API errors
    history: history.filter(h => h.text && h.text.trim() !== "").map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.text }]
    }))
  });

  try {
    const result = await chat.sendMessageStream({ message });

    for await (const chunk of result) {
      // Direct access to .text property (not a method)
      const text = (chunk as GenerateContentResponse).text;
      if (text) {
        yield text;
      }
    }
  } catch (error: any) {
    console.error("Gemini API Error details:", error);
    
    // Check for common error signatures
    if (error?.message?.includes("API_KEY_INVALID") || error?.status === 403) {
      throw new Error("INVALID_API_KEY");
    }
    
    throw error;
  }
};
