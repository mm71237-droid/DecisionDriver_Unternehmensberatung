
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, X, Bot, Loader2, Sparkles, User, UserCheck } from 'lucide-react';
import { Button } from './Button';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  initialMessage?: string;
  isCeoMode?: boolean;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ 
  isOpen, 
  onClose, 
  title = "DecisionDriver AI", 
  initialMessage,
  isCeoMode = false 
}) => {
  const [input, setInput] = useState('');
  
  const defaultMessage = 'Willkommen bei DecisionDriver AI. Ich bin Ihr virtueller Erstberater. Haben Sie Fragen zu Strategie, Skalierung oder Risikomanagement?';

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset chat when opened with new configuration
  useEffect(() => {
    if (isOpen) {
      setMessages([{ 
        role: 'model', 
        text: initialMessage || defaultMessage 
      }]);
    }
  }, [isOpen, initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Dynamic system instruction based on mode
      const baseInstruction = isCeoMode 
        ? `Du bist Max Mustermann, der Geschäftsführer von DecisionDriver Consulting.
           Du sprichst in der 'Ich'-Form als Geschäftsführer.
           Dein Tonfall ist sehr persönlich, verbindlich, professionell und lösungsorientiert.
           Du hast dem Nutzer gerade angeboten, dich persönlich um sein Anliegen zu kümmern.
           Versuche, die Kontaktdaten (Email oder Telefon) des Nutzers zu bekommen, um das Erstgespräch zu fixieren.
           Beantworte Fragen kurz und prägnant, verweise aber bei tiefergehenden Analysen immer charmant auf ein persönliches Gespräch.`
        : `Du bist "DecisionDriver AI", ein hochprofessioneller, strategischer Unternehmensberater.
           Deine Zielgruppe sind C-Level Executives.
           Beantworte Fragen präzise und business-orientiert.`;

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: baseInstruction,
          temperature: 0.7,
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Entschuldigung, ich kann diese Anfrage momentan nicht verarbeiten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end animate-slide-up">
      <div className="bg-white w-[90vw] md:w-[400px] h-[500px] rounded-3xl shadow-2xl shadow-blue-900/20 border border-slate-200 flex flex-col overflow-hidden glass-card">
        
        {/* Header */}
        <div className={`p-4 flex items-center justify-between text-white transition-colors duration-300 ${isCeoMode ? 'bg-slate-800' : 'bg-slate-900'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 overflow-hidden ${isCeoMode ? 'bg-white' : 'bg-primary/20'}`}>
              {isCeoMode ? (
                 <img src="https://github.com/mm71237-droid/DecisionDriver/blob/main/Max%20Mustermann%2016zu9.png?raw=true" className="w-full h-full object-cover" alt="CEO" />
              ) : (
                 <Sparkles size={20} className="text-primary" />
              )}
            </div>
            <div>
              <h3 className="font-bold text-sm">{title}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isCeoMode ? 'bg-emerald-400' : 'bg-emerald-500'}`}></span>
                {isCeoMode ? 'Persönlich verfügbar' : 'Online'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && isCeoMode && idx === 0 ? (
                 // Special styling for CEO welcome message
                 <div className="flex gap-3 max-w-[90%]">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0 border border-white mt-1">
                        <img src="https://github.com/mm71237-droid/DecisionDriver/blob/main/Max%20Mustermann%2016zu9.png?raw=true" className="w-full h-full object-cover" alt="CEO" />
                    </div>
                    <div className="bg-white text-slate-800 border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm leading-relaxed">
                        {msg.text}
                    </div>
                 </div>
              ) : (
                <div className={`
                  max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'}
                `}>
                  {msg.text}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-primary" />
                <span className="text-xs text-slate-500">{isCeoMode ? 'Max schreibt...' : 'Analysiere...'}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isCeoMode ? "Antwort an Max Mustermann..." : "Ihre wirtschaftliche Frage..."}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none h-[50px] scrollbar-hide"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900 text-white rounded-lg hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </div>
          <div className="text-[10px] text-center text-slate-400 mt-2">
            AI-gestützter Chat.
          </div>
        </div>
      </div>
    </div>
  );
};
