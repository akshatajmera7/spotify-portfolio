import React, { ReactNode, useState, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import NowPlaying from '@/components/NowPlaying';
import MobileNav from '@/components/MobileNav';
import MobileNowPlaying from '@/components/MobileNowPlaying';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SpotifyLayoutProps {
    children: ReactNode;
}

const SpotifyLayout = ({ children }: SpotifyLayoutProps) => {
    const [headerOpacity, setHeaderOpacity] = useState(0);
    const mainRef = useRef<HTMLElement>(null);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        const scrollTop = e.currentTarget.scrollTop;
        const maxScroll = 200;
        const opacity = Math.min(scrollTop / maxScroll, 1);
        setHeaderOpacity(opacity);
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-black text-white font-sans">
            <div className="flex flex-1 overflow-hidden relative">
                {/* Left Sidebar - Hidden on mobile */}
                <Sidebar />

                {/* Main Content Area */}
                <main
                    ref={mainRef}
                    onScroll={handleScroll}
                    className="flex-1 rounded-lg bg-[#121212] m-2 ml-0 overflow-y-auto overflow-x-hidden relative scrollbar-hide"
                >
                    {/* Sticky Top Header */}
                    <div
                        className="sticky top-0 z-40 h-16 flex items-center justify-between px-6 transition-all duration-300"
                        style={{ backgroundColor: `rgba(18, 18, 18, ${headerOpacity})` }}
                    >
                        <div className="flex items-center gap-4">
                            <button className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90 cursor-not-allowed">
                                <ChevronLeft className="h-5 w-5 text-white" />
                            </button>
                            <button className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90 cursor-not-allowed">
                                <ChevronRight className="h-5 w-5 text-white" />
                            </button>
                        </div>

                        {headerOpacity > 0.8 && (
                            <div className="font-bold text-lg animate-fade-in">Akshat Ajmera</div>
                        )}

                        <div className="flex items-center gap-4">
                            <a
                                href="mailto:akshatajmera@example.com"
                                className="text-sm font-bold bg-white text-black px-4 py-1.5 rounded-full hover:scale-105 transition-transform"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Dynamic Background Gradient */}
                    <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-green-900/50 to-[#121212] pointer-events-none" />

                    <div className="relative z-10 pb-24">
                        {children}
                    </div>
                </main>
            </div>

            {/* Bottom Player Bar - Desktop */}
            <div className="hidden md:block h-[90px] w-full">
                <NowPlaying />
            </div>

            {/* Mobile Nav & Player */}
            <div className="md:hidden">
                <MobileNowPlaying />
                <MobileNav />
            </div>
        </div>
    );
};

export default SpotifyLayout;
