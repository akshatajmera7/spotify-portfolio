import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Floating bubbles for Education section
const EducationBubbles = () => {
  const bubbles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 55 + 30,
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: Math.random() * 16 + 14,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-yellow-400/5 to-orange-400/5 backdrop-blur-sm border border-yellow-400/10"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: '100%',
          }}
          animate={{
            y: [-70, -900],
            x: [0, Math.tan(bubble.id * 0.3) * 70],
            opacity: [0, 0.7, 0],
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

const educationData = [
  {
    id: 'bits',
    institution: 'BITS PILANI HYDERABAD',
    degree: 'B.E., Computer Science Engineering',
    period: 'August 2023 - 2027',
    details: 'CGPA: 8.44',
    subjects: 'Data Structures and Algorithms, Object Oriented Programming, Discrete Structures for CS, Microprocessors and Interfacing, Computer Programming, Database Systems, Digital Design',
    borderColor: 'border-purple-500',
    accentColor: 'text-purple-400'
  },
  {
    id: 'academy12',
    institution: 'CENTRAL ACADEMY, BHILWARA',
    degree: 'Class XII',
    period: '2023',
    details: 'Percentage: 93.4% (CBSE)',
    borderColor: 'border-orange-500',
    accentColor: 'text-orange-400'
  },
  {
    id: 'academy10',
    institution: 'CENTRAL ACADEMY, BHILWARA',
    degree: 'Class X',
    period: '2021',
    details: 'Percentage: 97.8% (CBSE)',
    borderColor: 'border-yellow-500',
    accentColor: 'text-yellow-400'
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-black to-background relative overflow-hidden">
      {/* Floating Bubbles */}
      <EducationBubbles />
      
      <div className="container mx-auto max-w-6xl relative z-10">
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
              <Card className={`bg-[#121212] border-none overflow-hidden hover-card border-l-4 ${edu.borderColor} hover:bg-[#1A1A1A] transition-colors`}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-white text-xl font-bold">{edu.institution}</h3>
                      <p className="text-gray-400">{edu.degree}</p>
                      <p className={`mt-2 ${edu.accentColor}`}>{edu.details}</p>
                      {edu.subjects && (
                        <p className="text-gray-500 text-sm mt-2 max-w-2xl">
                          <span className="font-medium text-gray-400">Key Subjects: </span>
                          {edu.subjects}
                        </p>
                      )}
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
