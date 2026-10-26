import React from 'react';

interface TeLogoProps {
  className?: string;
  size?: number;
}

/**
 * Teenage Engineering iconic symbol vector
 */
export const TeLogo: React.FC<TeLogoProps> = ({ className = 'w-5 h-5', size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circle top head */}
      <circle cx="12" cy="7" r="3.2" fill="currentColor" />
      {/* Bottom inverted legs / body arc */}
      <path
        d="M7 19.5C7.2 14.5 10 12.5 12 12.5C14 12.5 16.8 14.5 17 19.5H14.2C13.8 16.5 12.8 15 12 15C11.2 15 10.2 16.5 9.8 19.5H7Z"
        fill="currentColor"
      />
    </svg>
  );
};
