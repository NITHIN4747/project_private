import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { database } from '../firebase';
import { ref, push } from 'firebase/database';
import { useToast } from '../hooks/use-toast';

const MessageBox = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    try {
      const messagesRef = ref(database, 'messages');
      await push(messagesRef, {
        message: message.trim(),
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      });
      
      toast({
        title: "Message Sent 💌",
        description: "Your message has been received with love.",
        duration: 5000,
      });
      
      setMessage('');
      onClose();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full border border-gray-200/50">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-center mb-6">
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
                    💌
                  </motion.div>
                  <h3 className="text-2xl font-light text-gray-700 mb-2">
                    Say Something to Me
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Your words mean everything to me
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your heart out... 💭"
                      rows={6}
                      className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent resize-none text-gray-700 placeholder-gray-400 bg-gradient-to-br from-gray-50 to-white"
                      disabled={isSubmitting}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex space-x-4"
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || !message.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 py-4 px-6 rounded-2xl font-medium text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
                        isSubmitting || !message.trim()
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Send Message 💝'
                      )}
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={onClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-4 bg-gray-200 text-gray-600 rounded-2xl font-medium hover:bg-gray-300 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MessageBox;