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
                  Hi, I'm Akshat Ajmera, an aspiring software engineer with a strong foundation in computer science fundamentals. My passion lies in exploring cutting-edge technologies, solving complex problems, and building impactful solutions. I thrive in collaborative environments and enjoy working with talented individuals to drive innovation.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  With experience in data structures, algorithms, and multimodal data analysis, I am eager to learn from experienced professionals and take on challenging projects that push my boundaries. Whether it's contributing to meaningful initiatives or creating efficient, user-friendly applications, I am committed to delivering exceptional results.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Let's connect and create something extraordinary together!
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
