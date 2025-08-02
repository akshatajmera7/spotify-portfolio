import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Floating bubbles for Experience section
const ExperienceBubbles = () => {
  const bubbles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: Math.random() * 50 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 12 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-400/8 to-green-400/8 backdrop-blur-sm border border-blue-400/15"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: '100%',
          }}
          animate={{
            y: [-80, -700],
            x: [0, Math.cos(bubble.id) * 60],
            opacity: [0, 0.6, 0],
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

const experienceData = [
  {
    id: 'indovision',
    title: 'Web Development Intern',
    company: 'Indovision Services Private Limited',
    date: 'May 2025 - July 2025',
    description: 'Developed and maintained the iHRMS Installer/Updater module using Laravel, PHP, and Blade, streamlining deployment and version control processes across enterprise HRMS systems. Gained hands-on experience with RESTful APIs, Laravel Passport, and MySQL, contributing to a robust 50K+ line codebase while enhancing debugging, documentation, and agile development skills.',
    technologies: ['Laravel', 'PHP', 'Blade', 'RESTful APIs', 'Laravel Passport', 'MySQL'],
    borderColor: 'border-green-500',
    accentColor: 'text-green-400'
  },
  {
    id: 'ecell',
    title: 'Senior Associate',
    company: 'E-Cell BITS Hyderabad',
    date: 'Apr 2024 - Present',
    description: 'Organized and managed the Flagship Events at LaunchPad, the E-Summit of BITS Pilani Hyderabad, ensuring seamless operations and participant engagement. Led event coordination and management for one of the premier entrepreneurship summits in the region.',
    technologies: ['Event Management', 'Leadership', 'Project Coordination'],
    borderColor: 'border-blue-500',
    accentColor: 'text-blue-400'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Floating Bubbles */}
      <ExperienceBubbles />
      
      <div className="container mx-auto max-w-6xl relative z-10">
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
              <Card className={`bg-[#121212] border-none overflow-hidden hover-card border-l-4 ${exp.borderColor} hover:bg-[#1A1A1A] transition-colors`}>
                <CardContent className="p-6">
                  <div className="relative pl-8 border-l-2 border-primary">
                    <div className="absolute left-[-10px] top-0 w-5 h-5 bg-primary rounded-full"></div>
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-white text-xl font-bold">{exp.title}</h3>
                          <p className={`font-medium ${exp.accentColor}`}>{exp.company}</p>
                        </div>
                        <span className={`bg-primary/10 px-3 py-1 rounded-full text-sm whitespace-nowrap ${exp.accentColor}`}>
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
