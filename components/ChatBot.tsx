
import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponseStream } from '../services/gemini';
import { ChatMessage } from '../types';
import { Terminal, Send, X, Bot, User, Loader2, Command, AlertCircle } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Access granted. Systems initialized. I'm Chia's AI node. How can I assist with your inquiry?" }
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
      const history = messages
        .filter(m => !m.isError)
        .map(m => ({ role: m.role, text: m.text }));
        
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
    } catch (error: any) {
      console.error("Chat error:", error);
      let errorText = "Critical error in AI handshake. Please verify your internet connection or API Key configuration.";
      
      if (error?.message === "INVALID_API_KEY") {
        errorText = "Invalid API Key detected. Please ensure your environment variable is set correctly in Vercel/Local settings.";
      }

      setMessages(prev => {
        const historyWithoutEmpty = prev.filter(m => m.text !== "");
        return [...historyWithoutEmpty, { role: 'model', text: errorText, isError: true }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-mono">
      {isOpen ? (
        <div className="w-80 sm:w-[400px] console-panel rounded-lg shadow-2xl overflow-hidden flex flex-col h-[500px] border border-hacker-accent/30 animate-fade-in">
          {/* Header */}
          <div className="console-header px-4 py-3 flex justify-between items-center bg-black/40">
            <div className="flex items-center gap-2 text-hacker-accent">
              <Command size={14} />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest leading-none">AI_TERMINAL_V2.5</span>
                <span className="text-[8px] text-emerald-500 leading-none">LINK_ACTIVE</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded p-1 transition-colors text-slate-500">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`flex items-center gap-2 mb-1 text-[8px] uppercase tracking-widest ${msg.role === 'user' ? 'text-hacker-magenta' : 'text-hacker-cyan'}`}>
                  {msg.role === 'user' ? <><span className="text-slate-700">Guest_Access</span> <User size={10} /></> : <><Bot size={10} /> <span className="text-slate-700">System_Node</span></>}
                </div>
                <div className={`max-w-[90%] rounded p-3 text-xs leading-relaxed border flex gap-2 ${
                  msg.role === 'user' 
                    ? 'bg-hacker-magenta/5 border-hacker-magenta/20 text-slate-200' 
                    : 'bg-hacker-cyan/5 border-hacker-cyan/20 text-slate-300'
                } ${msg.isError ? 'border-red-500/50 text-red-400 bg-red-500/5' : ''}`}>
                  {msg.isError && <AlertCircle size={14} className="shrink-0 mt-0.5" />}
                  <span>
                    {msg.text}
                    {msg.role === 'model' && !isLoading && !msg.isError && idx === messages.length - 1 && <span className="cursor ml-1"></span>}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex flex-col items-start">
                 <div className="flex items-center gap-2 mb-1 text-[8px] uppercase text-slate-700 tracking-widest">
                   <Bot size={10} /> System_Processing
                </div>
                <div className="bg-hacker-cyan/5 border border-hacker-cyan/20 rounded p-3">
                  <Loader2 className="w-3 h-3 animate-spin text-hacker-cyan" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-black/40 border-t border-slate-800 flex gap-2">
            <span className="text-hacker-accent text-sm self-center">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command..."
              className="flex-1 bg-transparent text-slate-300 text-xs focus:outline-none placeholder:text-slate-700"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="p-2 text-hacker-accent hover:text-hacker-cyan disabled:opacity-30 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-hacker-bg border border-hacker-accent/50 text-hacker-accent px-5 py-3 rounded-md shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:bg-hacker-accent/10 transition-all duration-300"
        >
          <Terminal className="w-5 h-5 group-hover:animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-bold">Initiate_Comms</span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
