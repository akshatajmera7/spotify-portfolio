import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Play, MoreHorizontal } from 'lucide-react';
import { useScrollContext } from '@/context/ScrollContext';

const Hero = () => {
  const { setIsScrolling } = useScrollContext();

  return (
    <section id="hero" className="relative flex flex-col">
      {/* Artist Header Section */}
      <div className="flex flex-col md:flex-row items-end gap-6 px-6 pb-6 pt-24 bg-gradient-to-b from-transparent to-[#121212]/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-full flex-shrink-0"
        >
          <div className="w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
            <img
              src="/aa.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <div className="flex flex-col gap-2 mb-2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <div className="bg-[#3d91f4] rounded-full p-0.5" title="Verified Artist">
              <BadgeCheck className="w-5 h-5 text-white fill-[#3d91f4]" />
            </div>
            <span className="text-sm md:text-base font-medium text-white tracking-wide">Verified Artist</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter"
          >
            Akshat Ajmera
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-[#e0e0e0] font-medium text-sm md:text-base"
          >
            Full Stack Developer based in Hyderabad
          </motion.div>
        </div>
      </div>

      {/* Action Bar (Sticky) */}
      <div className="sticky top-16 z-30 px-6 py-4 bg-[#121212] flex items-center gap-6 border-b border-transparent">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsScrolling(true)}
          className="w-14 h-14 bg-[#1ed760] rounded-full flex items-center justify-center hover:bg-[#1fdf64] transition-colors shadow-lg"
          aria-label="Play Portfolio Summary"
        >
          <Play className="w-7 h-7 text-black fill-black ml-1" />
        </motion.button>

        <button className="px-6 py-1.5 border border-[#727272] rounded-full text-sm font-bold text-white hover:border-white hover:scale-105 transition-all uppercase tracking-widest bg-transparent">
          Follow
        </button>

        <button className="text-[#b3b3b3] hover:text-white transition-colors">
          <MoreHorizontal className="w-8 h-8" />
        </button>
      </div>

      {/* About / Bio Preview */}
      <div className="px-6 py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-white mb-4">About</h2>
        <p className="text-[#a7a7a7] leading-relaxed text-lg">
          Sophomore at BITS Pilani Hyderabad Campus achieving academic excellence with a CGPA of 8.54.
          Passionate Full-Stack Developer and Problem Solver with a knack for building scalable web applications
          and designing intuitive user interfaces. Currently orchestrating code and creativity to ship products that matter.
        </p>
      </div>
    </section>
  );
};

export default Hero;
