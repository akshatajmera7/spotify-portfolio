import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Library,
  Award,
  Briefcase,
  GraduationCap,
  UserCircle2,
  Code,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollContext } from '@/context/ScrollContext';

const navItems = [
  { name: 'Home', href: 'hero', icon: <Home className="h-6 w-6" /> },
  { name: 'Skills', href: 'skills', icon: <Code className="h-6 w-6" /> },
  { name: 'Experience', href: 'experience', icon: <Briefcase className="h-6 w-6" /> },
  { name: 'Projects', href: 'projects', icon: <Library className="h-6 w-6" /> },
  { name: 'Education', href: 'education', icon: <GraduationCap className="h-6 w-6" /> },
  { name: 'Achievements', href: 'achievements', icon: <Award className="h-6 w-6" /> },
];

const Sidebar = ({ onToggle }: { onToggle: (isCollapsed: boolean) => void }) => {
  const { currentSection } = useScrollContext();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onToggle(newState); // Notify the parent component about the new state
  };

  return (
    <motion.div
      className={`${
        isCollapsed ? 'w-16' : 'w-60'
  } bg-gradient-to-b from-[#10291a] via-[#0e1c13] to-[#0a0a0a] h-full fixed left-0 top-0 p-6 hidden md:block transition-all duration-300`}
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {/* Sidebar Header */}
      <div
        className={`flex items-center gap-2 mb-8 ${
          isCollapsed ? 'justify-center cursor-pointer' : ''
        } bg-gradient-to-b from-[#10291a] via-[#0e1c13] to-[#0a0a0a]`}
        onClick={toggleSidebar} // Toggle sidebar on click
      >
        {isCollapsed ? (
          // Show a small arrow when collapsed
          <button
            className="bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary/90 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        ) : (
          // Show "AA" logo and collapse button when expanded
          <>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AA</span>
            </div>
            <span className="text-white font-bold text-xl">Portfolio</span>
            <button
              className="ml-auto bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Navigation Items */}
      {!isCollapsed && (
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
      )}
    </motion.div>
  );
};

export default Sidebar;