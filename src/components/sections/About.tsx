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

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#121212] border-none h-full overflow-hidden border-l-4 border-green-500 hover:bg-[#1A1A1A] transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">AA</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">Akshat Ajmera</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Full-Stack Developer</span>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">AI/ML Enthusiast</span>
                        <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">CGPA: 8.44</span>
                      </div>
                      <p className="text-gray-400 text-sm">🎓 BITS Pilani Hyderabad | 📱 9636211800</p>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        Hi, I'm Akshat Ajmera, a Computer Science Engineering student at BITS Pilani Hyderabad with a strong passion for full-stack development and AI integration. I specialize in building scalable web applications using modern technologies like Laravel, React.js, and various cloud services.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        My experience spans from developing enterprise HRMS systems to creating AI-powered educational platforms. I've worked extensively with RESTful APIs, Microsoft Teams applications, and have hands-on experience with 50K+ line codebases. I'm particularly interested in accessibility-focused technology and educational platforms.
                      </p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <div className="bg-[#1A1A1A] px-3 py-2 rounded-lg border-l-2 border-green-500">
                          <p className="text-green-400 text-sm font-semibold">Current Focus</p>
                          <p className="text-gray-300 text-xs">Microsoft Teams Apps & AI Integration</p>
                        </div>
                        <div className="bg-[#1A1A1A] px-3 py-2 rounded-lg border-l-2 border-blue-500">
                          <p className="text-blue-400 text-sm font-semibold">Experience</p>
                          <p className="text-gray-300 text-xs">Indovision SPL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
