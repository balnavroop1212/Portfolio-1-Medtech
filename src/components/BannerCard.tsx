import React, { forwardRef } from 'react';
import { TeLogo } from './TeLogo';
import { audioEngine } from './AudioEngine';

export interface BannerCardProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  showOuterBorder?: boolean;
}

/**
 * 1:1 Replica Banner Component of Teenage Engineering TP-7 Field Recorder.
 * Pure black background (#000000), pure white elements (#ffffff), DM Sans typography,
 * with exact layout and verbatim specifications copy.
 */
export const BannerCard = forwardRef<HTMLDivElement, BannerCardProps>(({
  activeTab,
  onTabChange,
  isPlayingAudio,
  onToggleAudio,
  showOuterBorder = true,
}, ref) => {
  const navItems = ['INFO', 'NEWS', 'FEATURES', 'BUY'];

  return (
    <div
      ref={ref}
      id="tp7-banner-canvas"
      className={`relative w-full max-w-[1240px] aspect-[16/10.5] sm:aspect-[16/10] bg-black text-white rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden p-6 sm:p-10 md:p-12 flex flex-col justify-between select-none ${
        showOuterBorder ? 'border border-white/20 shadow-2xl shadow-black/80' : ''
      }`}
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. TOP NAVIGATION BAR (FLOATING SEGMENTED CAPSULES)
          ───────────────────────────────────────────────────────────── */}
      <div className="w-full flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
        {/* Left Segment: Logo + Nav Items */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Teenage Engineering Logo Pill */}
          <button
            onClick={() => audioEngine.playClick()}
            className="h-8 sm:h-9 px-3 bg-black border border-white/30 hover:border-white rounded-full flex items-center justify-center transition-colors focus:outline-none"
            title="Teenage Engineering"
            aria-label="Teenage Engineering Logo"
          >
            <TeLogo className="w-4 h-4 text-white" />
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
                className={`h-8 sm:h-9 px-3.5 sm:px-5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.12em] transition-all duration-150 focus:outline-none ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'bg-black text-white/80 hover:text-white border border-white/20 hover:border-white/40'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Right Segment: Discover Products + Subscribe + Symbol */}
        <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
          {/* Dashed Discover Pill */}
          <button
            onClick={() => audioEngine.playClick()}
            className="h-8 sm:h-9 px-3.5 sm:px-5 rounded-full border border-dashed border-white/50 hover:border-white text-[10px] sm:text-xs font-normal tracking-[0.12em] text-white/90 hover:text-white transition-colors focus:outline-none hidden sm:flex items-center"
          >
            DISCOVER ALL OUR PRODUCTS
          </button>

          {/* Subscribe Pill */}
          <button
            onClick={() => audioEngine.playClick()}
            className="h-8 sm:h-9 px-4 sm:px-6 rounded-full bg-neutral-950 border border-white/30 hover:border-white text-[10px] sm:text-xs font-semibold tracking-[0.14em] text-white transition-colors focus:outline-none"
          >
            SUBSCRIBE
          </button>

          {/* Grid / Hash symbol */}
          <button
            onClick={() => audioEngine.playClick()}
            className="h-8 sm:h-9 w-8 sm:w-9 rounded-full bg-black border border-white/20 hover:border-white/50 flex items-center justify-center text-xs font-mono text-white/90 hover:text-white transition-colors focus:outline-none"
            aria-label="Menu"
          >
            #
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO TYPOGRAPHY & EDITORIAL OVERVIEW
          ───────────────────────────────────────────────────────────── */}
      <div className="relative my-auto py-4 sm:py-6 grid grid-cols-12 items-center gap-4">
        {/* Left: Giant "TP" Block Letters */}
        <div className="col-span-12 md:col-span-7 lg:col-span-6 flex items-center">
          <svg
            viewBox="0 0 330 240"
            className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] h-auto text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Letter 'T' */}
            <g id="letter-T">
              {/* Top crossbar */}
              <rect x="0" y="0" width="144" height="38" />
              {/* Vertical stem */}
              <rect x="53" y="38" width="38" height="202" />
            </g>

            {/* Letter 'P' */}
            <g id="letter-P" transform="translate(162, 0)">
              {/* Left full vertical stem */}
              <rect x="0" y="0" width="38" height="240" />
              {/* Top horizontal */}
              <rect x="38" y="0" width="102" height="38" />
              {/* Right vertical bar */}
              <rect x="102" y="38" width="38" height="66" />
              {/* Lower horizontal bar */}
              <rect x="38" y="104" width="76" height="38" />
              {/* Stepped pixel block corner detail */}
              <rect x="114" y="104" width="26" height="20" />
              <rect x="124" y="124" width="16" height="18" />
            </g>
          </svg>

          {/* Stepped "7" Numeral (Centered-Right composition) */}
          <div className="ml-4 sm:ml-8 md:ml-12">
            <svg
              viewBox="0 0 190 240"
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stepped pixel staircase 7 */}
              <g id="numeral-7">
                {/* Top horizontal head */}
                <rect x="0" y="0" width="176" height="38" />
                {/* Step 1 */}
                <rect x="138" y="38" width="38" height="34" />
                <rect x="118" y="38" width="20" height="20" />
                {/* Step 2 */}
                <rect x="112" y="72" width="40" height="34" />
                <rect x="92" y="72" width="20" height="20" />
                {/* Step 3 */}
                <rect x="86" y="106" width="40" height="34" />
                <rect x="66" y="106" width="20" height="20" />
                {/* Step 4 */}
                <rect x="60" y="140" width="40" height="34" />
                <rect x="40" y="140" width="20" height="20" />
                {/* Step 5 */}
                <rect x="34" y="174" width="40" height="34" />
                <rect x="18" y="174" width="16" height="20" />
                {/* Step 6 base */}
                <rect x="8" y="208" width="42" height="32" />
              </g>
            </svg>
          </div>
        </div>

        {/* Right: Connectivity Specifications + Audio Play affordance */}
        <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-between items-start md:items-end text-left md:text-right pl-0 md:pl-6 space-y-4 sm:space-y-6">
          {/* Verbatim Connectivity Text Block */}
          <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-[1.6] tracking-[0.1em] text-white/90 max-w-[280px] sm:max-w-[320px]">
            MULTIPLE CONNECTIVITY OPTIONS INCLUDE USB-C, MFI AND BLUETOOTH. INSTANT VOICE-TO-TEXT TRANSCRIPTION AVAILABLE VIA THE IOS APP. INCLUDED IN THE BOX: 6.35 MM JACK ADAPTER, TEXTILE USB-C CABLE
          </p>

          {/* Interactive Dashed Circular Audio Trigger (▷) */}
          <div className="pt-2 flex items-center gap-3">
            {isPlayingAudio && (
              <span className="font-mono text-[10px] tracking-widest text-white/70 animate-pulse">
                TAPE MOTOR RUNNING
              </span>
            )}
            <button
              onClick={onToggleAudio}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-dashed flex items-center justify-center transition-all duration-200 focus:outline-none ${
                isPlayingAudio
                  ? 'border-white bg-white/10 scale-105'
                  : 'border-white/50 hover:border-white hover:bg-white/5'
              }`}
              title={isPlayingAudio ? 'Stop audio motor' : 'Listen to TP-7 tape motor simulation'}
              aria-label="Play audio"
            >
              <svg
                viewBox="0 0 24 24"
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-current translate-x-0.5 ${
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
      <div className="w-full py-3 sm:py-4 border-t border-b border-white/20 grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 text-[10px] sm:text-xs font-semibold tracking-[0.14em]">
        <div className="text-left font-mono tabular-nums">$1799</div>
        <div className="text-left sm:text-left">NOW AVAILABLE</div>
        <div className="text-left sm:text-center">DESIGNED</div>
        <div className="text-left sm:text-center">OF A KIND</div>
        <div className="text-left sm:text-right">AUDIO</div>
        <div className="text-left sm:text-right">DEVICE</div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. LOWER SECTION: PRODUCT ESSENCE & TECHNICAL SPECS
          ───────────────────────────────────────────────────────────── */}
      <div className="pt-4 sm:pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        {/* Lower Left: Description Copy Block */}
        <div className="md:col-span-7 lg:col-span-6">
          <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-[1.65] tracking-[0.1em] text-white/90 max-w-[380px]">
            THE ULTRA-PORTABLE AUDIO RECORDER. RECORD AND LISTEN BACK USING THE INTERNAL MIC AND SPEAKER, OR USE ANY NUMBER OF THE 3X TWO-WAY JACKS FOR EXTERNAL MICS, HEADSETS OR OTHER SIGNAL SOURCES.
          </p>
        </div>

        {/* Lower Right: Technical Specifications Bullet List */}
        <div className="md:col-span-5 lg:col-span-6 flex flex-col md:items-end">
          <ul className="font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-[1.7] tracking-[0.08em] text-white/90 space-y-0.5 text-left">
            <li className="flex items-center gap-2">
              <span className="text-white/60">·</span> 3 TRRS STEREO INPUT/OUTPUT
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white/60">·</span> 1 MAIN/HEADPHONES OUTPUT
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white/60">·</span> 24-BIT/96 KHZ USB AUDIO
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white/60">·</span> INTERNAL MIC AND SPEAKER
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white/60">·</span> 7 HR RECHARGEABLE BATTERY
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white/60">·</span> 128 GB OF INTERNAL STORAGE
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white/60">·</span> TP-7 TRANSCRIPTION APP
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

BannerCard.displayName = 'BannerCard';
