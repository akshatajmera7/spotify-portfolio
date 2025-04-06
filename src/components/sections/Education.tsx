import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const educationData = [
  {
    id: 'bits',
    institution: 'BITS PILANI HYDERABAD',
    degree: 'BE Computer Science',
    period: 'August 2023-Present',
    details: 'CGPA: 8.65',
  },
  {
    id: 'academy12',
    institution: 'CENTRAL ACADEMY, BHILWARA',
    degree: 'Class XII',
    period: 'May 2023',
    details: 'Percentage: 93.8%',
  },
  {
    id: 'academy10',
    institution: 'CENTRAL ACADEMY, BHILWARA',
    degree: 'Class X',
    period: '',
    details: 'Percentage: 98%',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-black to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="flex items-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <GraduationCap className="text-primary h-8 w-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Education</h2>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#121212] border-none overflow-hidden hover-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-white text-xl font-bold">{edu.institution}</h3>
                      <p className="text-gray-400">{edu.degree}</p>
                      <p className="text-primary mt-2">{edu.details}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-[#1E1E1E] text-gray-300 px-3 py-1 rounded-full text-sm">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-[#121212] p-6 rounded-lg border-l-4 border-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-lg font-semibold mb-2">As an aspiring software engineer</h3>
          <p className="text-gray-300 text-sm">
            With a strong foundation in computer science fundamentals, I am constantly seeking opportunities
            to expand my technical knowledge and problem-solving abilities. I am eager to collaborate with
            talented individuals and learn from experienced professionals to drive innovation and deliver
            exceptional results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
