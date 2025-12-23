import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const educationData = [
  {
    id: 'bits',
    institution: 'BITS PILANI HYDERABAD',
    degree: 'B.E., Computer Science Engineering',
    period: '2023 - 2027',
    details: 'CGPA: 8.54',
    subjects: 'DSA, OOP, OS, DBMS'
  },
  {
    id: 'academy12',
    institution: 'CENTRAL ACADEMY, BHILWARA',
    degree: 'Class XII (CBSE)',
    period: '2023',
    details: '93.4%',
    subjects: null
  },
  {
    id: 'academy10',
    institution: 'CENTRAL ACADEMY, BHILWARA',
    degree: 'Class X (CBSE)',
    period: '2021',
    details: '97.8%',
    subjects: null
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 px-6 md:px-12 bg-black/40">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white">Education</h2>
        </motion.div>

        {/* List Header */}
        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-2 border-b border-[#282828] text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
          <div className="w-8 text-center">#</div>
          <div>Title</div>
          <div className="hidden md:block text-right">Date</div>
          <div className="text-right w-24"><Clock className="w-4 h-4 ml-auto" /></div>
        </div>

        {/* List Items */}
        <div className="space-y-1">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="group grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-3 rounded-md hover:bg-[#2a2a2a] transition-colors items-center cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-8 text-center text-gray-400 group-hover:text-white font-medium">
                {index + 1}
              </div>
              <div className="min-w-0">
                <div className="text-white font-medium truncate text-base mb-1">
                  {edu.institution}
                </div>
                <div className="text-gray-400 text-sm truncate">
                  {edu.degree}
                  {edu.subjects && <span className="hidden lg:inline"> • {edu.subjects}</span>}
                </div>
              </div>
              <div className="hidden md:block text-gray-400 text-sm text-right whitespace-nowrap">
                {edu.period}
              </div>
              <div className="text-gray-400 text-sm text-right w-24 font-medium tabular-nums group-hover:text-white">
                {edu.details}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
