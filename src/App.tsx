/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VerticalReels from './components/VerticalReels';
import Bio from './components/Bio';
import HorizontalVideos from './components/HorizontalVideos';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen bg-primary-dark">
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-blue/10 blur-[150px] animate-gradient-shift" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-neon-purple/10 blur-[150px] animate-gradient-shift-delayed" />
        <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-[#0d1b2a]/40 blur-[100px] animate-gradient-shift" />
      </div>

      {/* Global Noise Overlay */}
      <div className="noise-bg" />
      
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
        
        <HorizontalVideos />
        
        <div id="contact">
          <CTA />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}
