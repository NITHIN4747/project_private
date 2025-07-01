import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MailCoverAnimation = ({ onComplete }) => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showPaper, setShowPaper] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  const startAnimation = () => {
    if (isAnimationStarted) return;
    setIsAnimationStarted(true);
    
    setTimeout(() => setIsEnvelopeOpen(true), 1000);
    setTimeout(() => setShowPaper(true), 2000);
    setTimeout(() => setShowMessage(true), 3000);
    setTimeout(() => onComplete && onComplete(), 8000);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('mail-animation');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="mail-animation" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-20">
      <div className="relative w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", damping: 20 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-4">
            A Special Birthday Message 💌
          </h2>
          <p className="text-gray-500 text-lg">
            July 4th - A day that changed everything
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Envelope */}
          <motion.div
            initial={{ y: "50vh", scale: 0.5, rotate: -10 }}
            animate={{ 
              y: 0, 
              scale: 1, 
              rotate: 0,
              ...(isEnvelopeOpen && {
                scale: 1.1
              })
            }}
            transition={{ 
              duration: 1.5, 
              type: "spring", 
              damping: 15,
              stiffness: 100
            }}
            className="relative z-10"
          >
            {/* Envelope Body */}
            <div className="relative w-80 h-56 bg-gradient-to-br from-pink-100 to-rose-200 rounded-lg shadow-2xl overflow-hidden">
              {/* Background envelope image */}
              <img 
                src="/photos/mailcover.jpeg" 
                alt="Mail Cover"
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {/* Envelope flap */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ 
                  rotateX: isEnvelopeOpen ? -180 : 0,
                  transformOrigin: "bottom"
                }}
                transition={{ 
                  duration: 1, 
                  delay: isAnimationStarted ? 1 : 0,
                  type: "spring"
                }}
                className="absolute -top-16 left-0 right-0 h-20 bg-gradient-to-br from-rose-200 to-pink-300 rounded-t-lg border-b-2 border-pink-300 shadow-lg"
                style={{ 
                  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Heart seal */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl"
                >
                  💕
                </motion.div>
              </motion.div>

              {/* Envelope front */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg p-6 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-center"
                >
                  <p className="text-gray-600 font-light text-lg mb-2">
                    For Samritha 💖
                  </p>
                  <p className="text-gray-500 text-sm">
                    With all my love
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Paper sliding up */}
          <AnimatePresence>
            {showPaper && (
              <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                animate={{ y: -50, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1.5, 
                  type: "spring",
                  damping: 20
                }}
                className="absolute z-20 w-96 max-w-full mx-4"
              >
                <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showMessage ? 1 : 0 }}
                    transition={{ duration: 2 }}
                    className="text-center space-y-6"
                  >
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
                      🎂
                    </motion.div>
                    
                    <div className="space-y-4 text-gray-700 font-light">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: showMessage ? 1 : 0, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl font-medium text-pink-600"
                      >
                        Happy Birthday, Samritha 💖
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: showMessage ? 1 : 0, y: 0 }}
                        transition={{ delay: 1 }}
                        className="text-lg leading-relaxed"
                      >
                        And warmest wishes to the one who raised my Queen
                      </motion.p>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: showMessage ? 1 : 0, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="text-base"
                      >
                        You both are the lights that touched my life on July 4
                      </motion.p>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: showMessage ? 1 : 0, y: 0 }}
                        transition={{ delay: 2 }}
                        className="text-base"
                      >
                        As you begin your next journey into higher studies,<br />
                        I wish you joy, strength, and endless love.
                      </motion.p>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: showMessage ? 1 : 0, y: 0 }}
                        transition={{ delay: 2.5 }}
                        className="text-lg font-medium text-gray-600"
                      >
                        Forever proud of you. 💫
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MailCoverAnimation;