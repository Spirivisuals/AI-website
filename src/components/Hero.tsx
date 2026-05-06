import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto z-10"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-semibold tracking-tight leading-[1.05] mb-8">
          Frame by frame.<br />
          Built to <span className="font-serif italic font-medium text-white/95">perform.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
          I create video edits that turn views into engagement.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#work" className="group relative px-8 py-4 bg-white text-primary-dark rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              View Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a href="#contact" className="px-8 py-4 rounded-full font-medium text-lg border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm text-gray-300 hover:text-white">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
