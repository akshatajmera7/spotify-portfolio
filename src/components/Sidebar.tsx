import React from 'react';
import Link from 'next/link';
import {
  Home,
  Library,
  Award,
  Briefcase,
  GraduationCap,
  UserCircle2,
  Code,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollContext } from '@/context/ScrollContext';

const navItems = [
  { name: 'Home', href: 'hero', icon: <Home className="h-6 w-6" /> },
  { name: 'About Me', href: 'about', icon: <UserCircle2 className="h-6 w-6" /> },
  { name: 'Skills', href: 'skills', icon: <Code className="h-6 w-6" /> },
  { name: 'Education', href: 'education', icon: <GraduationCap className="h-6 w-6" /> },
  { name: 'Projects', href: 'projects', icon: <Library className="h-6 w-6" /> },
  { name: 'Achievements', href: 'achievements', icon: <Award className="h-6 w-6" /> },
  { name: 'Experience', href: 'experience', icon: <Briefcase className="h-6 w-6" /> },
];

const Sidebar = () => {
  const { currentSection } = useScrollContext();

  return (
    <motion.div
      className="w-60 bg-black h-full fixed left-0 top-0 p-6 hidden md:block"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">AA</span>
        </div>
        <span className="text-white font-bold text-xl">Resumify</span>
      </div>

      <div className="space-y-6">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.href}`}
              className={`flex items-center gap-4 py-2 px-3 rounded-md transition-colors ${
                currentSection === item.href
                  ? 'text-white bg-primary/10'
                  : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;