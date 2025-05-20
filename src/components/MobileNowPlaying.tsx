import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, PauseCircle } from 'lucide-react';
import { useScrollContext } from '@/context/ScrollContext';

const MobileNowPlaying = () => {
  const { isScrolling, setIsScrolling } = useScrollContext();

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-[#181818] py-2 px-4 z-30 block"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.5, type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#282828] rounded overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-primary/20">
              <span className="text-white font-bold text-xs">AA</span>
            </div>
          </div>
          <div>
            <h4 className="text-white text-xs font-medium truncate max-w-[120px]">Resume</h4>
            <p className="text-gray-400 text-[10px] truncate max-w-[120px]">Akshat Ajmera</p>
          </div>
        </div>

        <button
          className="text-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
          onClick={() => setIsScrolling(!isScrolling)}
        >
          {isScrolling ? (
            <PauseCircle className="h-8 w-8 text-primary" />
          ) : (
            <PlayCircle className="h-8 w-8 text-primary" />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default MobileNowPlaying;