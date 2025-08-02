import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Colorful background colors for skills
const skillColors = [
  'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-200 border border-red-500/30',
  'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-200 border border-blue-500/30',
  'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-200 border border-green-500/30',
  'bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-200 border border-purple-500/30',
  'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-200 border border-yellow-500/30',
  'bg-gradient-to-r from-pink-500/20 to-pink-600/20 text-pink-200 border border-pink-500/30',
  'bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 text-indigo-200 border border-indigo-500/30',
  'bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-200 border border-cyan-500/30',
  'bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-200 border border-emerald-500/30',
  'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-200 border border-orange-500/30',
  'bg-gradient-to-r from-violet-500/20 to-violet-600/20 text-violet-200 border border-violet-500/30',
  'bg-gradient-to-r from-rose-500/20 to-rose-600/20 text-rose-200 border border-rose-500/30',
];

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

const SkillBadge = ({ skill, index }: { skill: string; index: number }) => {
  const colorClass = skillColors[index % skillColors.length];
  
  return (
    <motion.div
      className={`${colorClass} rounded-full px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm`}
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
                      <SkillBadge skill={skill} index={index} />
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
                      <SkillBadge skill={skill} index={technicalSkills.length + index} />
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