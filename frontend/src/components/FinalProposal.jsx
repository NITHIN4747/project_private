import React from 'react';
import { motion } from 'framer-motion';

const FinalProposal = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 romantic-grey-gradient relative overflow-hidden">
      {/* Emotional background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-200/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 3 }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-gray-300/15 to-transparent rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="memory-card p-12 depth-shadow-deep text-center"
        >
          {/* Heart animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl mb-8"
            style={{ animation: 'intimateHeartbeat 2s ease-in-out infinite' }}
          >
            💍
          </motion.div>

          {/* Main proposal text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-600"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed intimate-text">
              "This website... all these memories, the floating hearts, the wishes — everything you saw was made for only one reason..."
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl font-medium text-gray-700 emotional-heading">
                Because I still love you.
              </p>
              <p className="text-lg md:text-xl font-medium text-gray-700 emotional-heading">
                Because I still see a future with you.
              </p>
              <p className="text-lg md:text-xl font-medium text-gray-700 emotional-heading">
                Because... this is my way of proposing to you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: true }}
              className="space-y-3 py-6"
            >
              <p className="text-lg font-light text-gray-600 whisper-text">
                Not with rings or candles,
              </p>
              <p className="text-lg font-light text-gray-600 whisper-text">
                but with every ounce of emotion I had left.
              </p>
            </motion.div>

            {/* The final question */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 1.2, type: "spring" }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <p className="text-2xl md:text-3xl font-medium text-gray-700 emotional-heading mb-4">
                Will you give us one more chance? 
                <motion.span
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="ml-2"
                >
                  💍
                </motion.span>
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-gray-200/50"
            >
              <p className="text-lg font-light text-gray-600 whisper-text italic">
                – Nithin 
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="ml-2"
                >
                  💖
                </motion.span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating hearts around the proposal */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 3 + i * 0.3 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className={`absolute text-2xl`}
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
            >
              💕
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalProposal;