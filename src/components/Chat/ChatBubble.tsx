'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChatbubbleEllipses, IoClose } from 'react-icons/io5';
import ChatPanel from './ChatPanel';

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && <ChatPanel onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      <div className="fixed bottom-6 right-4 sm:right-8 z-40">
        <motion.button
          onClick={() => setIsOpen(prev => !prev)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-bg-elevated text-text-secondary border border-border-default shadow-md cursor-pointer hover:bg-bg-highlight hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? <IoClose size={22} /> : <IoChatbubbleEllipses size={22} />}
        </motion.button>
      </div>
    </>
  );
}
