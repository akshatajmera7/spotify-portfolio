import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, PauseCircle, Download, Clock3, ArrowLeft, X } from 'lucide-react';
import { useScrollContext } from '@/context/ScrollContext';

// Floating bubbles animation
const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-green-400/10 to-blue-400/10 backdrop-blur-sm border border-green-400/20"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: '100%',
          }}
          animate={{
            y: [-100, -800],
            x: [0, Math.sin(bubble.id) * 100],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

const chips = [
  { label: 'Computer Science Engineering' },
  { label: 'Full-Stack Developer' },
  { label: 'AI/ML Enthusiast' },
];

const WrappedPopup = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
    <div className="bg-[#232323] rounded-2xl p-8 max-w-3xl w-full relative shadow-2xl">
      <button
        className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="w-7 h-7" />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#232323] rounded-xl p-6 flex flex-col items-center">
          <span className="text-green-400 font-bold text-lg mb-2">Top Skill</span>
          <span className="text-white text-2xl font-semibold text-center">Data Structures & Algorithms</span>
          <div className="w-16 h-16 mt-4">
            <svg viewBox="0 0 36 36">
              <path
                className="text-green-700"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                style={{ strokeDasharray: '90, 100' }}
              />
            </svg>
          </div>
        </div>
        <div className="bg-[#232323] rounded-xl p-6 flex flex-col items-center">
          <span className="text-green-400 font-bold text-lg mb-2">Top Achievement</span>
          <span className="text-white text-2xl font-semibold text-center">Codeforces Candidate Master</span>
          <div className="w-16 h-16 mt-4">
            <svg viewBox="0 0 36 36">
              <path
                className="text-yellow-400"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                style={{ strokeDasharray: '75, 100' }}
              />
            </svg>
          </div>
        </div>
        <div className="bg-[#232323] rounded-xl p-6 flex flex-col items-center">
          <span className="text-green-400 font-bold text-lg mb-2">Most Played Tech</span>
          <span className="text-white text-2xl font-semibold text-center">React.js</span>
          <div className="w-16 h-16 mt-4">
            <svg viewBox="0 0 36 36">
              <path
                className="text-cyan-400"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                style={{ strokeDasharray: '80, 100' }}
              />
            </svg>
          </div>
        </div>
        <div className="bg-[#232323] rounded-xl p-6 flex flex-col items-center">
          <span className="text-green-400 font-bold text-lg mb-2">Recent Certification</span>
          <span className="text-white text-2xl font-semibold text-center">AWS Cloud Practitioner</span>
          <div className="w-16 h-16 mt-4">
            <svg viewBox="0 0 36 36">
              <path
                className="text-purple-400"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                style={{ strokeDasharray: '60, 100' }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const { isScrolling, setIsScrolling } = useScrollContext();
  const [showWrapped, setShowWrapped] = useState(false);

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  return (
    <section
      id="hero"
      className="pt-20 md:pt-8 pb-16 px-6 md:px-8 bg-black relative overflow-hidden"
    >
      {/* Floating Bubbles */}
      <FloatingBubbles />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Top gradient background */}
        <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-primary/30 to-transparent -z-10"></div>

        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-8 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile image */}
          <motion.div
            className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 shadow-2xl shadow-green-500/20 flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center rounded-full relative overflow-hidden">
              <span className="text-white text-5xl md:text-6xl lg:text-7xl font-bold">AA</span>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-full"></div>
            </div>
            {/* Floating indicators */}
            <motion.div 
              className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-1 -left-1 w-4 h-4 bg-blue-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          {/* Title and description */}
          <motion.div
            className="flex flex-col text-center lg:text-left flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-6">
              <p className="text-green-400 text-sm md:text-base tracking-wider uppercase font-medium mb-2">Resume</p>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mt-2 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Akshat Ajmera
              </h1>
              <p className="text-gray-300 mt-3 text-lg md:text-xl">
                B.E., Computer Science Engineering, 2027
              </p>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                CGPA: 8.44 | BITS Pilani Hyderabad | 📱 9636211800
              </p>
              {/* Interactive chips */}
              <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
                {chips.map((chip, index) => (
                  <motion.span
                    key={chip.label}
                    className="bg-[#232323] text-green-400 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-green-700/40 hover:bg-green-900/30 transition-all cursor-pointer border border-green-500/20 hover:border-green-500/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {chip.label}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
              {/* Play Button with enhanced styling */}
              <Button
                className={`relative overflow-hidden ${
                  isScrolling
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-green-500 hover:bg-green-600'
                } text-white rounded-full h-14 px-8 flex items-center group shadow-lg hover:shadow-green-500/30 transition-all duration-300`}
                onClick={toggleScrolling}
                aria-label={isScrolling ? 'Pause Audio Resume' : 'Play Audio Resume'}
                title={isScrolling ? 'Pause the audio summary' : 'Listen to a 4-minute summary of my skills & achievements'}
              >
                <span className="absolute inset-0 rounded-full group-hover:animate-pulse bg-green-400 opacity-20 pointer-events-none" />
                {isScrolling ? (
                  <PauseCircle className="mr-2 h-6 w-6" />
                ) : (
                  <PlayCircle className="mr-2 h-6 w-6" />
                )}
                <span className="font-semibold">{isScrolling ? 'Pause' : 'Listen'}</span>
              </Button>

              {/* Download CV styled as a visible button */}
              <a
                href="/Resume.pdf"
                download="Akshat_Ajmera_Resume_2025.pdf"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-full px-8 h-14 flex items-center justify-center bg-transparent transition-all duration-300 font-semibold shadow-lg hover:shadow-green-400/30"
                aria-label="Download CV"
                title="Download my updated resume as a PDF"
              >
                <Download className="mr-2 h-6 w-6" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* About Me Section integrated into Hero */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#121212] rounded-2xl p-8 border border-green-500/20 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <motion.span 
                  className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Full-Stack Developer
                </motion.span>
                <motion.span 
                  className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  AI/ML Enthusiast
                </motion.span>
                <motion.span 
                  className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Problem Solver
                </motion.span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Hi, I'm Akshat Ajmera, a Computer Science Engineering student at BITS Pilani Hyderabad with a strong passion for full-stack development and AI integration. I specialize in building scalable web applications using modern technologies like Laravel, React.js, and various cloud services.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    My experience spans from developing enterprise HRMS systems to creating AI-powered educational platforms. I've worked extensively with RESTful APIs, Microsoft Teams applications, and have hands-on experience with 50K+ line codebases.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div 
                  className="bg-[#1A1A1A] px-4 py-3 rounded-lg border-l-4 border-green-500 flex-1 min-w-[200px]"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-green-400 text-sm font-semibold">Current Focus</p>
                  <p className="text-gray-300 text-sm">Microsoft Teams Apps & AI Integration</p>
                </motion.div>
                <motion.div 
                  className="bg-[#1A1A1A] px-4 py-3 rounded-lg border-l-4 border-blue-500 flex-1 min-w-[200px]"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-blue-400 text-sm font-semibold">Experience</p>
                  <p className="text-gray-300 text-sm">Indovision SPL</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Wrapped Popup */}
        {showWrapped && <WrappedPopup onClose={() => setShowWrapped(false)} />}
      </div>
    </section>
  );
};

export default Hero;
