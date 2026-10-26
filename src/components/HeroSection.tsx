import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { audioEngine } from './AudioEngine';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-transparent text-[#111215] flex flex-col justify-between pt-28 sm:pt-36 pb-10 px-6 sm:px-11 overflow-hidden mb-[75vh]"
    >
      {/* ─────────────────────────────────────────────────────────────
          HERO STAGE: ZERO-OVERLAP LAYOUT
          Text strictly on left with vertical architectural rail
          Center-right is 100% open for the AETHER-01 camera
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1560px] mx-auto w-full my-auto py-8 sm:py-16 flex items-center justify-between">
        
        {/* Left Editorial Column with Rail Ruler - Pinned to Left */}
        <div className="flex items-start gap-6 max-w-[430px] mr-auto">
          {/* Vertical Architectural Ruler */}
          <div className="hidden sm:flex flex-col items-center gap-4 pt-2">
            <div className="w-[1px] h-2.5 bg-black/15" />
            <div className="w-[3px] h-6 rounded-sm bg-[#f2a044] shadow-[0_0_10px_rgba(242,160,68,0.4)]" />
            <div className="w-[1px] h-2.5 bg-black/15" />
            <div className="w-[1px] h-2.5 bg-black/15" />
            <div className="w-[1px] h-2.5 bg-black/15" />
          </div>

          <div className="space-y-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.2em] text-[#f2a044] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2a044]" />
              <span>OPTICAL PRECISION STUDIO</span>
            </div>

            {/* Headline matching Nexora reference */}
            <h1 className="text-3xl sm:text-5xl md:text-[3.2rem] font-bold tracking-tight text-[#111215] leading-[1.06] text-balance">
              See Beyond.<br />
              Beautifully<br />
              engineered.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#555760] leading-relaxed max-w-[380px] font-normal">
              A new perspective on optical technology. Designed with precision, built to look closer, and created to explore what lies beyond the surface.
            </p>

            {/* Buttons: Primary Amber Pill · Frosted Secondary Pill */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => scrollTo('#technology')}
                className="h-11 px-6 rounded-full bg-[#f2a044] hover:bg-[#e38f30] text-white text-[13px] font-semibold tracking-wide shadow-md shadow-[#f2a044]/30 hover:shadow-lg transition-all flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer"
              >
                <span>Explore the Technology</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="h-12 px-7 rounded-full bg-white/75 hover:bg-white text-[#111215] text-[13.5px] font-semibold border border-black/10 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#111215]" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Margin Floating Telemetry Pills (Away from camera center) */}
        <div className="hidden lg:flex flex-col gap-3.5">
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-2xl p-4 shadow-sm min-w-[170px]">
            <div className="text-[10px] font-mono tracking-widest text-[#7a7c85] uppercase mb-1">OPTICAL RESOLUTION</div>
            <div className="text-xl font-bold text-[#f2a044]">0.18 µm</div>
            <div className="text-[11px] text-[#7a7c85]">Multi-lens concentric</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-2xl p-4 shadow-sm min-w-[170px]">
            <div className="text-[10px] font-mono tracking-widest text-[#7a7c85] uppercase mb-1">ILLUMINATION</div>
            <div className="text-xl font-bold text-[#111215]">590 nm</div>
            <div className="text-[11px] text-[#7a7c85]">Amber optical halo</div>
          </div>
        </div>

      </div>

      {/* Bottom Status Rail & Scroll Prompt */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-4 flex items-center justify-between text-xs font-mono text-[#82848f]">
        <span className="tracking-widest uppercase">
          • AETHER-01 · PRECISION ENGINEERING
        </span>

        <button
          onClick={() => scrollTo('#vision')}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-black/10 flex items-center justify-center text-[#111215] hover:text-[#f2a044] hover:bg-white transition-all shadow-sm"
          aria-label="Scroll to explore"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
