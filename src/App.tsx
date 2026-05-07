/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VerticalReels from './components/VerticalReels';
import Bio from './components/Bio';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#070d1e] text-white selection:bg-cyan-500/30 font-sans">
      {/* Premium Background Gradient */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030612]">
        {/* Subtle radial gradient layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(14,24,56,0.8)_0%,rgba(3,6,18,0)_100%)]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#0ea5e9]/10 blur-[130px] animate-gradient-shift mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#4f46e5]/15 blur-[120px] animate-gradient-shift-delayed mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#2563eb]/10 blur-[150px] animate-[gradient-shift_18s_ease-in-out_infinite_alternate] mix-blend-screen" />
      </div>

      {/* Global Noise Overlay */}
      <div className="noise-bg opacity-40 mix-blend-overlay" />
      
      <div className="relative z-10 w-full">
        <Navbar />
        
        <div id="hero">
          <Hero />
        </div>
        
        <div id="work">
          <VerticalReels />
        </div>
        
        <div id="about">
          <Bio />
        </div>
        
        <div id="contact">
          <CTA />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}
