import React from 'react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  {
    step: 'STEP 01',
    title: 'Observe',
    description: 'Bring the subject into view through the high-aperture optical system with illuminated guidance.',
  },
  {
    step: 'STEP 02',
    title: 'Capture',
    description: 'Use the multi-lens optical assembly to capture sub-surface information the system reveals.',
  },
  {
    step: 'STEP 03',
    title: 'Interpret',
    description: 'Turn captured optical information into meaningful analytical output for clinical applications.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="relative w-full min-h-screen py-28 sm:py-36 bg-transparent text-white flex flex-col justify-center mb-[75vh]"
    >
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-11">
        <div className="max-w-xl space-y-6">
          {/* Protected Section Header */}
          <div className="inline-block p-6 sm:p-7 rounded-2xl bg-[#111215]/80 backdrop-blur-xl border border-white/12 shadow-[0_16px_36px_rgba(0,0,0,0.45)] space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f2a044]/40 bg-[#f2a044]/15 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2a044]" />
              <span className="text-[10.5px] font-mono tracking-[0.2em] text-[#f2a044] uppercase font-semibold">
                HOW IT WORKS · 04
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              From Observation <br />
              to Insight.
            </h2>
          </div>

          {/* 3 Step Cards with Blurry Whitish-Silver Gradient */}
          <div className="space-y-4">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl border border-white/12 border-t-white/30 bg-gradient-to-br from-[#0f1014]/80 to-[#16181e]/65 backdrop-blur-2xl flex items-start gap-5 transition-all duration-300 hover:translate-x-1 hover:from-[#14161c]/90 hover:to-[#1c2028]/75 hover:border-white/25 hover:border-t-white/50"
                style={{
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.18), 0 20px 50px rgba(0,0,0,0.45)',
                }}
              >
                <span className="font-mono text-xs font-bold text-[#f2a044] bg-[#f2a044]/20 border border-[#f2a044]/50 px-3 py-1 rounded-full whitespace-nowrap drop-shadow-[0_0_8px_rgba(242,160,68,0.4)]">
                  {s.step}
                </span>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
