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
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl shadow-2xl max-w-md w-full border border-gray-200/50">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-6">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-4xl mb-4"
                  >
                    💖
                  </motion.div>
                  <h2 className="text-2xl font-light text-gray-700 mb-4 leading-relaxed">
                    Please open this website<br />
                    <span className="font-medium text-gray-600">when you are alone</span>
                  </h2>
                  <p className="text-gray-500 text-sm">
                    This is something special, just for you 💫
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