import React from 'react';

const Bio = () => {
  const tags = ["premiere pro", "after effects"];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 w-full">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="flex flex-col items-center w-full">
          {/* Photo */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/5 shadow-2xl bg-white/5 flex items-center justify-center mb-6">
            <img 
              src="https://i.ibb.co/jkXRxLx8/IMG-1043.avif" 
              alt="Spiridon" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<span class="text-gray-500 font-medium text-xs md:text-sm text-center px-4">Image failed to load</span>';
              }}
            />
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#0a1128]/60 text-[13px] md:text-sm font-medium text-gray-300 mb-4 md:mb-6 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
            about me
          </div>
          
          <h2 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-sans font-bold tracking-tight mb-6 md:mb-8">
            I'm <span className="font-serif italic font-normal text-gray-200 tracking-normal pl-1">Spiridon</span>
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6 text-[16px] leading-[1.6] md:text-[1.25rem] text-gray-300 font-light">
          <p>
            Hi, I'm Spiridon. I specialize in high-impact video editing designed to convert views into tangible business results. My focus is on crafting engaging visual narratives that capture attention, drive audience action, and attract your ideal clients.
          </p>
          <p>
            I approach every project with a deep understanding of audience retention and marketing goals — shaping cohesive videos that elevate how your brand is perceived and remembered.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-8 md:mt-12 w-full">
            {tags.map((tag, idx) => (
              <div key={idx} className="px-5 py-2.5 rounded-xl md:rounded-2xl bg-transparent border border-white/10 text-[14px] md:text-[15px] font-medium text-gray-300 lowercase tracking-wide">
                {tag}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
