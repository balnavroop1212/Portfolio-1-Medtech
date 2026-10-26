import React, { useState } from 'react';
import { Download, Copy, Check, Volume2, VolumeX, Maximize2, Minimize2, Code, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { ModelMode, DisplayStyle } from './BlackHeroBanner';

interface ExportToolbarProps {
  onExportPng: (scale: number) => Promise<void>;
  onCopyHeroCode: () => void;
  isExporting: boolean;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  isFullBleed: boolean;
  onToggleFullBleed: () => void;
  modelMode: ModelMode;
  onSelectModel: (model: ModelMode) => void;
  displayStyle: DisplayStyle;
  onToggleDisplayStyle: () => void;
  showObjectGuide: boolean;
  onToggleObjectGuide: () => void;
}

export const ExportToolbar: React.FC<ExportToolbarProps> = ({
  onExportPng,
  onCopyHeroCode,
  isExporting,
  isPlayingAudio,
  onToggleAudio,
  isFullBleed,
  onToggleFullBleed,
  modelMode,
  onSelectModel,
  displayStyle,
  onToggleDisplayStyle,
  showObjectGuide,
  onToggleObjectGuide,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [scale, setScale] = useState<number>(2);

  const handleCopyCode = () => {
    onCopyHeroCode();
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <header className="w-full bg-[#0a0a0b]/95 backdrop-blur-md border-b border-neutral-800 px-4 sm:px-6 py-2.5 sticky top-0 z-50 flex items-center justify-between gap-3 flex-wrap">
      {/* Title */}
      <div className="flex items-center gap-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-white shadow-sm shadow-white/80 animate-pulse" />
        <h1 className="text-xs sm:text-sm font-semibold tracking-wide text-white flex items-center gap-2">
          Hero Layout Studio
          <span className="text-[10px] font-mono text-white font-normal px-2 py-0.5 rounded bg-black border border-white">
            Pure Black × White Borders
          </span>
        </h1>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap ml-auto">
        {/* Protected Center Zone Alignment Guide Toggle */}
        <button
          onClick={onToggleObjectGuide}
          className={`h-7 sm:h-8 px-2.5 sm:px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border ${
            showObjectGuide
              ? 'bg-white text-black border-white font-semibold'
              : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border-neutral-700'
          }`}
          title="Toggle central object clearance overlay guide"
        >
          {showObjectGuide ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5 text-neutral-400" />}
          <span>{showObjectGuide ? 'Object Guide: ON' : 'Verify Clearance'}</span>
        </button>

        {/* Display Style Toggle (Solid vs Wireframe Outline) */}
        <button
          onClick={onToggleDisplayStyle}
          className={`h-7 sm:h-8 px-2.5 sm:px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border ${
            displayStyle === 'wireframe'
              ? 'bg-white text-black border-white font-semibold'
              : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border-neutral-700'
          }`}
          title="Toggle between solid white fill and technical wireframe boundaries"
        >
          <span>{displayStyle === 'wireframe' ? 'Wireframe Boundaries' : 'Solid Text'}</span>
        </button>

        {/* Model Selector (TP-7 vs AETHER-01) */}
        <div className="flex items-center bg-black border border-white rounded-lg p-0.5 text-xs">
          <button
            onClick={() => onSelectModel('tp-7')}
            className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors ${
              modelMode === 'tp-7'
                ? 'bg-white text-black font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            TP-7
          </button>
          <button
            onClick={() => onSelectModel('aether-01')}
            className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors ${
              modelMode === 'aether-01'
                ? 'bg-white text-black font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            AETHER-01
          </button>
        </div>

        {/* Audio Haptics */}
        <button
          onClick={onToggleAudio}
          className={`h-7 sm:h-8 px-2.5 sm:px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border ${
            isPlayingAudio
              ? 'bg-white text-black border-white font-semibold shadow-sm'
              : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border-neutral-700'
          }`}
          title="Toggle audio simulation"
        >
          {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 text-neutral-400" />}
          <span className="hidden sm:inline">{isPlayingAudio ? 'Sound ON' : 'Audio'}</span>
        </button>

        {/* Full Bleed vs Framed */}
        <button
          onClick={onToggleFullBleed}
          className="h-7 sm:h-8 px-2.5 sm:px-3 rounded-lg text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 flex items-center gap-1.5 transition-colors"
          title={isFullBleed ? 'Switch to Framed Mockup' : 'Switch to Full-Bleed 100vh'}
        >
          {isFullBleed ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          <span>{isFullBleed ? 'Framed Card' : 'Full Bleed 100vh'}</span>
        </button>

        {/* Copy Ready-to-paste TSX Code */}
        <button
          onClick={handleCopyCode}
          className="h-7 sm:h-8 px-3 rounded-lg text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-600 flex items-center gap-1.5 transition-colors"
          title="Copy ready-to-paste hero section TSX code"
        >
          {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Code className="w-3.5 h-3.5" />}
          <span>{copiedCode ? 'Copied Code!' : 'Copy Hero Code'}</span>
        </button>

        {/* Download High-Res PNG */}
        <button
          onClick={() => onExportPng(scale)}
          disabled={isExporting}
          className="h-7 sm:h-8 px-3.5 rounded-lg text-xs font-semibold bg-white text-black hover:bg-neutral-200 flex items-center gap-1.5 transition-colors shadow-sm disabled:opacity-50"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{isExporting ? 'Exporting...' : 'Export PNG'}</span>
        </button>
      </div>
    </header>
  );
};
