import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { audioEngine } from './AudioEngine';

interface ApplicationArea {
  title: string;
  scope: string;
}

const AREAS: ApplicationArea[] = [
  {
    title: 'Clinical Assessment',
    scope: 'Specialized healthcare environments, non-invasive tissue analysis, and high-resolution examination.',
  },
  {
    title: 'Research & Exploration',
    scope: 'Scientific inquiry, laboratory investigation, spectroscopy, and advanced multi-spectral optical studies.',
  },
  {
    title: 'Professional Workflows',
    scope: 'Demanding professional settings requiring rapid, repeatable optical capture and diagnostic verification.',
  },
];

export const ApplicationsSection: React.FC = () => {
  const scrollToContact = () => {
    audioEngine.playClick();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="applications"
      className="relative w-full min-h-screen py-28 sm:py-36 bg-transparent text-white flex flex-col justify-end pb-24 mb-[75vh]"
    >
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-11">
        {/* Protected Section Header Bar */}
        <div className="inline-block p-6 sm:p-7 rounded-2xl bg-[#111215]/80 backdrop-blur-xl border border-white/12 shadow-[0_16px_36px_rgba(0,0,0,0.45)] max-w-xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f2a044]/40 bg-[#f2a044]/15 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f2a044]" />
            <span className="text-[10.5px] font-mono tracking-[0.2em] text-[#f2a044] uppercase font-semibold">
              APPLICATIONS · 05
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            Technology Shaped <br />
            Around Purpose.
          </h2>
        </div>

        {/* 3 Blurry Whitish-Silver Gradient Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {AREAS.map((area, idx) => (
            <div
              key={area.title}
              className="p-7 rounded-2xl border border-white/12 border-t-white/30 bg-gradient-to-br from-[#0f1014]/80 to-[#16181e]/65 backdrop-blur-2xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1 hover:from-[#14161c]/90 hover:to-[#1c2028]/75 hover:border-white/25 hover:border-t-white/50"
              style={{
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.18), 0 20px 50px rgba(0,0,0,0.45)',
              }}
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#f2a044] tracking-widest drop-shadow-[0_0_8px_rgba(242,160,68,0.5)]">
                  AREA 0{idx + 1}
                </span>

                <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/90 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                  {area.scope}
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                  ACTIVE FOCUS
                </span>
                <button
                  onClick={scrollToContact}
                  className="text-xs font-mono font-bold text-[#f2a044] hover:text-white flex items-center gap-1.5 transition-colors drop-shadow-[0_0_8px_rgba(242,160,68,0.4)]"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
