import React from 'react';
import { motion } from 'motion/react';

const Bio = () => {
  const tags = ["after effects", "premiere pro", "motion design", "video editing"];

  return (
    <section className="py-32 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Photo Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-4 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 blur-2xl" />
              <div className="absolute inset-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl z-10">
                <span className="text-gray-500 font-medium">Photo</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left pt-6"
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-semibold mb-6">
              I'm <span className="font-serif italic font-medium text-white/90">Spiridon</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-400 font-light max-w-2xl">
              <p>
                Hi, I'm Spiridon. I specialize in creating high-impact video edits where every frame serves a purpose. I work primarily in After Effects and Premiere Pro.
              </p>
              <p>
                I focus on rhythm, pacing, and emotion — building edits that capture attention and keep it.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-10">
              {tags.map((tag, idx) => (
                <div key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-medium tracking-wide">
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Bio;
