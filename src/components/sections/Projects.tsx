import React from 'react';
import { motion } from 'framer-motion';
import { Library, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const projectsData = [
  {
    id: 'canvas',
    title: 'Collaborative Canvas',
    description: 'A real-time collaborative whiteboard application where users can add notes, draw shapes, and write text. Features include multi-user support, real-time updates, and the ability to save/export boards as images or JSON files.',
    link: 'https://github.com/akshatajmera7/Collaborative-Canvas',
    technologies: ['React', 'WebSocket', 'Canvas API', 'Node.js'],
  },
  {
    id: 'planner',
    title: 'Floor Planner',
    description: 'Java GUI-based room planning tool with features for saving, reloading, and editing layouts. Includes drag-and-drop functionality and real-time overlap detection.',
    link: 'https://github.com/akshat-ajmera-7/Floor_Planner',
    technologies: ['Java', 'JavaFX', 'GUI Development'],
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
    description: 'A clean and efficient todo application built with JavaScript, featuring task management and local storage.',
    link: 'https://github.com/akshatajmera7/ToDo-App',
    technologies: ['JavaScript', 'Local Storage', 'UI/UX', 'Front-end'],
  },
  {
    id: 'pythongames',
    title: 'Python Games Collection',
    description: 'A collection of interactive games built using Python, demonstrating various programming concepts.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['Python', 'Game Development', 'OOP'],
  },
  {
    id: 'agewell',
    title: 'AgeWell',
    description: 'AI-driven elderly care solution, finalist in SEEP 2.0. Provides accessible support for independent living.',
    link: 'https://github.com/akshatajmera7',
    technologies: ['AI/ML', 'Healthcare', 'Python'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
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
              <Card className="bg-[#121212] border-none h-full flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex justify-between items-start">
                    <span>{project.title}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
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
