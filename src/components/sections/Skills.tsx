import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Minimal, consistent background color for all skills
const skillBadgeClass = 'bg-neutral-800/80 text-neutral-100 border border-neutral-700';

const technicalSkills = [
  'C++', 'C Programming', 'Java', 'Python', 'JavaScript', 'React.js', 'Node.js', 'PHP', 
  'Laravel', 'Blade', 'HTML + CSS', 'Tailwind CSS', 'Git', 'API Development', 
  'RESTful APIs', 'Laravel Passport', 'MySQL', 'Azure Integration Services', 
  'Microsoft Teams Apps', 'Vonage API', 'Data Structures & Algorithms', 'Object Oriented Programming',
  'Database Systems', 'Digital Design', 'Microprocessors'
];

const softSkills = [
  'Project Management', 'Event Organization', 'Leadership', 'Team Collaboration', 
  'Problem Solving', 'Agile Development', 'Documentation', 'Debugging'
];

// Floating bubbles for Skills section
const SkillsBubbles = () => {
  const bubbles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 15,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 8 + 12,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-400/5 to-cyan-400/5 backdrop-blur-sm border border-purple-400/10"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: '100%',
          }}
          animate={{
            y: [-50, -600],
            x: [0, Math.sin(bubble.id) * 50],
            opacity: [0, 0.5, 0],
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

const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <motion.div
      className={`${skillBadgeClass} rounded-full px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm`}
      whileHover={{ 
        scale: 1.08, 
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        y: -2
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {skill}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Floating Bubbles */}
      <SkillsBubbles />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="flex items-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Code className="text-primary h-8 w-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#121212] border-none hover-card h-full border-l-4 border-green-500 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <SkillBadge skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#121212] border-none hover-card h-full border-l-4 border-blue-500 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <SkillBadge skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;