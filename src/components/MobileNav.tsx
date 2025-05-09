import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Library, Award, Briefcase, GraduationCap, UserCircle2, Code, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/', icon: <Home className="h-5 w-5" /> },
  { name: 'About Me', href: '#about', icon: <UserCircle2 className="h-5 w-5" /> },
  { name: 'Skills', href: '#skills', icon: <Code className="h-5 w-5" /> },
  { name: 'Education', href: '#education', icon: <GraduationCap className="h-5 w-5" /> },
  { name: 'Projects', href: '#projects', icon: <Library className="h-5 w-5" /> },
  { name: 'Achievements', href: '#achievements', icon: <Award className="h-5 w-5" /> },
  { name: 'Experience', href: '#experience', icon: <Briefcase className="h-5 w-5" /> },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-black flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AA</span>
          </div>
          <span className="text-white font-bold text-lg">Portfolio</span>
        </div>
        <button onClick={toggleMenu} className="text-white p-2">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-30 pt-16 px-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-4 text-gray-300 hover:text-white py-3 px-4 border-b border-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
