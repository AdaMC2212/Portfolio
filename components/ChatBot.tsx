import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponseStream } from '../services/gemini';
import { ChatMessage } from '../types';
import { MessageSquare, Send, X, Bot, User, Loader2, Sparkles } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Chia's AI assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const stream = generateChatResponseStream(history, userMessage);
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of stream) {
        if (chunk) {
          fullResponse += chunk;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text = fullResponse;
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an issue connecting to the AI. Please try again later.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col h-[500px] transition-all duration-300 ease-out transform translate-y-0 opacity-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <div>
                <h3 className="font-semibold text-sm">Ask AI about Chia</h3>
                <p className="text-xs text-blue-100 opacity-90">Powered by Gemini 2.5</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-100 text-blue-600'}`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-2">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my SQL skills..."
              className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <MessageSquare className="w-5 h-5 group-hover:animate-bounce" />
          <span className="font-medium">Chat with Resume</span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
