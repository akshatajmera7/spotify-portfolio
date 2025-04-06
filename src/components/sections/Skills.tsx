import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const technicalSkills = [
  'C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JS', 'React-JS', 'DSA',
  'RESTful APIs', 'Competitive Programming', 'Tailwind', 'Figma', 'Material UI',
  'Git', 'Netlify', 'Vercel', 'Azure', 'Vonage API'
];

const softSkills = [
  'Effective Communication', 'Project Management', 'Teamwork', 'Leadership', 'Critical Thinking'
];

const SkillBadge = ({ skill }: { skill: string }) => (
  <motion.div
    className="bg-[#1E1E1E] text-gray-200 rounded-full px-4 py-2 text-sm font-medium"
    whileHover={{ scale: 1.05, backgroundColor: 'hsl(142 72% 29% / 0.2)' }}
    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
  >
    {skill}
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
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
            <Card className="bg-[#121212] border-none hover-card h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
            <Card className="bg-[#121212] border-none hover-card h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
