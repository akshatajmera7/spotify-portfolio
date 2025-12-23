import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const experienceData = [
  {
    id: 'indovision',
    title: 'Indovision Services',
    role: 'Web Development Intern',
    year: '2025',
    color: 'bg-blue-600',
    tracks: [
      'Developed iHRMS Installer/Updater using Laravel & PHP',
      'Worked with RESTful APIs & MySQL',
      'Contributed to 50K+ line codebase'
    ]
  },
  {
    id: 'ecell',
    title: 'E-Cell BITS Hyderabad',
    role: 'Senior Associate',
    year: '2024',
    color: 'bg-purple-600',
    tracks: [
      'Organized Flagship Events at LaunchPad E-Summit',
      'Managed event coordination & operations',
      'Led teams for seamless participant engagement'
    ]
  },
];

const Experience = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="experience" className="py-8 px-6 md:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-white mb-6">Discography</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              className="bg-[#181818] hover:bg-[#282828] p-4 rounded-md transition-all group cursor-pointer"
              onClick={() => toggleDetails(exp.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Album Art */}
              <div className={`w-full aspect-square ${exp.color} rounded-md mb-4 relative shadow-lg group-hover:shadow-xl transition-shadow flex items-center justify-center`}>
                <Briefcase className="w-16 h-16 text-white/50" />
                <div className={`absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10 hover:scale-105`}>
                  {activeId === exp.id ? <Pause className="w-6 h-6 text-black fill-black" /> : <Play className="w-6 h-6 text-black fill-black ml-1" />}
                </div>
              </div>

              {/* Card Meta */}
              <h3 className="text-white font-bold truncate mb-1">{exp.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {exp.year} • {exp.role}
              </p>

              {/* Tracklist (Details) */}
              <AnimatePresence>
                {activeId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="text-sm text-gray-300 space-y-2">
                      {exp.tracks.map((track, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">1.{i + 1}</span>
                          <span>{track}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
