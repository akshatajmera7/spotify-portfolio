
import React, { useState, useEffect } from 'react';
import {
  PlayCircle, PauseCircle, SkipBack, SkipForward, Repeat, Shuffle,
  Github, Linkedin, Mail, Volume2
} from 'lucide-react';
import { useScrollContext } from '@/context/ScrollContext';

const NowPlaying = () => {
  const { isScrolling, setIsScrolling } = useScrollContext();
  const [progress, setProgress] = useState(0);

  // Calculate academic progress (2023-2027)
  useEffect(() => {
    const startDate = new Date('2023-08-01').getTime();
    const endDate = new Date('2027-05-01').getTime();
    const now = new Date().getTime();
    const total = endDate - startDate;
    const current = now - startDate;
    const percentage = Math.min(Math.max((current / total) * 100, 0), 100);
    setProgress(percentage);
  }, []);

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  return (
    <div className="w-full h-[90px] bg-black border-t border-[#282828] fixed bottom-0 z-50 px-4 flex items-center justify-between">
      {/* 1. Left: Profile & Marquee */}
      <div className="flex items-center gap-4 w-[30%] min-w-[180px]">
        <div className="w-14 h-14 bg-[#282828] rounded-md overflow-hidden relative shadow-lg group cursor-pointer">
          <img src="/aa.png" alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex flex-col justify-center overflow-hidden">
          <h4 className="text-white text-sm font-medium hover:underline cursor-pointer truncate">Akshat Ajmera</h4>
          <div className="w-40 overflow-hidden relative">
            <div className="animate-marquee whitespace-nowrap text-[#b3b3b3] text-xs hover:text-white transition-colors">
              Student at BITS Pilani Hyderabad • Full Stack Developer •
            </div>
          </div>
        </div>
      </div>

      {/* 2. Center: Controls & Academic Progress */}
      <div className="flex flex-col items-center max-w-[40%] w-full gap-2">
        <div className="flex items-center gap-6">
          <button className="text-[#b3b3b3] hover:text-white transition-colors" title="Shuffle">
            <Shuffle className="h-4 w-4" />
          </button>
          <button className="text-[#b3b3b3] hover:text-white transition-colors" title="Previous">
            <SkipBack className="h-5 w-5 fill-current" />
          </button>
          <button
            className="bg-white rounded-full p-2 hover:scale-105 transition-transform active:scale-95"
            onClick={toggleScrolling}
            title={isScrolling ? 'Pause' : 'Play'}
          >
            {isScrolling ? (
              <PauseCircle className="h-6 w-6 text-black fill-black" />
            ) : (
              <PlayCircle className="h-6 w-6 text-black fill-black" />
            )}
          </button>
          <button className="text-[#b3b3b3] hover:text-white transition-colors" title="Next">
            <SkipForward className="h-5 w-5 fill-current" />
          </button>
          <button className="text-[#b3b3b3] hover:text-white transition-colors" title="Repeat">
            <Repeat className="h-4 w-4" />
          </button>
        </div>

        {/* Progress Bar (Academic Journey) */}
        <div className="w-full flex items-center gap-2 text-xs font-medium text-[#b3b3b3]">
          <span>2023</span>
          <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full overflow-hidden relative group cursor-pointer">
            <div
              className="absolute inset-0 bg-white group-hover:bg-[#1db954] rounded-full transition-all duration-300"
              style={{ width: `${progress}% ` }}
            ></div>
          </div>
          <span>2027</span>
        </div>
      </div>

      {/* 3. Right: Socials (Volume controls style) */}
      <div className="flex items-center justify-end w-[30%] gap-4 min-w-[180px]">
        <a
          href="https://github.com/akshatajmera7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b3b3b3] hover:text-white transition-colors"
          title="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b3b3b3] hover:text-white transition-colors"
          title="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:akshatajmera@example.com"
          className="text-[#b3b3b3] hover:text-white transition-colors"
          title="Email"
        >
          <Mail className="h-5 w-5" />
        </a>

        <div className="flex items-center gap-2 w-20 group">
          <Volume2 className="h-5 w-5 text-[#b3b3b3]" />
          <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full overflow-hidden">
            <div className="h-full w-full bg-[#1db954] group-hover:bg-[#1ed760]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;