import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-background to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="flex items-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <UserCircle2 className="text-primary h-8 w-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <Avatar className="h-48 w-48 mb-6 border-4 border-primary">
                <AvatarFallback className="bg-primary text-5xl font-bold">AA</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold text-white mb-2">Akshat Ajmera</h3>
              <p className="text-gray-400 text-center">Software Developer</p>
              <p className="text-gray-400 text-center">BITS Pilani Hyderabad</p>
            </div>
          </motion.div>

          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#121212] border-none h-full overflow-hidden">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Hi, I’m Akshat Ajmera — an aspiring software engineer with a strong foundation in computer science and a passion for building impactful solutions.                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I’m driven by curiosity and a deep interest in exploring cutting-edge technologies, solving complex problems, and contributing to meaningful, user-focused innovations.                </p>
                <p className="text-gray-300 leading-relaxed">
                  With hands-on experience in data structures, algorithms, and multimodal data analysis, I enjoy collaborating with diverse teams to bring ideas to life. I thrive in environments that encourage creativity, continuous learning, and technical excellence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I’m eager to take on challenging projects, learn from industry leaders, and grow as a developer. Let’s connect and build something extraordinary together!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
