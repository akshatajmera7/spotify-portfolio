import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, PauseCircle, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from 'lucide-react';
import { useScrollContext } from '@/context/ScrollContext';

const NowPlaying = () => {
  const { isScrolling, setIsScrolling } = useScrollContext();

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] py-4 px-4 z-30 hidden md:block"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.5, type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Currently playing */}
          <div className="flex items-center gap-3 w-1/4">
            <div className="w-14 h-14 bg-[#282828] rounded overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-primary/20">
                <span className="text-white font-bold">AA</span>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium truncate">Resume</h4>
              <p className="text-gray-400 text-xs truncate">Akshat Ajmera</p>
            </div>
          </div>

          {/* Player controls */}
          <div className="flex flex-col items-center justify-center w-2/4">
            <div className="flex items-center gap-4 mb-2">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Shuffle className="h-4 w-4" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                className="text-white bg-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform"
                onClick={toggleScrolling}
              >
                {isScrolling ? (
                  <PauseCircle className="h-10 w-10 fill-black text-black" />
                ) : (
                  <PlayCircle className="h-10 w-10 fill-black text-black" />
                )}
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <SkipForward className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Repeat className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 w-full max-w-md">
              <span className="text-gray-400 text-xs">1:26</span>
              <div className="relative flex-grow h-1 bg-[#5e5e5e] rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1/4 bg-white rounded-full"></div>
                <div
                  className="absolute top-0 left-[calc(25%-4px)] h-3 w-3 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity -translate-y-1/4"
                ></div>
              </div>
              <span className="text-gray-400 text-xs">4:35</span>
            </div>
          </div>

          {/* Volume controls */}
          <div className="flex items-center justify-end gap-3 w-1/4">
            <Volume2 className="text-gray-400 h-4 w-4" />
            <div className="relative w-24 h-1 bg-[#5e5e5e] rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-3/4 bg-white rounded-full"></div>
              <div
                className="absolute top-0 left-[calc(75%-4px)] h-3 w-3 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity -translate-y-1/4"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NowPlaying;