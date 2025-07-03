import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BottomNavigation = ({ onReplayMemories, onSayMessage, onExit }) => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;
      setAtBottom(scrollPosition >= pageHeight - 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttons = [
    {
      label: "Replay Memories",
      icon: "🎬",
      onClick: onReplayMemories,
      gradient: "from-purple-400 to-pink-400"
    },
    {
      label: "Say Something to Me",
      icon: "💌",
      onClick: onSayMessage,
      gradient: "from-pink-400 to-rose-400"
    },
    {
      label: "Exit",
      icon: "🚪",
      onClick: onExit,
      gradient: "from-gray-400 to-gray-500"
    }
  ];

  if (!atBottom) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent p-6 z-40 mb-16"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          {buttons.map((button, index) => (
            <motion.button
              key={button.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              onClick={button.onClick}
              className={`group relative px-8 py-4 bg-gradient-to-r ${button.gradient} text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px] sm:min-w-[160px]`}
            >
              <div className="flex items-center justify-center space-x-3">
                <motion.span
                  animate={{ 
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-xl"
                >
                  {button.icon}
                </motion.span>
                <span className="text-sm sm:text-base">{button.label}</span>
              </div>

              {/* Hover effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 bg-white/20 rounded-2xl"
              />
            </motion.button>
          ))}
        </div>

        {/* Proposal line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <motion.p
            animate={{ 
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-gray-600 font-light text-lg italic"
          >
            "This is my style of proposing — not flashy, just heartfelt 💍"
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default BottomNavigation;