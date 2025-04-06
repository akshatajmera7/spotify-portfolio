'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import { ScrollProvider } from '@/context/ScrollContext'; // Import ScrollProvider
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import NowPlaying from '@/components/NowPlaying';
import MobileNowPlaying from '@/components/MobileNowPlaying';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Experience from '@/components/sections/Experience';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ScrollProvider> {/* Wrap the entire app with ScrollProvider */}
      <main className="min-h-screen bg-background">
        <Sidebar />
        <MobileNav />

        <div className="md:pl-60 pb-24"> {/* Add padding to the bottom to account for the NowPlaying bar */}
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Achievements />
          <Experience />
          <Footer />
        </div>

        <NowPlaying />
        <MobileNowPlaying />
      </main>
    </ScrollProvider>
  );
}