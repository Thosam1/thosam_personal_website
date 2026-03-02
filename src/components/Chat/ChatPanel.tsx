'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { motion } from 'framer-motion';
import { IoClose, IoSend } from 'react-icons/io5';
import ChatMessage from './ChatMessage';
import { canSendMessage, getRemainingMessages, recordMessage } from '@/utils/chat/rateLimit';

const SUGGESTED_PROMPTS = [
  'Who are you?',
  "What are Thösam's main projects?",
  'What did Thösam study at EPFL?',
  'What skills does Thösam have?',
];

export default function ChatPanel({ onClose }: Readonly<{ onClose: () => void }>) {
  const [input, setInput] = useState('');
  const [remaining, setRemaining] = useState(getRemainingMessages());
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
    onFinish: () => setIsThinking(false),
    onError: () => setIsThinking(false),
  });

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  // Turn off thinking once streaming starts
  useEffect(() => {
    if (status === 'streaming') {
      setIsThinking(false);
    }
  }, [status]);

  // Escape key to close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const doSend = useCallback((text: string) => {
    if (!canSendMessage()) return;
    recordMessage();
    setRemaining(getRemainingMessages());
    setIsThinking(true);
    sendMessage({ text });
  }, [sendMessage]);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput('');
    doSend(trimmed);
  }

  function handlePromptClick(prompt: string) {
    doSend(prompt);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  const isLimitReached = remaining <= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-24 right-4 sm:right-8 w-[calc(100vw-2rem)] sm:w-96 h-[min(28rem,calc(100dvh-7rem))] z-40 flex flex-col bg-bg-base border border-border-default rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-default bg-bg-elevated">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Chat with Thösam&apos;s AI</h3>
          <p className="text-xs text-text-subdued">{remaining} messages remaining today</p>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-bg-highlight transition-colors text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Close chat"
        >
          <IoClose size={20} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 && !isThinking && (
          <div className="text-center text-text-subdued text-sm mt-6 px-2">
            <p className="mb-2 text-lg">👋</p>
            <p className="mb-4">Hi there! Ask me anything about Thösam&apos;s projects, skills, education, or blog posts.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTED_PROMPTS.map(prompt => (
                <button
                  key={prompt}
                  onClick={() => handlePromptClick(prompt)}
                  className="rounded-full border border-border-default px-3 py-1 text-xs text-text-secondary hover:bg-bg-highlight hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isThinking && (
          <div className="flex justify-start mb-3" role="status" aria-live="polite">
            <div className="bg-bg-highlight text-text-secondary px-3 py-2 rounded-2xl rounded-bl-sm text-sm">
              <span className="inline-flex gap-1" aria-label="Thinking">
                <span className="animate-bounce" style={{ animationDelay: '0ms' }} aria-hidden="true">.</span>
                <span className="animate-bounce" style={{ animationDelay: '150ms' }} aria-hidden="true">.</span>
                <span className="animate-bounce" style={{ animationDelay: '300ms' }} aria-hidden="true">.</span>
              </span>
            </div>
          </div>
        )}

        {error && (
          <div className="flex justify-start mb-3">
            <div className="bg-red-500/10 text-red-400 px-3 py-2 rounded-2xl rounded-bl-sm text-sm">
              Something went wrong. Please try again.
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-border-default p-3 bg-bg-elevated">
        {isLimitReached ? (
          <p className="text-xs text-text-subdued text-center py-2">
            Daily message limit reached. Come back tomorrow!
          </p>
        ) : (
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about projects, skills, blog..."
              rows={1}
              className="flex-1 resize-none bg-bg-highlight text-text-primary text-sm rounded-xl px-3 py-2 outline-none placeholder:text-text-subdued max-h-24 overflow-y-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || status === 'streaming'}
              aria-disabled={!input.trim() || status === 'streaming'}
              className="p-2 rounded-xl bg-accent text-white hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Send message"
            >
              <IoSend size={18} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
