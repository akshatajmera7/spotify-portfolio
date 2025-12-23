import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Clock, Terminal, Database, Globe, Cpu, Layout, Server, GitBranch, Box } from 'lucide-react';

const skillsData = [
  { rank: 1, name: 'React.js', proficiency: 'Advanced', duration: '2 yrs', icon: Code2 },
  { rank: 2, name: 'Next.js', proficiency: 'Advanced', duration: '1.5 yrs', icon: Globe },
  { rank: 3, name: 'TypeScript', proficiency: 'Intermediate', duration: '1 yr', icon: Terminal },
  { rank: 4, name: 'Tailwind CSS', proficiency: 'Advanced', duration: '2 yrs', icon: Layout },
  { rank: 5, name: 'Node.js', proficiency: 'Intermediate', duration: '1.5 yrs', icon: Server },
  { rank: 6, name: 'Java', proficiency: 'Intermediate', duration: '3 yrs', icon: Cpu },
  { rank: 7, name: 'Python', proficiency: 'Intermediate', duration: '2 yrs', icon: Terminal },
  { rank: 8, name: 'MySQL', proficiency: 'Intermediate', duration: '2 yrs', icon: Database },
  { rank: 9, name: 'Git', proficiency: 'Advanced', duration: '3 yrs', icon: GitBranch },
  { rank: 10, name: 'C++', proficiency: 'Intermediate', duration: '2 yrs', icon: Box },
];

const Skills = () => {
  return (
    <section id="skills" className="py-6 px-6 md:px-8 bg-gradient-to-b from-[#121212] to-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-white mb-6">Popular</h2>

        <div className="flex flex-col">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group grid grid-cols-[16px_1fr_auto] md:grid-cols-[16px_4fr_3fr_1fr] gap-4 items-center py-2 px-4 rounded-md hover:bg-[#2a2a2a] transition-colors cursor-default"
            >
              {/* Rank / Play Icon */}
              <div className="text-gray-400 font-medium text-base w-4 text-center group-hover:hidden">
                {skill.rank}
              </div>
              <div className="hidden group-hover:block w-4 text-center">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
              </div>

              {/* Title */}
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-10 h-10 bg-[#282828] flex items-center justify-center rounded text-gray-400 group-hover:text-white">
                  <skill.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-white font-medium truncate text-base group-hover:underline cursor-pointer">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 text-xs md:hidden">
                    {skill.proficiency}
                  </span>
                </div>
              </div>

              {/* Album (Proficiency) */}
              <div className="hidden md:block text-gray-400 text-sm group-hover:text-white transition-colors truncate">
                {skill.proficiency}
              </div>

              {/* Duration */}
              <div className="text-gray-400 text-sm text-right group-hover:text-white transition-colors font-variant-numeric tabular-nums">
                {skill.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;