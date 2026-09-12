'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const WA_NUMBER = '9779842129384';

const BOT_MESSAGES = [
  {
    id: 'greeting',
    text: "👋 Hi there! Welcome to KB Tech Solution.\n\nHow can we help you today?",
  },
  {
    id: 'ask',
    text: "Please describe your requirement or question below and we'll connect you with our team on WhatsApp.",
  },
];

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setShowInput(true), 800);
      return () => clearTimeout(timer);
    } else {
      setShowInput(false);
      setInput('');
    }
  }, [open]);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleSend = () => {
    const msg = input.trim();
    if (!msg) return;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div
          className="fixed z-50 bg-white shadow-2xl flex flex-col overflow-hidden
            /* mobile: full screen */
            inset-0
            /* sm+: bottom-right panel */
            sm:inset-auto sm:bottom-20 sm:right-5 sm:w-[340px] sm:h-[460px] sm:rounded-2xl"
        >
          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-xl">
              💬
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm leading-tight">KB Tech Solution</p>
              <p className="text-white/80 text-xs">Typically replies instantly</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 bg-[#ece5dd] flex flex-col gap-3">
            {BOT_MESSAGES.map((msg) => (
              <div key={msg.id} className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xs shrink-0">
                  KB
                </div>
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-sm max-w-[85%]">
                  <p className="text-gray-800 text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="px-3 py-3 bg-[#f0f0f0] border-t border-gray-200 flex items-end gap-2 shrink-0">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              rows={2}
              className="flex-1 resize-none rounded-xl px-3 py-2 text-sm text-gray-800 bg-white border border-gray-200 focus:outline-none focus:border-[#25D366] transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1ebe5d] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d] hover:scale-105 transition-all flex items-center justify-center"
        aria-label="Open WhatsApp chat"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>
    </>
  );
}
