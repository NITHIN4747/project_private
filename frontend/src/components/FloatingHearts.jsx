import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHeart = () => {
      const id = Date.now() + Math.random();
      const heart = {
        id,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 8 + Math.random() * 4,
        size: 0.8 + Math.random() * 0.4,
        emoji: ['💖', '💕', '💗', '🤍', '🩷', '💝'][Math.floor(Math.random() * 6)]
      };
      
      setHearts(prev => [...prev.slice(-20), heart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id));
      }, heart.duration * 1000);
    };

    const interval = setInterval(generateHeart, 2000);
    
    // Generate initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(generateHeart, i * 1000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ 
              y: "100vh", 
              x: `${heart.left}vw`,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              y: "-10vh",
              opacity: [0, 1, 1, 0],
              scale: heart.size,
              rotate: [0, 10, -10, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: "easeOut",
              opacity: { times: [0, 0.1, 0.9, 1] }
            }}
            className="absolute text-2xl"
            style={{
              fontSize: `${heart.size * 1.5}rem`,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}
          >
            {heart.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;