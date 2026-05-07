import React from 'react';
import { motion } from 'motion/react';

const VerticalReels = () => {
  return (
    <section className="py-24 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-3">Selected Works</h2>
          <p className="text-gray-400 text-lg">High-impact vertical edits designed to retain attention.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-[360px] sm:max-w-[720px] md:max-w-none mx-auto w-full">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full aspect-[9/16] relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-xl"
          >
            <video
              src="/30k_business.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
          
          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full aspect-[9/16] relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-xl"
          >
            <video
              src="/Pablo.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full aspect-[9/16] relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-xl sm:col-span-2 md:col-span-1 mx-auto sm:max-w-[360px] md:max-w-none"
          >
            <video
              src="/Crypto_reel.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VerticalReels;
