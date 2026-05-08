import React from 'react';
import { LayoutGrid, Send } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-24 md:pt-32">
      
      {/* Background Stars */}
      
      {/* Большая голубая звездочка: сдвинута выше на мобилках, добавлено яркое свечение */}
      <div className="absolute top-[8%] left-[4%] sm:top-[12%] sm:left-[8%] md:top-[20%] md:left-[10%] text-cyan-400 opacity-100 animate-pulse pointer-events-none drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
         <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
         </svg>
      </div>
      
      {/* Маленькая звездочка: также адаптирована под мобилки и сделана ярче */}
      <div className="absolute top-[22%] right-[5%] sm:top-[25%] sm:right-[10%] md:top-[35%] md:right-[15%] text-gray-100 opacity-90 animate-pulse delay-700 pointer-events-none drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
         <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
         </svg>
      </div>

      <div className="max-w-6xl mx-auto z-10">
        <h1 className="text-[2.25rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-sans font-bold tracking-tight leading-[1.1] mb-6">
          <span className="whitespace-nowrap">Visuals that convert.</span><br />
          <span className="font-serif italic font-normal text-gray-200 tracking-normal block mt-3 lg:mt-5">Edits that engage.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          Strategic video editing designed to turn your viewers into loyal clients and elevate your brand's presence.
        </p>
        
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full px-4 max-w-[400px] sm:max-w-none mx-auto">
          <a href="#work" className="w-[calc(50%-6px)] sm:w-auto group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3.5 sm:py-4 bg-white text-black rounded-full font-bold text-[14px] sm:text-[15px] transition-transform hover:scale-105 active:scale-95 shadow-xl">
            <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5" />
            projects
          </a>
          
          <a href="#contact" className="w-[calc(50%-6px)] sm:w-auto group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3.5 sm:py-4 bg-white text-black rounded-full font-bold text-[14px] sm:text-[15px] transition-transform hover:scale-105 active:scale-95 shadow-xl">
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
