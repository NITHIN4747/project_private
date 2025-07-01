import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BottomNavigation = ({ onReplayMemories, onSayMessage, onExit }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const y = useTransform(scrollYProgress, [0.7, 0.9], [50, 0]);
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

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent p-6 z-40"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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
        </motion.div>

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
    </motion.div>
  );
};

export default BottomNavigation;