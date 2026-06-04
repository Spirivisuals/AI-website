import React from 'react';
import { LayoutGrid, Send } from 'lucide-react';

const Hero = () => {
  return (
    {/* ИЗМЕНЕНО: min-h-[100svh] и добавлены pb-12 md:pb-20 для идеального центрирования монолита по вертикали */}
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 md:pt-32 md:pb-20">
      
      {/* Background Stars (Constellation effect) */}
      
      {/* 1. Большая голубая звездочка (Слева сверху) */}
      <div className="absolute top-[12%] left-[4%] sm:top-[15%] sm:left-[8%] md:top-[18%] md:left-[15%] lg:top-[20%] lg:left-[20%] text-cyan-400 opacity-100 animate-pulse pointer-events-none drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
         <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
         </svg>
      </div>
      
      {/* 2. Средняя белая звездочка (Справа сверху) */}
      <div className="absolute top-[22%] right-[5%] sm:top-[20%] sm:right-[10%] md:top-[22%] md:right-[15%] lg:top-[25%] lg:right-[18%] text-gray-100 opacity-90 animate-pulse delay-700 pointer-events-none drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
         <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
         </svg>
      </div>

      {/* 3. Маленькая голубая звездочка (Слева снизу) - СКРЫТА НА МОБИЛКАХ */}
      <div className="hidden sm:block absolute top-[60%] left-[5%] sm:top-[65%] sm:left-[10%] md:top-[65%] md:left-[15%] lg:top-[65%] lg:left-[18%] text-cyan-400 opacity-80 animate-pulse delay-300 pointer-events-none drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
         <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
         </svg>
      </div>

      {/* 4. Крошечная белая звездочка (Справа снизу) - СКРЫТА НА МОБИЛКАХ */}
      <div className="hidden sm:block absolute top-[78%] right-[6%] sm:top-[75%] sm:right-[12%] md:top-[78%] md:right-[18%] lg:top-[80%] lg:right-[22%] text-gray-200 opacity-70 animate-pulse delay-500 pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
         <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
         </svg>
      </div>

      {/* Контент Hero */}
      <div className="max-w-6xl mx-auto z-10 relative w-full flex flex-col items-center">
        
        {/* ЗАГОЛОВОК: mb-4 sm:mb-6 подтягивает подстрочник ближе */}
        <h1 className="font-sans font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6 flex flex-col items-center">
          <span className="block whitespace-nowrap text-[14vw] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
            Clean cuts.
          </span>
          <span className="block whitespace-nowrap font-serif italic font-normal text-gray-200 tracking-normal text-[10.5vw] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem] mt-1 sm:mt-2 lg:mt-3">
            Seamless motion.
          </span>
        </h1>
        
        {/* ПОДСТРОЧНИК: mb-8 sm:mb-10 подтягивает кнопки на 32-40 пикселей */}
        <p className="text-[16px] sm:text-[17px] md:text-2xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto font-light leading-[1.6] md:leading-relaxed px-2 sm:px-0">
          Advanced video editing and motion graphics. Turning raw footage into pure, <span className="whitespace-nowrap">engaging storytelling.</span>
        </p>
        
        {/* КНОПКИ */}
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
