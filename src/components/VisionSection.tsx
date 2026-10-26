import React from 'react';
import { audioEngine } from './AudioEngine';

export const VisionSection: React.FC = () => {
  const handleCardClick = () => {
    audioEngine.playClick();
  };

  return (
    <section
      id="vision"
      className="relative w-full min-h-screen flex flex-col justify-end items-start pb-20 sm:pb-24 bg-transparent text-white pointer-events-none mb-[75vh]"
    >
      <div className="max-w-[1560px] w-full mx-auto px-6 sm:px-11 flex justify-start pointer-events-auto">
        {/* Docked Bottom Left Card - Clear of central camera zoom */}
        <div
          onClick={handleCardClick}
          className="max-w-[440px] w-full p-8 sm:p-9 rounded-[28px] bg-gradient-to-br from-[#0f1014]/85 to-[#16181e]/70 backdrop-blur-2xl border border-white/12 border-t-white/30 shadow-2xl transition-all hover:-translate-y-1 cursor-pointer"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#f2a044]/50 bg-[#f2a044]/20 backdrop-blur-md mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f2a044] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#f2a044] uppercase font-semibold">
              OUR VISION · 02
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-[1.1] mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
            A Different Way of Seeing.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#ebeef5]/90 leading-relaxed font-normal mb-5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
            We believe meaningful discoveries begin with a closer look. AETHER brings thoughtful design and optical engineering together to explore new perspectives through technology.
          </p>

          {/* Highlight Quote Box */}
          <div className="p-4 rounded-xl border-l-[2.5px] border-[#f2a044] bg-white/[0.06] backdrop-blur-md border border-white/10">
            <p className="text-base sm:text-lg font-semibold italic text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              “Better questions begin with a clearer view.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
