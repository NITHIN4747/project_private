import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterMessage = ({ messages, onComplete }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      setIsComplete(true);
      onComplete && onComplete();
      return;
    }

    const message = messages[currentMessageIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= message.length) {
        setCurrentText(message.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
          setCurrentText('');
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentMessageIndex, messages, onComplete]);

  const allMessages = [
    "Hey Sambar...",
    "Nee unnoda parents ku importance kudukara maari, ithu innum un mela irukka love & respect ah increase pannudhu...",
    "There hasn't been a day I haven't thought of you.",
    "Every memory with you still lives in my heart.",
    "I made this to show how much you still mean to me 💌"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 romantic-grey-gradient relative">
      {/* Emotional background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle animated shapes for psychological comfort */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-200/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-gray-300/20 to-transparent rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Current typing message */}
          {currentMessageIndex < allMessages.length && (
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative memory-card p-8 mx-4"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 leading-relaxed intimate-text">
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-2 text-gray-400 typewriter-cursor"
                >
                  |
                </motion.span>
              </p>
            </motion.div>
          )}

          {/* Show all previous messages when current is complete */}
          {currentMessageIndex > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="space-y-8"
            >
              {allMessages.slice(0, currentMessageIndex).map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 0.7, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
                  className="memory-card p-6 mx-4 depth-shadow-light"
                >
                  <p className="text-lg md:text-xl text-gray-500 leading-relaxed whisper-text">
                    {msg}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Completion indicator */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="flex justify-center items-center space-x-4 mt-12"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl"
              >
                💖
              </motion.div>
              <p className="text-gray-600 text-lg font-light">
                Scroll down to relive our memories...
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TypewriterMessage;