import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 md:w-20 md:h-20"
        >
          {/* Spotify-like Logo (Simplified) */}
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#1DB954" />
            <path d="M72.5 72.5C72.5 72.5 61 79 49 79C37 79 26.5 72.5 26.5 72.5" stroke="black" strokeWidth="6" strokeLinecap="round" />
            <path d="M80 58.5C80 58.5 65.5 67 49.5 67C33.5 67 19.5 58.5 19.5 58.5" stroke="black" strokeWidth="6" strokeLinecap="round" />
            <path d="M88 43.5C88 43.5 69.5 54 49.5 54C29.5 54 11.5 43.5 11.5 43.5" stroke="black" strokeWidth="7" strokeLinecap="round" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-green-500 font-medium tracking-widest text-sm uppercase"
        >
          Loading
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
