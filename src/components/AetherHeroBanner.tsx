import React, { forwardRef } from 'react';
import { TeLogo } from './TeLogo';
import { audioEngine } from './AudioEngine';

export type TextTheme = 'dark-text' | 'white-text' | 'plain-black';
export type ModelMode = 'aether-01' | 'tp-7';

export interface AetherHeroBannerProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  textTheme?: TextTheme;
  modelMode?: ModelMode;
  showOuterBorder?: boolean;
  isFullBleed?: boolean;
}

/**
 * Aether-01 Website Hero Section Banner
 * Aligns the Teenage Engineering minimalist banner architecture with the user's
 * AETHER-01 camera website background image.
 */
export const AetherHeroBanner = forwardRef<HTMLDivElement, AetherHeroBannerProps>(({
  activeTab,
  onTabChange,
  isPlayingAudio,
  onToggleAudio,
  textTheme = 'dark-text',
  modelMode = 'aether-01',
  showOuterBorder = true,
  isFullBleed = false,
}, ref) => {
  const navItems = ['INFO', 'NEWS', 'FEATURES', 'BUY'];

  // Color tokens based on chosen theme
  const isDarkText = textTheme === 'dark-text';
  const isPlainBlack = textTheme === 'plain-black';

  const textColorClass = isDarkText ? 'text-neutral-900' : 'text-white';
  const subtextColorClass = isDarkText ? 'text-neutral-800' : 'text-white/90';
  const borderPillClass = isDarkText ? 'border-neutral-900/30 hover:border-neutral-900' : 'border-white/30 hover:border-white';
  const inactivePillClass = isDarkText
    ? 'bg-neutral-900/5 hover:bg-neutral-900/10 text-neutral-900 border border-neutral-900/20'
    : 'bg-black/40 hover:bg-black/60 text-white/90 border border-white/20';
  const activePillClass = isDarkText
    ? 'bg-neutral-950 text-white font-semibold shadow-md'
    : 'bg-white text-black font-semibold shadow-md';
  const dashedPillClass = isDarkText
    ? 'border-neutral-900/40 text-neutral-900 hover:border-neutral-900'
    : 'border-white/50 text-white hover:border-white';
  const dividerBorderClass = isDarkText ? 'border-neutral-900/20' : 'border-white/20';

  return (
    <div
      ref={ref}
      id="hero-banner-section"
      className={`relative w-full ${
        isFullBleed
          ? 'h-screen min-h-[700px]'
          : 'max-w-[1360px] aspect-[16/10] sm:aspect-[16/9.5] rounded-[28px] sm:rounded-[36px] md:rounded-[44px]'
      } overflow-hidden p-6 sm:p-10 md:p-12 flex flex-col justify-between select-none ${
        !isFullBleed && showOuterBorder
          ? isDarkText
            ? 'border border-neutral-300/80 shadow-2xl shadow-neutral-900/10'
            : 'border border-white/20 shadow-2xl shadow-black/80'
          : ''
      }`}
      style={{
        backgroundColor: isPlainBlack ? '#000000' : '#EAE7E2',
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          HERO BACKGROUND IMAGE (AETHER-01 CAMERA IN WARM STUDIO)
          ───────────────────────────────────────────────────────────── */}
      {!isPlainBlack && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/aistudio/Aether-01_Camera_in_Warm_Minimalist_Studio_15f58235.png"
            alt="Aether-01 Camera in Warm Minimalist Studio"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle contrast scrim when white-text mode is selected */}
          {textTheme === 'white-text' && (
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[0.5px]" />
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          1. TOP NAVIGATION BAR (FLOATING SEGMENTED CAPSULES)
          ───────────────────────────────────────────────────────────── */}
      <header className="relative z-10 w-full flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
        {/* Left Segment: Brand Logo + Nav Items */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Emblem Pill */}
          <button
            onClick={() => audioEngine.playClick()}
            className={`h-8 sm:h-9 px-3 rounded-full flex items-center justify-center transition-all focus:outline-none ${
              isDarkText
                ? 'bg-neutral-900/5 border border-neutral-900/30 hover:border-neutral-900 text-neutral-900'
                : 'bg-black/50 border border-white/30 hover:border-white text-white'
            }`}
            title="Aether / Teenage Engineering"
            aria-label="Logo"
          >
            <TeLogo className="w-4 h-4" />
          </button>

          {/* Navigation Links */}
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => {
                  audioEngine.playClick();
                  onTabChange(item);
                }}
                className={`h-8 sm:h-9 px-3.5 sm:px-5 rounded-full text-[10px] sm:text-xs tracking-[0.12em] transition-all duration-150 focus:outline-none ${
                  isActive
                    ? activePillClass
                    : inactivePillClass
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Right Segment: Discover Products + Subscribe + Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
          {/* Dashed Discover Pill */}
          <button
            onClick={() => audioEngine.playClick()}
            className={`h-8 sm:h-9 px-3.5 sm:px-5 rounded-full border border-dashed text-[10px] sm:text-xs tracking-[0.12em] transition-colors focus:outline-none hidden sm:flex items-center ${dashedPillClass}`}
          >
            DISCOVER ALL OUR PRODUCTS
          </button>

          {/* Subscribe Pill */}
          <button
            onClick={() => audioEngine.playClick()}
            className={`h-8 sm:h-9 px-4 sm:px-6 rounded-full text-[10px] sm:text-xs font-semibold tracking-[0.14em] transition-all focus:outline-none ${
              isDarkText
                ? 'bg-neutral-900 text-white hover:bg-black border border-neutral-800'
                : 'bg-neutral-950 text-white hover:bg-neutral-900 border border-white/30'
            }`}
          >
            SUBSCRIBE
          </button>

          {/* Grid / Hash symbol */}
          <button
            onClick={() => audioEngine.playClick()}
            className={`h-8 sm:h-9 w-8 sm:w-9 rounded-full flex items-center justify-center text-xs font-mono transition-colors focus:outline-none ${
              isDarkText
                ? 'border border-neutral-900/20 hover:border-neutral-900/60 text-neutral-900'
                : 'border border-white/20 hover:border-white/60 text-white'
            }`}
            aria-label="Menu"
          >
            #
          </button>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO TYPOGRAPHY & EDITORIAL OVERVIEW
          Left area (open): "AE" or "TP"
          Right area (open): "01" or "7" + Connectivity specs + Play trigger
          Center: Camera sits perfectly framed between both sides!
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 my-auto py-2 sm:py-4 grid grid-cols-12 items-center gap-4">
        {/* Left: Giant Display Letterforms ("AE" or "TP") */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5 flex items-center">
          {modelMode === 'aether-01' ? (
            /* Modular Block "AE" matching camera design language */
            <svg
              viewBox="0 0 320 220"
              className={`w-full max-w-[240px] sm:max-w-[300px] md:max-w-[380px] h-auto fill-current ${textColorClass}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Modular 'A' */}
              <g id="letter-A">
                <rect x="0" y="36" width="36" height="184" />
                <rect x="36" y="0" width="76" height="36" />
                <rect x="112" y="36" width="36" height="184" />
                <rect x="36" y="96" width="76" height="34" />
              </g>

              {/* Modular 'E' */}
              <g id="letter-E" transform="translate(164, 0)">
                <rect x="0" y="0" width="36" height="220" />
                <rect x="36" y="0" width="100" height="36" />
                <rect x="36" y="92" width="78" height="34" />
                <rect x="36" y="184" width="100" height="36" />
                {/* Stepped pixel corner details */}
                <rect x="116" y="92" width="20" height="18" />
                <rect x="116" y="184" width="20" height="18" />
              </g>
            </svg>
          ) : (
            /* Modular "TP" */
            <svg
              viewBox="0 0 330 240"
              className={`w-full max-w-[240px] sm:max-w-[300px] md:max-w-[380px] h-auto fill-current ${textColorClass}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="letter-T">
                <rect x="0" y="0" width="144" height="38" />
                <rect x="53" y="38" width="38" height="202" />
              </g>
              <g id="letter-P" transform="translate(162, 0)">
                <rect x="0" y="0" width="38" height="240" />
                <rect x="38" y="0" width="102" height="38" />
                <rect x="102" y="38" width="38" height="66" />
                <rect x="38" y="104" width="76" height="38" />
                <rect x="114" y="104" width="26" height="20" />
                <rect x="124" y="124" width="16" height="18" />
              </g>
            </svg>
          )}
        </div>

        {/* Center: Open negative space for the physical camera body */}
        <div className="hidden lg:block lg:col-span-2" aria-hidden="true" />

        {/* Right: Stepped Numeral ("01" or "7") + Connectivity copy & Play Trigger */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-between items-start md:items-end text-left md:text-right space-y-4">
          {/* Top Right Stepped Numeral */}
          <div className="w-full flex justify-start md:justify-end">
            {modelMode === 'aether-01' ? (
              /* Stepped Pixel "01" */
              <svg
                viewBox="0 0 220 120"
                className={`w-28 sm:w-36 md:w-44 h-auto fill-current ${textColorClass}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Modular '0' */}
                <g id="numeral-0">
                  <rect x="0" y="0" width="80" height="22" />
                  <rect x="0" y="22" width="24" height="76" />
                  <rect x="56" y="22" width="24" height="76" />
                  <rect x="0" y="98" width="80" height="22" />
                </g>
                {/* Modular '1' with stepped pixel base */}
                <g id="numeral-1" transform="translate(104, 0)">
                  <rect x="24" y="0" width="24" height="98" />
                  <rect x="6" y="14" width="18" height="16" />
                  <rect x="0" y="98" width="72" height="22" />
                </g>
              </svg>
            ) : (
              /* Stepped Pixel "7" */
              <svg
                viewBox="0 0 190 200"
                className={`w-20 sm:w-28 md:w-32 h-auto fill-current ${textColorClass}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="numeral-7">
                  <rect x="0" y="0" width="176" height="34" />
                  <rect x="138" y="34" width="38" height="30" />
                  <rect x="118" y="34" width="20" height="18" />
                  <rect x="112" y="64" width="40" height="30" />
                  <rect x="92" y="64" width="20" height="18" />
                  <rect x="86" y="94" width="40" height="30" />
                  <rect x="66" y="94" width="20" height="18" />
                  <rect x="60" y="124" width="40" height="30" />
                  <rect x="40" y="124" width="20" height="18" />
                  <rect x="34" y="154" width="40" height="30" />
                  <rect x="8" y="184" width="42" height="26" />
                </g>
              </svg>
            )}
          </div>

          {/* Verbatim Connectivity Text Block */}
          <p className={`font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-[1.6] tracking-[0.1em] max-w-[280px] sm:max-w-[320px] ${subtextColorClass}`}>
            MULTIPLE CONNECTIVITY OPTIONS INCLUDE USB-C, MFI AND BLUETOOTH. INSTANT VOICE-TO-TEXT TRANSCRIPTION AVAILABLE VIA THE IOS APP. INCLUDED IN THE BOX: 6.35 MM JACK ADAPTER, TEXTILE USB-C CABLE
          </p>

          {/* Interactive Dashed Circular Audio/Shutter Trigger (▷) */}
          <div className="pt-1 flex items-center gap-3">
            {isPlayingAudio && (
              <span className={`font-mono text-[10px] tracking-widest animate-pulse ${subtextColorClass}`}>
                MOTOR / SENSOR ACTIVE
              </span>
            )}
            <button
              onClick={onToggleAudio}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-dashed flex items-center justify-center transition-all duration-200 focus:outline-none ${
                isDarkText
                  ? isPlayingAudio
                    ? 'border-neutral-900 bg-neutral-900/10 scale-105'
                    : 'border-neutral-900/40 hover:border-neutral-900 hover:bg-neutral-900/5'
                  : isPlayingAudio
                  ? 'border-white bg-white/10 scale-105'
                  : 'border-white/50 hover:border-white hover:bg-white/5'
              }`}
              title={isPlayingAudio ? 'Stop mechanical sound' : 'Trigger shutter sound & haptic preview'}
              aria-label="Play sound"
            >
              <svg
                viewBox="0 0 24 24"
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current translate-x-0.5 ${textColorClass} ${
                  isPlayingAudio ? 'animate-pulse' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="6,4 20,12 6,20" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. HORIZONTAL METADATA STRIP (6 COLUMNS)
          ───────────────────────────────────────────────────────────── */}
      <div className={`relative z-10 w-full py-3 sm:py-4 border-t border-b ${dividerBorderClass} grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 text-[10px] sm:text-xs font-semibold tracking-[0.14em] ${textColorClass}`}>
        <div className="text-left font-mono tabular-nums">$1799</div>
        <div className="text-left sm:text-left">NOW AVAILABLE</div>
        <div className="text-left sm:text-center">DESIGNED</div>
        <div className="text-left sm:text-center">OF A KIND</div>
        <div className="text-left sm:text-right">{modelMode === 'aether-01' ? 'OPTICAL' : 'AUDIO'}</div>
        <div className="text-left sm:text-right">DEVICE</div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. LOWER SECTION: DESCRIPTION & TECHNICAL SPECIFICATIONS
          ───────────────────────────────────────────────────────────── */}
      <footer className="relative z-10 pt-3 sm:pt-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        {/* Lower Left: Description Copy Block */}
        <div className="md:col-span-7 lg:col-span-6">
          <p className={`font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-[1.65] tracking-[0.1em] max-w-[400px] ${subtextColorClass}`}>
            THE ULTRA-PORTABLE AUDIO RECORDER. RECORD AND LISTEN BACK USING THE INTERNAL MIC AND SPEAKER, OR USE ANY NUMBER OF THE 3X TWO-WAY JACKS FOR EXTERNAL MICS, HEADSETS OR OTHER SIGNAL SOURCES.
          </p>
        </div>

        {/* Lower Right: Technical Specifications Bullet List */}
        <div className="md:col-span-5 lg:col-span-6 flex flex-col md:items-end">
          <ul className={`font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-[1.7] tracking-[0.08em] space-y-0.5 text-left ${subtextColorClass}`}>
            <li className="flex items-center gap-2">
              <span className="opacity-50">·</span> 3 TRRS STEREO INPUT/OUTPUT
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-50">·</span> 1 MAIN/HEADPHONES OUTPUT
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-50">·</span> 24-BIT/96 KHZ USB AUDIO
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-50">·</span> INTERNAL MIC AND SPEAKER
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-50">·</span> 7 HR RECHARGEABLE BATTERY
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-50">·</span> 128 GB OF INTERNAL STORAGE
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-50">·</span> TP-7 TRANSCRIPTION APP
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
});

AetherHeroBanner.displayName = 'AetherHeroBanner';
