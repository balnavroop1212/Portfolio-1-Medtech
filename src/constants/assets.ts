/**
 * AETHER Brand & Asset Constants
 * Easily update video paths, device stills, and provisional specifications here.
 */

// Primary 16:9 cinematic animation video path.
// Set this to your local video asset (e.g. '/assets/aether-animation.mp4')
export const AETHER_HERO_VIDEO_PATH = '/assets/aether-animation.mp4';

// Actual AETHER-01 device photographic still in warm minimalist studio
export const AETHER_DEVICE_STILL = '/assets/aistudio/Aether-01_Camera_in_Warm_Minimalist_Studio_15f58235.png';

// Brand contact email (configurable)
export const AETHER_CONTACT_EMAIL = 'inquiries@aether-optical.com';

// Section anchor identifiers for smooth scrolling
export const NAV_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Technology', href: '#technology' },
  { label: 'Applications', href: '#applications' },
  { label: 'About', href: '#vision' },
] as const;
