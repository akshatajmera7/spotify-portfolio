import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section id="achievements" className="py-12 px-6 md:px-12 bg-black/40">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white">Achievements & Test Scores</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-[#181818] p-6 rounded-lg hover:bg-[#282828] transition-colors"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold text-lg">JEE MAINS</h4>
              <span className="text-green-500 font-bold">2222 Rank</span>
            </div>
            <p className="text-gray-400 text-sm">99.81%ile • Jan 2023</p>
          </motion.div>

          <motion.div
            className="bg-[#181818] p-6 rounded-lg hover:bg-[#282828] transition-colors"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold text-lg">JEE ADVANCED</h4>
              <span className="text-blue-500 font-bold">7098 Rank</span>
            </div>
            <p className="text-gray-400 text-sm">All India Rank • May 2023</p>
          </motion.div>

          <motion.div
            className="bg-[#181818] p-6 rounded-lg hover:bg-[#282828] transition-colors"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold text-lg">KVPY</h4>
              <span className="text-purple-500 font-bold">Scholar</span>
            </div>
            <p className="text-gray-400 text-sm">Qualified Kishore Vaigyanik Protsahan Yojana</p>
          </motion.div>

          <motion.div
            className="bg-[#181818] p-6 rounded-lg hover:bg-[#282828] transition-colors"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold text-lg">NTSE</h4>
              <span className="text-yellow-500 font-bold">Qualified</span>
            </div>
            <p className="text-gray-400 text-sm">National Talent Search Examination</p>
          </motion.div>

          <motion.div
            className="bg-[#181818] p-6 rounded-lg hover:bg-[#282828] transition-colors"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold text-lg">IMO</h4>
              <span className="text-orange-500 font-bold">Rank 2</span>
            </div>
            <p className="text-gray-400 text-sm">International Mathematics Olympiad (Int. Rank)</p>
          </motion.div>

          <motion.div
            className="bg-[#181818] p-6 rounded-lg hover:bg-[#282828] transition-colors"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold text-lg">SOF IMO</h4>
              <span className="text-red-500 font-bold">Rank 2</span>
            </div>
            <p className="text-gray-400 text-sm">Science Olympiad Foundation</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
