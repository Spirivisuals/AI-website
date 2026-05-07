import React from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Twitter } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 min-h-[70vh] px-4 sm:px-6 relative flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10 w-full relative">
        {/* Subtle decorative stars matching Ref 3 */}
        <div className="absolute top-10 right-0 md:-right-20 text-gray-300 opacity-70 animate-pulse delay-300 pointer-events-none">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
        </div>
        <div className="absolute bottom-20 left-0 md:-left-10 text-cyan-500/30 opacity-60 animate-pulse delay-500 pointer-events-none">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
             <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                available for work
             </div>
          </div>

          <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight mb-2 md:mb-4 text-white leading-tight">
            Let's talk about your project.
          </h2>
          <p className="text-xl sm:text-2xl md:text-4xl font-serif italic font-normal text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to build something iconic together?
          </p>
          
          <div className="w-full mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
            <a href="https://t.me/spiri_visuals" target="_blank" rel="noopener noreferrer" className="w-[calc(50%-6px)] sm:w-auto">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 sm:px-8 py-3.5 rounded-full font-bold text-[14px] sm:text-[15px] bg-white text-black flex items-center justify-center gap-2 shadow-xl"
              >
                <Send className="w-4 h-4" /> Telegram
              </motion.div>
            </a>

            <a href="mailto:spirivisuals@gmail.com" className="w-[calc(50%-6px)] sm:w-auto">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 sm:px-8 py-3.5 rounded-full font-bold text-[14px] sm:text-[15px] bg-white text-black flex items-center justify-center gap-2 shadow-xl"
              >
                <Mail className="w-4 h-4" /> Email
              </motion.div>
            </a>
            
            <a href="https://x.com/spiri_visuals" target="_blank" rel="noopener noreferrer" className="w-full max-w-[220px] sm:max-w-none sm:w-auto mt-1 sm:mt-0">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 sm:px-8 py-3.5 rounded-full font-bold text-[14px] sm:text-[15px] bg-white text-black flex items-center justify-center gap-2 shadow-xl"
              >
                <Twitter className="w-4 h-4" /> Twitter
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
