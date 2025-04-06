import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const achievementsData = [
  { id: 'imo', title: 'IMO INT. RANK - 2' },
  { id: 'jee', title: 'JEE MAINS 99.81%tile' },
  { id: 'ntse', title: 'NTSE Qualified' },
  { id: 'kvpy', title: 'KVPY Scholar' },
  { id: 'adv', title: 'JEE Advanced AIR-7098' },
  { id: 'nstse', title: 'NSTSE AIR 93' },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-b from-background to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="flex items-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Award className="text-primary h-8 w-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Key Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#121212] rounded-lg p-6 border-l-4 border-primary hover:bg-[#1A1A1A] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Award className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">{achievement.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-[#1E1E1E] px-8 py-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              <h3 className="text-white text-xl font-bold">Achievements Summary</h3>
            </div>
            <p className="text-gray-300 max-w-2xl">
              Consistently demonstrated excellence in competitive examinations and academic
              competitions, including International Mathematics Olympiad and prestigious
              engineering entrance exams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
