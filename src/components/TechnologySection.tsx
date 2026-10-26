import React, { useState } from 'react';
import { audioEngine } from './AudioEngine';
import { Disc, Layers, Box } from 'lucide-react';

interface TechPillar {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const PILLARS: TechPillar[] = [
  {
    id: 'optical',
    title: 'Optical Architecture',
    description: 'Carefully arranged optical elements designed around the power and wavelength of light.',
    icon: Disc,
  },
  {
    id: 'precision',
    title: 'Precision Engineering',
    description: 'A considered approach to micrometer-level components, sub-nanometer alignment, and thermal stability.',
    icon: Layers,
  },
  {
    id: 'design',
    title: 'Purposeful Design',
    description: 'A distinctive form built directly around the internal optical assembly.',
    icon: Box,
  },
];

export const TechnologySection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('optical');

  return (
    <section
      id="technology"
      className="relative w-full min-h-screen py-28 sm:py-36 bg-transparent text-white flex flex-col justify-end pb-24 mb-[75vh]"
    >
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-11">
        {/* Protected Section Header */}
        <div className="inline-block p-6 sm:p-7 rounded-2xl bg-[#111215]/80 backdrop-blur-xl border border-white/12 shadow-[0_16px_36px_rgba(0,0,0,0.45)] max-w-xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f2a044]/40 bg-[#f2a044]/15 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f2a044]" />
            <span className="text-[10.5px] font-mono tracking-[0.2em] text-[#f2a044] uppercase font-semibold">
              THE TECHNOLOGY · 03
            </span>
          </div>

          {/* Heading in High-Visibility White with Soft Depth */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            Precision Begins <br />
            Beneath the Surface.
          </h2>
        </div>

        {/* 3 Blurry Whitish-Silver Gradient Box Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((pillar, idx) => {
            const isSelected = activePillar === pillar.id;
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                onClick={() => {
                  audioEngine.playClick();
                  setActivePillar(pillar.id);
                }}
                className={`p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 backdrop-blur-2xl ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#191c24]/90 via-[#231e19]/85 to-[#1a1b22]/90 border-[#f2a044] border-t-white/60 shadow-2xl shadow-[#f2a044]/25 scale-[1.02]'
                    : 'bg-gradient-to-br from-[#0f1014]/80 to-[#16181e]/65 border-white/12 border-t-white/30 hover:border-white/25 hover:from-[#14161c]/90 hover:to-[#1c2028]/75 shadow-xl shadow-black/40'
                }`}
                style={{
                  boxShadow: isSelected
                    ? 'inset 0 1px 2px rgba(255,255,255,0.35), 0 22px 55px rgba(0,0,0,0.55), 0 0 35px rgba(242,160,68,0.35)'
                    : 'inset 0 1px 1px rgba(255,255,255,0.18), 0 20px 50px rgba(0,0,0,0.45)',
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#f2a044] tracking-widest drop-shadow-[0_0_8px_rgba(242,160,68,0.5)]">
                      PILLAR 0{idx + 1}
                    </span>
                    <Icon className="w-5 h-5 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-white/70">
                  <span className="uppercase tracking-wider">CORE PILLAR</span>
                  <span className={`font-bold ${isSelected ? 'text-[#f2a044]' : 'text-white'}`}>
                    {isSelected ? 'ACTIVE' : 'SELECT'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
