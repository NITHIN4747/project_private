import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import WelcomePopup from './components/WelcomePopup';
import FloatingHearts from './components/FloatingHearts';
import TypewriterMessage from './components/TypewriterMessage';
import MemorySection from './components/MemorySection';
import MailCoverAnimation from './components/MailCoverAnimation';
import MessageBox from './components/MessageBox';
import BottomNavigation from './components/BottomNavigation';
import { Toaster } from './components/ui/toaster';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  
  const memorySectionRef = useRef(null);

  const handleEnter = () => {
    setShowWelcome(false);
    setTimeout(() => setShowContent(true), 500);
  };

  const handleExit = () => {
    const confirmExit = window.confirm("Are you sure you want to leave? 💔");
    if (confirmExit) {
      window.close();
    }
  };

  const handleReplayMemories = () => {
    if (memorySectionRef.current) {
      memorySectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const handleSayMessage = () => {
    setShowMessageBox(true);
  };

  const messages = [
    "Hey Sambar...",
    "Nee unnoda parents ku importance kudukara maari, ithu innum un mela irukka love & respect ah increase pannudhu...",
    "There hasn't been a day I haven't thought of you.",
    "Every memory with you still lives in my heart.",
    "I made this to show how much you still mean to you 💌"
  ];

  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 romantic-grey-gradient relative overflow-hidden">
      {/* Subtle background patterns for psychological depth */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
      {/* Welcome Popup */}
      <WelcomePopup 
        isOpen={showWelcome}
        onEnter={handleEnter}
        onLater={handleExit}
      />

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Floating Hearts Background */}
            <FloatingHearts />

            {/* Typewriter Messages */}
            <TypewriterMessage 
              messages={messages}
              onComplete={() => setTypewriterComplete(true)}
            />

            {/* Memory Section */}
            <div ref={memorySectionRef}>
              <MemorySection />
            </div>

            {/* Mail Cover Animation */}
            <MailCoverAnimation />

            {/* Bottom Navigation */}
            {typewriterComplete && (
              <BottomNavigation
                onReplayMemories={handleReplayMemories}
                onSayMessage={handleSayMessage}
                onExit={handleExit}
              />
            )}

            {/* Message Box Modal */}
            <MessageBox
              isOpen={showMessageBox}
              onClose={() => setShowMessageBox(false)}
            />

            {/* Toast Notifications */}
            <Toaster />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;