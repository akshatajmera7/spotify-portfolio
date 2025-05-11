import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="flex flex-col items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo-animate w-40 h-40 flex items-center justify-center relative">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0.6, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2
            }}
          >
            <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary text-6xl font-extrabold font-sans tracking-tighter">AA</span>
            </div>
          </motion.div>

          {/* Sound waves animation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-full h-full border-2 border-primary/30 rounded-full"
                initial={{ opacity: 0.7, scale: 0.5 }}
                animate={{
                  opacity: 0,
                  scale: i === 0 ? 1.2 : i === 1 ? 1.4 : 1.6
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.4,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-white text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Loading Akshat's musical resume...
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
