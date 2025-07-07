import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TerminalLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const lines = [
    '> booting CI/CD pipeline...',
    '> initializing DevOps mode...',
    '> loading portfolio components...',
    '> connecting to GitHub...',
    '> portfolio online ✅'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev >= lines.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="bg-gray-900 rounded-lg p-8 border border-[#33d1ff]/30 min-w-[400px]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 ml-2 text-sm">terminal</span>
        </div>
        
        <div className="font-mono text-sm">
          {lines.slice(0, currentLine + 1).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-[#33d1ff] mb-2"
            >
              {line}
            </motion.div>
          ))}
          
          {currentLine < lines.length - 1 && (
            <span className={`text-[#33d1ff] ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
              _
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};