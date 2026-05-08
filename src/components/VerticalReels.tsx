import React from 'react';

const VerticalReels = () => {
  return (
    <section className="py-14 px-6 w-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-3">Selected Works</h2>
          <p className="text-gray-400 text-lg">High-impact vertical edits designed to retain attention.</p>
        </div>

        {/* Исправленная сетка: 1 колонка на мобилках, 3 колонки на ПК (начиная с md) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[360px] md:max-w-none w-full mx-auto">
          
          {/* Card 1 */}
          <div className="w-full max-w-[280px] aspect-[9/16] relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-xl">
            <video
              src="/videos/30k_business.mp4"
              poster="https://i.ibb.co/7NYrxQnt/Screenshot-2026-05-07-at-19-38-53.png"
              className="w-full h-full object-cover pointer-events-auto"
              style={{ position: 'relative', zIndex: 5 }}
              preload="metadata"
              controls
              playsInline
            />
          </div>
          
          {/* Card 2 */}
          <div className="w-full max-w-[280px] aspect-[9/16] relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-xl">
            <video
              src="/videos/Pablo.MP4"
              poster="https://i.ibb.co/0pffyLV9/Screenshot-2026-05-07-at-19-38-01.png"
              className="w-full h-full object-cover pointer-events-auto"
              style={{ position: 'relative', zIndex: 5 }}
              preload="metadata"
              controls
              playsInline
            />
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[280px] aspect-[9/16] relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-xl">
            <video
              src="/videos/Crypto_reel.MP4"
              poster="https://i.ibb.co/FLRG1w5n/Screenshot-2026-05-07-at-19-37-31.png"
              className="w-full h-full object-cover pointer-events-auto"
              style={{ position: 'relative', zIndex: 5 }}
              preload="metadata"
              controls
              playsInline
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default VerticalReels;
