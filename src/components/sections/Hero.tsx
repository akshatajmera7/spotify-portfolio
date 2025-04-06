import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, Download, Clock3 } from 'lucide-react';

const topSkills = [
  { id: 1, name: 'Software Development', duration: '3:45' },
  { id: 2, name: 'Data Structures & Algorithms', duration: '4:12' },
  { id: 3, name: 'Problem Solving', duration: '3:30' },
  { id: 4, name: 'Web Development', duration: '5:10' },
  { id: 5, name: 'Leadership', duration: '2:55' },
];

const Hero = () => {
  return (
    <section className="pt-20 md:pt-8 pb-16 px-6 md:px-8">
      <div className="md:pl-0">
        {/* Top gradient background */}
        <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-primary/30 to-transparent -z-10"></div>

        <motion.div
          className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mt-14 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile image */}
          <motion.div
            className="w-48 h-48 md:w-60 md:h-60 shadow-xl shadow-black/50 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/80 to-primary/30 flex items-center justify-center">
              <span className="text-white text-6xl font-bold">AA</span>
            </div>
          </motion.div>

          {/* Title and description */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-4">
              <p className="text-white text-sm">Resume</p>
              <h1 className="text-4xl md:text-7xl font-bold text-white mt-2">Akshat Ajmera</h1>
              <p className="text-gray-300 mt-2">Sophomore at BITS Pilani Hyderabad</p>
              <p className="text-gray-400 text-sm mt-1">Computer Science • Software Developer • Problem Solver</p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full h-12 px-6">
                <PlayCircle className="mr-2 h-5 w-5" />
                Play Resume
              </Button>

              <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-6 h-12">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </motion.div>

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
                {topSkills.map((skill, index) => (
                  <motion.tr
                    key={skill.id}
                    className="group border-b border-[#282828] hover:bg-[#282828] transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                  >
                    <td className="py-3 text-gray-400 group-hover:text-white">{index + 1}</td>
                    <td className="py-3 font-medium text-gray-200 group-hover:text-white">{skill.name}</td>
                    <td className="py-3 text-gray-400 text-right pr-8 group-hover:text-white">{skill.duration}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
