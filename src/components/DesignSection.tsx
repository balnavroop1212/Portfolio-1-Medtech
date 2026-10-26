import React from 'react';
import { audioEngine } from './AudioEngine';

export const DesignSection: React.FC = () => {
  const handleCardClick = () => {
    audioEngine.playClick();
  };

  return (
    <section
      id="design"
      className="relative w-full min-h-screen py-28 sm:py-36 bg-transparent text-white flex items-center justify-start pointer-events-none mb-[75vh]"
    >
      <div className="max-w-[1560px] mx-auto w-full px-6 sm:px-11 flex justify-start pointer-events-auto">
        <div
          onClick={handleCardClick}
          className="max-w-[480px] w-full p-8 sm:p-10 rounded-[28px] bg-gradient-to-br from-[#0f1014]/85 to-[#16181e]/70 backdrop-blur-2xl border border-white/12 border-t-white/30 shadow-2xl transition-all hover:-translate-y-1 cursor-pointer"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#f2a044]/50 bg-[#f2a044]/20 backdrop-blur-md mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f2a044] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#f2a044] uppercase font-semibold">
              DESIGN &amp; ENGINEERING · 06
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
            Every Detail <br />
            Has a Reason.
          </h2>

          <p className="text-sm sm:text-base text-[#ebeef5]/90 leading-relaxed font-normal mb-5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
            From the refined exterior to the illuminated optical assembly, AETHER-01 brings together distinctive product design and a precision-focused engineering philosophy.
          </p>

          <div className="p-4 rounded-xl border-l-[2.5px] border-[#f2a044] bg-white/[0.06] backdrop-blur-md border border-white/10">
            <p className="text-base sm:text-lg font-semibold italic text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              “Purposeful in form. Precise in detail.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
