import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experienceData = [
  {
    id: 'ecell',
    title: 'Senior Associate at E-Cell BITS Hyderabad',
    date: 'May 2023',
    description: 'Organized and managed the Flagship Events at LaunchPad\'24, the E-Summit of BITS Pilani Hyderabad, ensuring seamless operations and participant engagement.',
  },
  {
    id: 'seeds',
    title: 'SEEDS MS TEAMS APP (CURRENT PROJECT)',
    date: 'Present',
    description: 'Developing an MS Teams application to replace the Android-based teacher interface for SEEDS, an audio-based educational platform for blind children. Implementing API calls and backend integration to ensure seamless session management for teachers. Working with Azure services and Vonage API to handle real-time audio conferencing and session control.',
  },
  {
    id: 'portfolio',
    title: 'PORTFOLIO WEBSITE',
    date: '2023',
    description: 'Developed a personal portfolio website using React.js and Tailwind CSS, ensuring a responsive and visually appealing design across devices. Implemented dynamic content rendering and optimized the user experience with React components, while utilizing Tailwind CSS for fast, utility-first styling.',
    technologies: ['ReactJS', 'TypeScript', 'Tailwind'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="flex items-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Briefcase className="text-primary h-8 w-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Experience & Positions</h2>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#121212] border-none overflow-hidden hover-card">
                <CardContent className="p-6">
                  <div className="relative pl-8 border-l-2 border-primary">
                    <div className="absolute left-[-10px] top-0 w-5 h-5 bg-primary rounded-full"></div>
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-white text-xl font-bold">{exp.title}</h3>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-gray-400 mt-4">{exp.description}</p>

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech) => (
                            <span
                              key={`${exp.id}-${tech}`}
                              className="bg-[#1A1A1A] text-gray-300 text-xs px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
