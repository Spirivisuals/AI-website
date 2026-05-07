import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300`}
    >
      <div className={`max-w-5xl mx-auto px-4 py-3 flex items-center justify-between rounded-[2rem] transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-[#0a1128]/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border border-transparent'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/10 shrink-0">
             <img src="https://i.ibb.co/jv7zygfw/2-ABF3-AC1-5-C59-40-CE-B336-1-E78-B8973-C31-2.jpg" alt="Logo" className="w-full h-full object-cover" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
          </div>
          <div className="text-xl font-heading font-medium tracking-wide text-white">
            spirivisuals
          </div>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-[15px] font-medium text-gray-400">
          <a href="#hero" className="hover:text-white transition-colors">home</a>
          <a href="#about" className="hover:text-white transition-colors">about</a>
          <a href="#work" className="hover:text-white transition-colors">projects</a>
        </nav>

        <div className="flex justify-end items-center">
          <a href="#contact" className="px-5 py-2 sm:px-6 sm:py-2.5 bg-white text-black pl-4 pr-5 rounded-full font-bold text-[14px] sm:text-[15px] flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
            <Send className="w-4 h-4" />
            contact
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
