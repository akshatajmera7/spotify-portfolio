import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const achievementsData = [
  { id: 'imo', title: 'IMO International Rank 2', description: 'International Mathematics Olympiad' },
  { id: 'jee', title: 'JEE Mains 99.81%ile', description: 'Joint Entrance Examination' },
  { id: 'jeea', title: 'JEE Advanced AIR 7098', description: 'All India Rank 7098' },
  { id: 'kvpy', title: 'KVPY Scholar', description: 'Kishore Vaigyanik Protsahan Yojana' },
  { id: 'ntse', title: 'NTSE Qualified', description: 'National Talent Search Examination' },
  { id: 'sofimorank', title: 'SOF IMO Int. Rank 2', description: 'Science Olympiad Foundation' },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-b from-background to-black">
      <div className="container mx-auto max-w-6xl">
        {/* Commented out Key Achievements section */}
        {/* <motion.div
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
                  {achievement.description && (
                    <p className="text-gray-400 text-sm mt-1">{achievement.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Test Scores Section */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-10">
            <Award className="text-primary h-8 w-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Test Scores & Competitions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#121212] rounded-lg p-4 border-l-4 border-green-500">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-semibold">JEE MAINS</h4>
                  <p className="text-gray-400 text-sm">Jan 31, 2023</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold">Rank: 2222</p>
                  <p className="text-gray-400 text-sm">99.81%ile</p>
                </div>
              </div>
            </div>
            <div className="bg-[#121212] rounded-lg p-4 border-l-4 border-blue-500">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-semibold">JEE ADVANCED</h4>
                  <p className="text-gray-400 text-sm">May 18, 2023</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-400 font-bold">AIR: 7098</p>
                </div>
              </div>
            </div>
            <div className="bg-[#121212] rounded-lg p-4 border-l-4 border-purple-500">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-semibold">KVPY</h4>
                  <p className="text-gray-400 text-sm">Scholar</p>
                </div>
                <div className="text-right">
                  <p className="text-purple-400 font-bold">Qualified</p>
                </div>
              </div>
            </div>
            <div className="bg-[#121212] rounded-lg p-4 border-l-4 border-yellow-500">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-semibold">NTSE</h4>
                  <p className="text-gray-400 text-sm">National Level</p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-400 font-bold">Qualified</p>
                </div>
              </div>
            </div>
            <div className="bg-[#121212] rounded-lg p-4 border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-semibold">IMO International Rank 2</h4>
                  <p className="text-gray-400 text-sm">International Mathematics Olympiad</p>
                </div>
                <div className="text-right">
                  <p className="text-orange-400 font-bold">Rank: 2</p>
                </div>
              </div>
            </div>
            <div className="bg-[#121212] rounded-lg p-4 border-l-4 border-red-500">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-semibold">SOF IMO Int. Rank 2</h4>
                  <p className="text-gray-400 text-sm">Science Olympiad Foundation</p>
                </div>
                <div className="text-right">
                  <p className="text-red-400 font-bold">Rank: 2</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Summary Section */}
        <motion.div
          className="mt-12 bg-[#121212] p-6 rounded-lg border-l-4 border-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-lg font-semibold mb-2">Academic Excellence Summary</h3>
          <p className="text-gray-300 text-sm">
            Consistently demonstrated excellence in competitive examinations and academic competitions, 
            including achieving International Rank 2 in both IMO (International Mathematics Olympiad) and 
            SOF IMO (Science Olympiad Foundation), 99.81%ile in JEE Mains, and qualifying for 
            prestigious scholarships like KVPY and NTSE. These achievements reflect strong analytical 
            skills and dedication to academic excellence.
          </p>
        </motion.div>

        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default Achievements;
