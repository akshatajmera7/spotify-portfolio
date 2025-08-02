import React from 'react';
import { motion } from 'framer-motion';
import { Library, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Floating bubbles for Projects section
const ProjectsBubbles = () => {
  const bubbles = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    size: Math.random() * 45 + 25,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 14 + 12,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-orange-400/6 to-purple-400/6 backdrop-blur-sm border border-orange-400/12"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: '100%',
          }}
          animate={{
            y: [-60, -800],
            x: [0, Math.sin(bubble.id * 0.5) * 80],
            opacity: [0, 0.8, 0],
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

const projectsData = [
  {
    id: 'seeds',
    title: 'SEEDS Over MS Teams',
    description: 'Accessibility-focused educational technology - Developing a Microsoft Teams application to replace the legacy Android interface for SEEDS, enhancing accessibility and lesson management for 500+ visually impaired students through a unified, scalable platform. Integrated Azure services, Vonage API, and RESTful backend for real-time audio conferencing and seamless session tracking.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['Microsoft Teams', 'Azure', 'Vonage API', 'RESTful APIs', 'Educational Technology'],
    period: 'Jan 2025 - Present',
    borderColor: 'border-blue-500',
    accentColor: 'text-blue-400'
  },
  {
    id: 'ai-tutor',
    title: 'AI Tutor - Full-Stack Development',
    description: 'Built AI Tutor, a full-stack AI-powered web app that generated 100+ personalized study plans using Gemini and Perplexity APIs, curated 500+ learning resources, and adapted to 3 learning styles for enhanced personalization. Designed responsive React + Tailwind interface with 90%+ Lighthouse performance, integrating Google Calendar API and AI chat tutoring with daily quizzes and gamified dashboard.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['React', 'Tailwind', 'Gemini API', 'Perplexity API', 'Google Calendar API', 'AI/ML'],
    period: 'May 2025 - Jul 2025',
    borderColor: 'border-purple-500',
    accentColor: 'text-purple-400'
  },
  {
    id: 'floor-planner',
    title: 'Floor Planner - Java Swing GUI',
    description: 'Developed an interactive room planning tool in Java Swing, allowing users to create, save, reload, and edit layouts efficiently through custom serialization and file I/O. Integrated over 15+ configurable elements like doors, windows, and furniture, with rotation support and built-in placement constraints to ensure layout validity and architectural accuracy.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['Java Swing', 'GUI Development', 'File I/O', 'Custom Serialization'],
    period: 'Oct 2024 - Dec 2024',
    borderColor: 'border-orange-500',
    accentColor: 'text-orange-400'
  },
  {
    id: 'canvas',
    title: 'Collaborative Canvas',
    description: 'A real-time collaborative whiteboard application where users can add notes, draw shapes, and write text. Features include real-time updates, and the ability to save/export boards as images or JSON files.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['React', 'WebSocket', 'Canvas API', 'Node.js'],
    borderColor: 'border-green-500',
    accentColor: 'text-green-400'
  },
  {
    id: 'slot',
    title: 'Slot Machine',
    description: 'A JavaScript-based slot machine game with interactive features and animations.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Web Animation'],
    borderColor: 'border-yellow-500',
    accentColor: 'text-yellow-400'
  },
  {
    id: 'todo',
    title: 'Todo App',
    description: 'A clean and efficient todo application built with JavaScript, featuring task management and local storage.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['JavaScript', 'Local Storage', 'UI/UX', 'Front-end'],
    borderColor: 'border-red-500',
    accentColor: 'text-red-400'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Floating Bubbles */}
      <ProjectsBubbles />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="flex items-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Library className="text-primary h-8 w-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-[#121212] border-none h-full flex flex-col border-l-4 ${project.borderColor} hover:bg-[#1A1A1A] transition-colors`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span>{project.title}</span>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                      {project.period && (
                        <p className={`text-sm font-normal mt-1 ${project.accentColor}`}>{project.period}</p>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-4 flex-grow">
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="bg-[#1A1A1A] text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="https://github.com/akshatajmera7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white py-3 px-6 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
