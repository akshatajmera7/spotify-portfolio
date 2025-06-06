import React, { createContext, useContext, useState, useEffect } from 'react';

interface ScrollContextProps {
  isScrolling: boolean;
  setIsScrolling: (scrolling: boolean) => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout | null = null;

    if (isScrolling) {
      scrollInterval = setInterval(() => {
        window.scrollBy({ top: 1, behavior: 'smooth' });
      }, 20);
    } else if (scrollInterval) {
      clearInterval(scrollInterval);
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isScrolling]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolling, setIsScrolling, currentSection, setCurrentSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};