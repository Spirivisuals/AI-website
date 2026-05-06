import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-primary-dark/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-heading font-light tracking-widest text-white/90">
          spirivisuals
        </div>
        
        <nav className="flex items-center gap-6 md:gap-10 text-sm font-medium text-gray-400">
          <a href="#hero" className="hover:text-white transition-colors">home</a>
          <a href="#work" className="hover:text-white transition-colors">projects</a>
          <a href="#contact" className="hover:text-white transition-colors">contact</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
