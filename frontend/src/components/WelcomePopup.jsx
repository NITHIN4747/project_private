import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomePopup = ({ isOpen, onEnter, onLater }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="intimate-grey-card p-8 rounded-3xl shadow-2xl max-w-md w-full border border-gray-200/30 depth-shadow-deep">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center"
              >
                <div className="mb-8">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, 8, -8, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-5xl mb-6 filter drop-shadow-lg"
                    style={{ animation: 'intimateHeartbeat 2s ease-in-out infinite' }}
                  >
                    💖
                  </motion.div>
                  <h2 className="text-2xl font-light text-gray-600 mb-6 leading-relaxed emotional-heading">
                    Please open this website<br />
                    <span className="font-medium text-gray-700 intimate-text">when you are alone</span>
                  </h2>
                  <p className="text-gray-500 text-sm whisper-text leading-relaxed">
                    This is something special, crafted just for you ✨<br />
                    <span className="text-xs italic opacity-75">Take a moment to breathe and feel...</span>
                  </p>
                </div>
                
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onEnter}
                    className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-4 px-6 rounded-2xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-green-500 hover:to-green-600"
                  >
                    Enter 💝
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onLater}
                    className="w-full bg-gradient-to-r from-red-300 to-red-400 text-white py-3 px-6 rounded-2xl font-light shadow-md hover:shadow-lg transition-all duration-300 hover:from-red-400 hover:to-red-500"
                  >
                    Later 💭
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;