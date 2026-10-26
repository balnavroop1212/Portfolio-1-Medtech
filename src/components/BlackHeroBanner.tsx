import React, { forwardRef } from 'react';
import { TeLogo } from './TeLogo';
import { audioEngine } from './AudioEngine';

export type ModelMode = 'tp-7' | 'aether-01';
export type DisplayStyle = 'solid' | 'wireframe';

export interface BlackHeroBannerProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  modelMode?: ModelMode;
  displayStyle?: DisplayStyle;
  showObjectGuide?: boolean;
  isFullBleed?: boolean;
}

/**
 * Pure Black Hero Banner with Guaranteed Zero-Text Center Object Clearance.
 * - Background: Solid pitch black (#000000)
 * - Text: Pure white (#ffffff)
 * - Boundaries/Borders: Pure white (#ffffff)
 * - Center Zone: 100% clear of all text and UI elements to let the physical camera/object breathe.
 */
export const BlackHeroBanner = forwardRef<HTMLDivElement, BlackHeroBannerProps>(({
  activeTab,
  onTabChange,
  isPlayingAudio,
  onToggleAudio,
  modelMode = 'tp-7',
  displayStyle = 'solid',
  showObjectGuide = false,
  isFullBleed = true,
}, ref) => {
  const navItems = ['INFO', 'NEWS', 'FEATURES', 'BUY'];

  const isWireframe = displayStyle === 'wireframe';

  return (
    <div
      ref={ref}
      id="pure-black-hero-section"
      className={`relative w-full ${
        isFullBleed
          ? 'h-screen min-h-[700px]'
          : 'max-w-[1400px] aspect-[16/10] sm:aspect-[16/9.5] rounded-[32px] sm:rounded-[44px]'
      } bg-black text-white overflow-hidden p-6 sm:p-10 md:p-12 flex flex-col justify-between select-none ${
        !isFullBleed ? 'border-2 border-white shadow-2xl shadow-black' : ''
      }`}
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          OPTIONAL: OBJECT SAFE-ZONE GUIDE (DEMONSTRATES ZERO OVERLAP)
          ───────────────────────────────────────────────────────────── */}
      {showObjectGuide && (
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          {/* Ghosted preview of the camera background to visually confirm clearance */}
          <img
            src="/assets/aistudio/Aether-01_Camera_in_Warm_Minimalist_Studio_15f58235.png"
            alt="Camera Alignment Guide"
            className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125"
          />
          {/* Clean dashed bounding box of the protected central object zone */}
          <div className="absolute inset-y-[20%] inset-x-[26%] sm:inset-x-[30%] md:inset-x-[32%] border border-dashed border-white/40 rounded-3xl flex items-center justify-center">
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/50 bg-black/80 px-3 py-1 rounded border border-white/20">
              Clear Center Zone · No Text
            </span>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          1. TOP NAVIGATION BAR (FLOATING SEGMENTED WHITE PILLS)
          ───────────────────────────────────────────────────────────── */}
      <header className="relative z-10 w-full flex items-center justify-between gap-2 sm:gap-3 flex-wrap border-b border-white/20 pb-4 sm:pb-5">
        {/* Left Segment: Brand Logo + Nav Items */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Logo Pill with White Boundary */}
          <button
            onClick={() => audioEngine.playClick()}
            className="h-8 sm:h-9 px-3 bg-black border-2 border-white hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all focus:outline-none text-white"
            title="Brand Emblem"
            aria-label="Logo"
          >
            <TeLogo className="w-4 h-4" />
          </button>

          {/* Navigation Items with Pure White Boundaries */}
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => {
                  audioEngine.playClick();
                  onTabChange(item);
                }}
                className={`h-8 sm:h-9 px-3.5 sm:px-5 rounded-full text-[10px] sm:text-xs tracking-[0.12em] font-medium transition-all duration-150 focus:outline-none border-2 border-white ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'bg-black text-white hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Right Segment: Discover Products + Subscribe + Hash */}
        <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
          {/* Discover Pill with Dashed White Boundary */}
          <button
            onClick={() => audioEngine.playClick()}
            className="h-8 sm:h-9 px-3.5 sm:px-5 rounded-full border-2 border-dashed border-white text-[10px] sm:text-xs font-medium tracking-[0.12em] text-white hover:bg-white/10 transition-colors focus:outline-none hidden sm:flex items-center"
          >
            DISCOVER ALL OUR PRODUCTS
          </button>

          {/* Subscribe Pill with Solid White Boundary */}
          <button
            onClick={() => audioEngine.playClick()}
            className="h-8 sm:h-9 px-4 sm:px-6 rounded-full bg-black border-2 border-white text-white hover:bg-white hover:text-black text-[10px] sm:text-xs font-bold tracking-[0.14em] transition-all focus:outline-none"
          >
            SUBSCRIBE
          </button>

          {/* Menu / Hash with White Boundary */}
          <button
            onClick={() => audioEngine.playClick()}
            className="h-8 sm:h-9 w-8 sm:w-9 rounded-full bg-black border-2 border-white hover:bg-white hover:text-black flex items-center justify-center text-xs font-mono font-bold text-white transition-colors focus:outline-none"
            aria-label="Menu"
          >
            #
          </button>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION: 3-ZONE LAYOUT
             • LEFT ZONE (Max 28%): Display Letterforms (TP / AE)
             • CENTER ZONE (44%): 100% EMPTY & RESERVED FOR OBJECT
             • RIGHT ZONE (Max 28%): Stepped Numeral + Specs + Play Button
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 my-auto py-2 sm:py-6 grid grid-cols-12 items-center gap-2 sm:gap-4">
        {/* LEFT ZONE: Confined to 3.5 columns so it never touches the center */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col justify-center items-start">
          {modelMode === 'tp-7' ? (
            /* Modular "TP" with Crisp White Fill / Boundaries */
            <svg
              viewBox="0 0 330 240"
              className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="letter-T"
                fill={isWireframe ? 'none' : '#ffffff'}
                stroke="#ffffff"
                strokeWidth={isWireframe ? '3' : '1'}
              >
                <rect x="0" y="0" width="144" height="38" />
                <rect x="53" y="38" width="38" height="202" />
              </g>
              <g
                id="letter-P"
                transform="translate(162, 0)"
                fill={isWireframe ? 'none' : '#ffffff'}
                stroke="#ffffff"
                strokeWidth={isWireframe ? '3' : '1'}
              >
                <rect x="0" y="0" width="38" height="240" />
                <rect x="38" y="0" width="102" height="38" />
                <rect x="102" y="38" width="38" height="66" />
                <rect x="38" y="104" width="76" height="38" />
                <rect x="114" y="104" width="26" height="20" />
                <rect x="124" y="124" width="16" height="18" />
              </g>
            </svg>
          ) : (
            /* Modular "AE" with Crisp White Fill / Boundaries */
            <svg
              viewBox="0 0 320 220"
              className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="letter-A"
                fill={isWireframe ? 'none' : '#ffffff'}
                stroke="#ffffff"
                strokeWidth={isWireframe ? '3' : '1'}
              >
                <rect x="0" y="36" width="36" height="184" />
                <rect x="36" y="0" width="76" height="36" />
                <rect x="112" y="36" width="36" height="184" />
                <rect x="36" y="96" width="76" height="34" />
              </g>
              <g
                id="letter-E"
                transform="translate(164, 0)"
                fill={isWireframe ? 'none' : '#ffffff'}
                stroke="#ffffff"
                strokeWidth={isWireframe ? '3' : '1'}
              >
                <rect x="0" y="0" width="36" height="220" />
                <rect x="36" y="0" width="100" height="36" />
                <rect x="36" y="92" width="78" height="34" />
                <rect x="36" y="184" width="100" height="36" />
                <rect x="116" y="92" width="20" height="18" />
                <rect x="116" y="184" width="20" height="18" />
              </g>
            </svg>
          )}

          {/* Model Tag with Pure White Border */}
          <div className="mt-3 px-2 py-0.5 border border-white text-[10px] font-mono tracking-widest text-white uppercase">
            {modelMode === 'tp-7' ? 'TP-7 FIELD RECORDER' : 'AETHER-01 OPTICAL'}
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────
            CENTER OBJECT ZONE: 5 COLUMNS WIDE (100% EMPTY NEGATIVE SPACE)
            The user's scroll-animated 3D/video/camera object lives here!
            ────────────────────────────────────────────────────────── */}
        <div className="col-span-12 md:col-span-4 lg:col-span-6 h-32 md:h-64 flex items-center justify-center pointer-events-none" aria-hidden="true">
          {/* Kept totally empty of any text or interactive elements */}
        </div>

        {/* RIGHT ZONE: Confined to 3.5 columns on the far right edge */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col justify-between items-start md:items-end text-left md:text-right space-y-4">
          {/* Stepped Numeral (7 or 01) */}
          <div className="flex justify-start md:justify-end">
            {modelMode === 'tp-7' ? (
              <svg
                viewBox="0 0 190 200"
                className="w-20 sm:w-24 md:w-32 h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="numeral-7"
                  fill={isWireframe ? 'none' : '#ffffff'}
                  stroke="#ffffff"
                  strokeWidth={isWireframe ? '3' : '1'}
                >
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
            ) : (
              <svg
                viewBox="0 0 220 120"
                className="w-24 sm:w-32 md:w-40 h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="numeral-0"
                  fill={isWireframe ? 'none' : '#ffffff'}
                  stroke="#ffffff"
                  strokeWidth={isWireframe ? '3' : '1'}
                >
                  <rect x="0" y="0" width="80" height="22" />
                  <rect x="0" y="22" width="24" height="76" />
                  <rect x="56" y="22" width="24" height="76" />
                  <rect x="0" y="98" width="80" height="22" />
                </g>
                <g
                  id="numeral-1"
                  transform="translate(104, 0)"
                  fill={isWireframe ? 'none' : '#ffffff'}
                  stroke="#ffffff"
                  strokeWidth={isWireframe ? '3' : '1'}
                >
                  <rect x="24" y="0" width="24" height="98" />
                  <rect x="6" y="14" width="18" height="16" />
                  <rect x="0" y="98" width="72" height="22" />
                </g>
              </svg>
            )}
          </div>

          {/* Connectivity Text with Crisp White Boundary Card */}
          <div className="p-3 border border-white/60 bg-black max-w-[280px]">
            <p className="font-mono text-[9px] sm:text-[10px] leading-[1.6] tracking-[0.08em] text-white">
              MULTIPLE CONNECTIVITY OPTIONS INCLUDE USB-C, MFI AND BLUETOOTH. INSTANT VOICE-TO-TEXT TRANSCRIPTION AVAILABLE VIA THE IOS APP. INCLUDED IN THE BOX: 6.35 MM JACK ADAPTER, TEXTILE USB-C CABLE
            </p>
          </div>

          {/* Interactive Play Button with Crisp White Dashed Boundary */}
          <div className="flex items-center gap-2">
            {isPlayingAudio && (
              <span className="font-mono text-[10px] tracking-widest text-white border border-white px-2 py-0.5 animate-pulse">
                MOTOR RUNNING
              </span>
            )}
            <button
              onClick={onToggleAudio}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center transition-all focus:outline-none ${
                isPlayingAudio ? 'bg-white text-black scale-105' : 'hover:bg-white hover:text-black text-white'
              }`}
              title="Trigger tape / shutter motor haptic audio"
              aria-label="Play sound"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-current translate-x-0.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="6,4 20,12 6,20" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. HORIZONTAL METADATA STRIP (PURE WHITE BORDERS & TEXT)
          Placed below the central object so it never touches the object
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full py-3 sm:py-4 border-t-2 border-b-2 border-white grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 text-[10px] sm:text-xs font-bold tracking-[0.15em] text-white">
        <div className="text-left font-mono tabular-nums">$1799</div>
        <div className="text-left sm:text-left">NOW AVAILABLE</div>
        <div className="text-left sm:text-center">DESIGNED</div>
        <div className="text-left sm:text-center">OF A KIND</div>
        <div className="text-left sm:text-right">AUDIO</div>
        <div className="text-left sm:text-right">DEVICE</div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. LOWER SECTION: TWO CORNER BLOCKS (CENTER REMAINS FREE)
          ───────────────────────────────────────────────────────────── */}
      <footer className="relative z-10 pt-4 sm:pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        {/* Lower Left Description Box with White Border */}
        <div className="md:col-span-5 lg:col-span-4 p-3 border border-white/60 bg-black">
          <p className="font-mono text-[9px] sm:text-[10px] leading-[1.65] tracking-[0.08em] text-white">
            THE ULTRA-PORTABLE AUDIO RECORDER. RECORD AND LISTEN BACK USING THE INTERNAL MIC AND SPEAKER, OR USE ANY NUMBER OF THE 3X TWO-WAY JACKS FOR EXTERNAL MICS, HEADSETS OR OTHER SIGNAL SOURCES.
          </p>
        </div>

        {/* Center Space: Empty for Object Base / Stand */}
        <div className="hidden md:block md:col-span-2 lg:col-span-4" aria-hidden="true" />

        {/* Lower Right Specifications with White Bullet Separators and White Border Box */}
        <div className="md:col-span-5 lg:col-span-4 p-3 border border-white/60 bg-black flex flex-col md:items-end">
          <ul className="font-mono text-[9px] sm:text-[10px] leading-[1.7] tracking-[0.08em] text-white space-y-0.5 text-left w-full">
            <li className="flex items-center gap-2">
              <span className="font-bold">▪</span> 3 TRRS STEREO INPUT/OUTPUT
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold">▪</span> 1 MAIN/HEADPHONES OUTPUT
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold">▪</span> 24-BIT/96 KHZ USB AUDIO
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold">▪</span> INTERNAL MIC AND SPEAKER
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold">▪</span> 7 HR RECHARGEABLE BATTERY
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold">▪</span> 128 GB OF INTERNAL STORAGE
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold">▪</span> TP-7 TRANSCRIPTION APP
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
});

BlackHeroBanner.displayName = 'BlackHeroBanner';
