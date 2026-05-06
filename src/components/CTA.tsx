import React from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Twitter } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 px-6 relative flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-semibold mb-6">Let's talk about your project.</h2>
          <p className="text-xl text-gray-400 mb-14 max-w-xl mx-auto leading-relaxed">
            Reach out via Telegram, Email, or X to discuss how we can elevate your content.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="https://t.me/spiri_visuals" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(56, 189, 248, 0.2)" }}
                className="px-8 py-4 rounded-full font-medium text-lg border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-gray-200 hover:text-white"
              >
                <Send className="w-5 h-5" /> Telegram
              </motion.div>
            </a>

            <a href="mailto:spirivisuals@gmail.com" className="w-full sm:w-auto">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.2)" }}
                className="px-8 py-4 rounded-full font-medium text-lg border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-gray-200 hover:text-white"
              >
                <Mail className="w-5 h-5" /> Email
              </motion.div>
            </a>
            
            <a href="https://x.com/spiri_visuals" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.1)" }}
                className="px-8 py-4 rounded-full font-medium text-lg border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-gray-200 hover:text-white"
              >
                <Twitter className="w-5 h-5" /> X (Twitter)
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
