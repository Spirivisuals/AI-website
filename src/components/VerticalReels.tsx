import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const VerticalReels = () => {
  const reels = [1, 2, 3, 4];

  return (
    <section className="py-24 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-3">Short-Form</h2>
          <p className="text-gray-400 text-lg">TikToks, Reels, and Shorts designed for retention.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative aspect-[9/16] rounded-2xl bg-white/5 border border-white/10 overflow-hidden group transition-all duration-300"
            >
              <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-primary-dark/60 transition-colors duration-300 z-10" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-4 group-hover:scale-110 group-hover:bg-neon-blue/20 transition-all duration-300 shadow-lg">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <span className="text-gray-200 font-medium tracking-wide translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Coming Soon</span>
              </div>
              
              {/* Border Gradient & Glow triggered via our custom class applied dynamically or standard tailwind */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
              
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 z-30 transition-colors pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all z-30 pointer-events-none" style={{
                background: "linear-gradient(to right, var(--color-neon-blue), var(--color-neon-purple))",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "source-out",
                maskComposite: "exclude",
                padding: "1px",
                opacity: 0,
              }} className="group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalReels;
