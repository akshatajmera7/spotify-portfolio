
import Link from 'next/link';
import {
  Home,
  Search,
  Library,
  Plus,
  ArrowRight,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
} from 'lucide-react';
import { useScrollContext } from '@/context/ScrollContext';

const navigation = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'Search', href: '#', icon: Search },
];

const playlists = [
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Layers },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Achievements', href: '#achievements', icon: Award },
];

const Sidebar = () => {
  const { currentSection } = useScrollContext();

  return (
    <div className="w-[240px] bg-black flex-col gap-2 p-2 hidden md:flex h-full">
      {/* Top Box: Navigation */}
      <div className="bg-[#121212] rounded-lg p-4 flex flex-col gap-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items - center gap - 4 text - sm font - bold transition - colors ${currentSection === item.href.substring(1)
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
              } `}
          >
            <item.icon className="h-6 w-6" />
            {item.name}
          </Link>
        ))}
      </div>

      {/* Bottom Box: Library */}
      <div className="bg-[#121212] rounded-lg flex-1 flex flex-col overflow-hidden">
        {/* Library Header */}
        <div className="p-4 shadow-md z-10">
          <div className="flex items-center justify-between text-gray-400 hover:text-white transition-colors cursor-pointer mb-4">
            <div className="flex items-center gap-2">
              <Library className="h-6 w-6" />
              <span className="font-bold text-base">Your Library</span>
            </div>
            <div className="flex items-center gap-2">
              <Plus className="h-5 w-5 hover:bg-[#2a2a2a] rounded-full p-1 box-content" />
              <ArrowRight className="h-5 w-5 hover:bg-[#2a2a2a] rounded-full p-1 box-content" />
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex gap-2 mb-2 overflow-x-auto no-scrollbar">
            <span className="bg-[#2a2a2a] text-white text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#3bf4bc4d] whitespace-nowrap">
              Resume
            </span>
            <span className="bg-[#2a2a2a] text-white text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#3bf4bc4d] whitespace-nowrap">
              Portfolio
            </span>
          </div>
        </div>

        {/* Playlist List (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-2 pb-2 hover:overflow-y-auto scrollbar-thin">
          <div className="flex flex-col gap-1">
            {playlists.map((item) => {
              const isActive = currentSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items - center gap - 3 p - 2 rounded - md transition - colors group ${isActive ? 'bg-[#2a2a2a]' : 'hover:bg-[#1a1a1a]'
                    } `}
                >
                  <div className={`w - 12 h - 12 rounded bg - [#333] flex items - center justify - center shrink - 0 ${isActive ? 'bg-green-500/20 text-green-500' : 'text-gray-400'} `}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className={`text - sm font - medium truncate ${isActive ? 'text-green-500' : 'text-white group-hover:text-white'} `}>
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-400 truncate">
                      Playlist • Akshat
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;