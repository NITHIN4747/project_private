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
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Current typing message */}
          {currentMessageIndex < allMessages.length && (
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 leading-relaxed">
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 text-pink-400"
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
              animate={{ opacity: 0.6 }}
              className="space-y-6"
            >
              {allMessages.slice(0, currentMessageIndex).map((msg, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-lg md:text-xl text-gray-500 leading-relaxed"
                >
                  {msg}
                </motion.p>
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