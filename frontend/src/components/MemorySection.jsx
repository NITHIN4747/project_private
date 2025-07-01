import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MemorySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideshowPhotos = [1, 2, 3, 4, 5];
  const filmTapePhotos = [6, 7, 8, 9, 10];
  
  const captions = [
    "A moment frozen in time ✨",
    "Still feels like yesterday 💖",
    "When happiness had a face 🌟",
    "Memories that light up my soul 💫",
    "Forever in my heart 🤍",
    "The way you smiled at me 😊",
    "Pure magic in every frame 🎭",
    "These little moments, big memories 📸",
    "Time stood still for us ⏰",
    "Perfect imperfections 💕"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 romantic-grey-gradient relative overflow-hidden">
      {/* Psychological depth layers */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-300/20 to-transparent"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-gray-600 mb-6 emotional-heading"
          >
            Our Beautiful Memories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg whisper-text leading-relaxed"
          >
            Every picture tells our story 💕<br />
            <span className="text-sm italic opacity-70">Each frame holds a piece of my heart</span>
          </motion.p>
        </div>

        {/* Slideshow Section (Photos 1-5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-light text-gray-600 text-center mb-8">
            Slideshow of Love 📸
          </h3>
          <div className="relative max-w-2xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={`/photos/${slideshowPhotos[currentSlide]}.jpg`}
                    alt={`Memory ${slideshowPhotos[currentSlide]}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600/e5e7eb/6b7280?text=Memory+${slideshowPhotos[currentSlide]}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-6 left-6 right-6 text-center"
                  >
                    <p className="text-white text-xl font-light">
                      {captions[slideshowPhotos[currentSlide] - 1]}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {slideshowPhotos.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-pink-400' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Film Tape Section (Photos 6-10) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light text-gray-600 text-center mb-8">
            Film Tape Memories 🎞️
          </h3>
          <div className="relative">
            {/* Film tape background */}
            <div className="bg-gray-800 py-8 px-4 rounded-2xl shadow-xl overflow-hidden relative">
              {/* Continuous scrolling film tape */}
              <motion.div
                animate={{ x: [0, -400] }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex space-x-6 pb-4"
                style={{ width: 'calc(100% + 400px)' }}
              >
                {/* First set of photos */}
                {filmTapePhotos.map((photoNum, index) => (
                  <motion.div
                    key={`first-${photoNum}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex-shrink-0 relative group"
                  >
                    <div className="w-64 h-48 bg-white p-2 rounded-lg shadow-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                      <img
                        src={`/photos/${photoNum}.jpg`}
                        alt={`Memory ${photoNum}`}
                        className="w-full h-full object-cover rounded"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Memory+${photoNum}`;
                        }}
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute -bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-center"
                    >
                      <p className="text-gray-700 text-sm font-light">
                        {captions[photoNum - 1]}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {filmTapePhotos.map((photoNum, index) => (
                  <motion.div
                    key={`second-${photoNum}`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex-shrink-0 relative group"
                  >
                    <div className="w-64 h-48 bg-white p-2 rounded-lg shadow-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                      <img
                        src={`/photos/${photoNum}.jpg`}
                        alt={`Memory ${photoNum}`}
                        className="w-full h-full object-cover rounded"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Memory+${photoNum}`;
                        }}
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute -bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-center"
                    >
                      <p className="text-gray-700 text-sm font-light">
                        {captions[photoNum - 1]}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Film holes */}
              <div className="absolute top-2 left-0 right-0 flex justify-around">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-900 rounded-full" />
                ))}
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-around">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-900 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MemorySection;