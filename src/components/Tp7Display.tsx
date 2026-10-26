import React from 'react';

interface Tp7DisplayProps {
  className?: string;
}

/**
 * Pixel-accurate modular SVG recreation of the iconic Teenage Engineering "TP-7" display typography.
 * Rendered in crisp pure white with the stepped digital/modular architecture from the reference banner.
 */
export const Tp7Display: React.FC<Tp7DisplayProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-between w-full select-none ${className}`}>
      {/* Left "TP" Letterforms */}
      <div className="flex items-start">
        <svg
          viewBox="0 0 320 250"
          className="h-32 sm:h-44 md:h-52 lg:h-64 w-auto text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Letter "T" */}
          <g id="letter-T">
            {/* Top horizontal crossbar */}
            <rect x="0" y="0" width="144" height="38" />
            {/* Central vertical stem */}
            <rect x="53" y="38" width="38" height="206" />
          </g>

          {/* Letter "P" */}
          <g id="letter-P" transform="translate(162, 0)">
            {/* Left full-height vertical stem */}
            <rect x="0" y="0" width="38" height="244" />
            {/* Top horizontal bar */}
            <rect x="38" y="0" width="102" height="38" />
            {/* Right upper vertical bar */}
            <rect x="102" y="38" width="38" height="66" />
            {/* Lower horizontal bar */}
            <rect x="38" y="104" width="76" height="38" />
            {/* Modular stepped pixel details on P-corner matching TE field aesthetic */}
            <rect x="114" y="104" width="26" height="20" />
            <rect x="124" y="124" width="16" height="18" />
          </g>
        </svg>
      </div>

      {/* Right "7" Numeral */}
      <div className="flex items-start">
        <svg
          viewBox="0 0 200 250"
          className="h-32 sm:h-44 md:h-52 lg:h-64 w-auto text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stepped Pixelated Numeral 7 */}
          <g id="numeral-7">
            {/* Top horizontal head */}
            <rect x="0" y="0" width="180" height="38" />
            
            {/* Stepped pixel staircase diagonal */}
            {/* Step 1 */}
            <rect x="142" y="38" width="38" height="35" />
            <rect x="120" y="38" width="22" height="20" />

            {/* Step 2 */}
            <rect x="115" y="73" width="40" height="35" />
            <rect x="95" y="73" width="20" height="20" />

            {/* Step 3 */}
            <rect x="88" y="108" width="40" height="35" />
            <rect x="68" y="108" width="20" height="20" />

            {/* Step 4 */}
            <rect x="62" y="143" width="40" height="35" />
            <rect x="42" y="143" width="20" height="20" />

            {/* Step 5 */}
            <rect x="35" y="178" width="40" height="35" />
            <rect x="18" y="178" width="17" height="20" />

            {/* Step 6 (Bottom base) */}
            <rect x="10" y="213" width="40" height="31" />
          </g>
        </svg>
      </div>
    </div>
  );
};
