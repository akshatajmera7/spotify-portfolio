import React from 'react';
import { motion } from 'framer-motion';
import { Library, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projectsData = [
  {
    id: 'seeds',
    title: 'SEEDS Over MS Teams',
    description: 'Accessibility-focused educational technology - Developing a Microsoft Teams application to replace the legacy Android interface for SEEDS, enhancing accessibility and lesson management for 500+ visually impaired students. Integrated Azure services and Vonage API.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['Microsoft Teams', 'Azure', 'Vonage API', 'RESTful APIs'],
    period: 'Jan 2025 - Present'
  },
  {
    id: 'ai-tutor',
    title: 'AI Tutor',
    description: 'Built an AI-powered study plan generator using Gemini and Perplexity APIs. Curated 500+ learning resources and adapted to 3 learning styles. Designed responsive React + Tailwind interface with 90%+ Lighthouse performance.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['React', 'Tailwind', 'Gemini API', 'AI/ML'],
    period: 'May 2025 - Jul 2025'
  },
  {
    id: 'floor-planner',
    title: 'Floor Planner',
    description: 'Developed an interactive room planning tool in Java Swing with custom serialization. Integrated 15+ configurable elements like doors and windows with rotation support and placement constraints.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['Java Swing', 'GUI Development', 'File I/O'],
    period: 'Oct 2024 - Dec 2024'
  },
  {
    id: 'canvas',
    title: 'Collaborative Canvas',
    description: 'Real-time collaborative whiteboard application using WebSocket. Users can add notes, draw shapes, and export boards.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['React', 'WebSocket', 'Canvas API', 'Node.js'],
  },
  {
    id: 'slot',
    title: 'Slot Machine',
    description: 'A JavaScript-based slot machine game with interactive features and animations.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Web Animation'],
  },
  {
    id: 'todo',
    title: 'Todo App',
    description: 'Clean and efficient todo application featuring task management and local storage.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['JavaScript', 'Local Storage', 'UI/UX'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6 md:px-12 bg-black/40">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#181818] border-none hover:bg-[#282828] transition-colors h-full flex flex-col group">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex justify-between items-start text-lg">
                    <span>{project.title}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-2 flex-grow">
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="text-xs text-gray-500 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-600 font-medium">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/akshatajmera7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold tracking-widest text-gray-400 hover:text-white uppercase transition-colors"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
