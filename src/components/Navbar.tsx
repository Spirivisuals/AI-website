import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300`}
    >
      <div className={`relative max-w-5xl mx-auto px-4 py-3 flex items-center justify-between rounded-[2rem] transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-[#0a1128]/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border border-transparent'
      }`}>
        
        {/* Левая часть (Логотип) */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/10 shrink-0">
             <img src="/images/Main_picture.webp" alt="Logo" className="w-full h-full object-cover" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
          </div>
          <div className="text-xl font-heading font-medium tracking-wide text-white">
            spirivisuals
          </div>
        </div>
        
        {/* Центр (Навигация) - Теперь с абсолютным позиционированием для идеального центра */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-[15px] font-medium text-gray-400">
          <a href="#hero" className="hover:text-white transition-colors">home</a>
          <a href="#work" className="hover:text-white transition-colors">projects</a>
          <a href="#about" className="hover:text-white transition-colors">about</a>
        </nav>

        {/* Правая часть (Кнопка) */}
        <div className="flex justify-end items-center relative z-10">
          <a href="#contact" className="px-5 py-2 sm:px-6 sm:py-2.5 bg-white text-black pl-4 pr-5 rounded-full font-bold text-[14px] sm:text-[15px] flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
            <Send className="w-4 h-4" />
            contact
          </a>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;
