import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, PauseCircle, Download, Clock3, ArrowLeft, X } from 'lucide-react';
import { useScrollContext } from '@/context/ScrollContext';

// Example: category color mapping for skills
const skillCategory = [
  { id: 1, name: 'Software Development', duration: '3:45', category: 'web' },
  { id: 2, name: 'Data Structures & Algorithms', duration: '4:12', category: 'dsa' },
  { id: 3, name: 'Problem Solving', duration: '3:30', category: 'dsa' },
  { id: 4, name: 'Web Development', duration: '5:10', category: 'web' },
  { id: 5, name: 'Leadership', duration: '2:55', category: 'soft' },
];

const categoryColors: Record<string, string> = {
  web: 'hover:bg-green-900/60',
  dsa: 'hover:bg-cyan-900/60',
  soft: 'hover:bg-yellow-900/60',
};

const chips = [
  { label: 'Computer Science' },
  { label: 'Software Developer' },
  { label: 'Problem Solver' },
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
            {/* Example progress ring */}
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
  const { isScrolling, setIsScrolling, currentSection } = useScrollContext();
  const [showWrapped, setShowWrapped] = useState(false);

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  return (
    <section
      id="hero"
      className="pt-20 md:pt-8 pb-16 px-6 md:px-8 bg-black relative"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Top gradient background */}
        <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-primary/30 to-transparent -z-10"></div>

        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mt-8 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile image */}
          <motion.div
            className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 shadow-xl shadow-black/50 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/80 to-primary/30 flex items-center justify-center rounded-full">
              <span className="text-white text-4xl md:text-6xl font-bold">AA</span>
            </div>
          </motion.div>

          {/* Title and description */}
          <motion.div
            className="flex flex-col text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-4">
              <p className="text-white text-xs md:text-sm tracking-wider uppercase">Resume</p>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mt-2 leading-tight">
                Akshat Ajmera
              </h1>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Sophomore at BITS Pilani Hyderabad
              </p>
              {/* Interactive chips */}
              <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                {chips.map((chip) => (
                  <span
                    key={chip.label}
                    className="bg-[#232323] text-green-400 px-3 py-1 rounded-full text-xs font-medium shadow hover:shadow-green-700/40 hover:bg-green-900/30 transition cursor-pointer"
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
              {/* Play Button with pulse animation on hover */}
              <Button
                className={`relative overflow-hidden ${
                  isScrolling
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-primary hover:bg-primary/90'
                } text-white rounded-full h-12 px-8 flex items-center group`}
                onClick={toggleScrolling}
                aria-label={isScrolling ? 'Pause Audio Resume' : 'Play Audio Resume'}
                title={isScrolling ? 'Pause the audio summary' : 'Listen to a 4-minute summary of my skills & achievements'}
              >
                <span className="absolute inset-0 rounded-full group-hover:animate-pulse bg-green-700 opacity-20 pointer-events-none" />
                {isScrolling ? (
                  <PauseCircle className="mr-2 h-5 w-5" />
                ) : (
                  <PlayCircle className="mr-2 h-5 w-5" />
                )}
                {isScrolling ? 'Pause' : 'Listen'}
              </Button>

              {/* Download CV styled as a visible button */}
              <a
                href="/Resume.pdf"
                download="Akshat_Ajmera_CV.pdf"
                className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-full px-6 h-12 flex items-center justify-center bg-transparent transition font-semibold"
                aria-label="Download CV"
                title="Download my CV as a PDF"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>

              {/* View My Wrapped Button */}
              {/* <button
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black rounded-full px-6 h-12 flex items-center justify-center bg-transparent transition font-semibold"
                onClick={() => setShowWrapped(true)}
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17h16M4 12h16M4 7h16" /></svg>
                View My Wrapped
              </button> */}
            </div>
          </motion.div>
        </motion.div>

        {/* Tagline marquee (optional, subtle animation) */}
        {/* <div className="overflow-hidden mt-4">
          <motion.div
            className="whitespace-nowrap text-green-400 text-sm font-medium"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          >
            Computer Science • Software Developer • Problem Solver • Teamwork • Leadership • Critical Thinking
          </motion.div>
        </div> */}

        {/* Top skills table - Spotify-like playlist */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-[#282828]">
                <tr>
                  <th className="py-2 text-sm font-normal text-gray-400 w-12">#</th>
                  <th className="py-2 text-sm font-normal text-gray-400">TITLE</th>
                  <th className="py-2 text-sm font-normal text-gray-400 text-right pr-8">
                    <Clock3 className="h-4 w-4 inline-block" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {skillCategory.map((skill, index) => (
                  <motion.tr
                    key={skill.id}
                    className={`group border-b border-[#282828] transition-colors cursor-pointer ${
                      categoryColors[skill.category] || ''
                    } ${currentSection === `skill-${index}` ? 'bg-primary/20' : ''}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <td className="py-3 text-gray-400 group-hover:text-white">{index + 1}</td>
                    <td className="py-3 font-medium text-gray-200 group-hover:text-white flex items-center gap-2">
                      {skill.name}
                      {/* Details icon on hover */}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M12 8v4m0 4h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                      </span>
                    </td>
                    <td className="py-3 text-gray-400 text-right pr-8 group-hover:text-white">{skill.duration}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Wrapped Popup */}
        {showWrapped && <WrappedPopup onClose={() => setShowWrapped(false)} />}
      </div>
    </section>
  );
};

export default Hero;