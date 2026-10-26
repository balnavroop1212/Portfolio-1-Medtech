import React, { useEffect, useRef, useState } from 'react';

interface ScrollCanvasProps {
  startFrame?: number;
  endFrame?: number;
}

export const ScrollCanvas: React.FC<ScrollCanvasProps> = ({
  startFrame = 20,
  endFrame = 567,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const totalFrames = endFrame - startFrame + 1;
    const sourceWidth = 1920;
    const sourceHeight = 1080;
    const images: HTMLImageElement[] = new Array(totalFrames);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;

    let loadedCount = 0;
    let targetFrame = 0;
    let currentFrame = 0;
    let lastRenderedFrame = -1;
    let animationFrameId: number;

    const resizeCanvas = () => {
      const dpr = Math.max(window.devicePixelRatio || 1, 1);
      const displayWidth = window.innerWidth;
      const isMobilePortrait = window.innerWidth <= 768 && window.innerHeight > window.innerWidth;
      const displayHeight = isMobilePortrait ? Math.round(window.innerHeight * 0.52) : window.innerHeight;

      canvas.width = Math.round(displayWidth * dpr);
      canvas.height = Math.round(displayHeight * dpr);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      lastRenderedFrame = -1;
      renderFrame(Math.round(currentFrame));
    };

    const renderFrame = (index: number) => {
      if (index < 0 || index >= totalFrames) return;
      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Detect mobile portrait viewport (phones & portrait tablets)
      const isMobilePortrait = window.innerWidth <= 768 && window.innerHeight > window.innerWidth;

      if (isMobilePortrait) {
        // 1. Fill solid studio cream background to seamlessly blend canvas margins
        ctx.fillStyle = '#f6f5f0';
        ctx.fillRect(0, 0, cw, ch);

        // 2. Scale 16:9 width so 100% of the camera hardware and exploded lenses are visible
        const scale = (cw / sourceWidth) * 1.15;
        const drawWidth = Math.round(sourceWidth * scale);
        const drawHeight = Math.round(sourceHeight * scale);
        const drawX = Math.round((cw - drawWidth) / 2);

        // 3. Position vertically centered in Zone 2 (52vh dedicated hardware stage)
        const drawY = Math.round((ch - drawHeight) / 2);

        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      } else {
        // Desktop & Laptop: 100% UNTOUCHED
        const scale = Math.max(cw / sourceWidth, ch / sourceHeight);
        const drawWidth = Math.round(sourceWidth * scale);
        const drawHeight = Math.round(sourceHeight * scale);
        const drawX = Math.round((cw - drawWidth) / 2);
        const drawY = Math.round((ch - drawHeight) / 2);

        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      }
    };

    const updateScroll = () => {
      const contactSection = document.getElementById('contact');
      const maxScroll = contactSection
        ? contactSection.offsetTop - window.innerHeight
        : document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const isMobile = window.innerWidth <= 768;

      // Flaw 3 Fix: Mobile Scroll Deadband (140px)
      const scrollDeadband = isMobile ? 140 : 0;
      if (scrollY <= scrollDeadband) {
        targetFrame = 0;
      } else {
        const effectiveScroll = scrollY - scrollDeadband;
        const effectiveMax = Math.max(1, maxScroll - scrollDeadband);
        const fraction = Math.max(0, Math.min(1, effectiveScroll / effectiveMax));
        targetFrame = fraction * (totalFrames - 1);
      }
    };

    const animationLoop = () => {
      const diff = targetFrame - currentFrame;
      if (Math.abs(diff) < 0.05) {
        currentFrame = targetFrame;
      } else {
        currentFrame += diff * 0.25;
      }

      const frameToDraw = Math.round(currentFrame);
      if (frameToDraw !== lastRenderedFrame) {
        renderFrame(frameToDraw);
        lastRenderedFrame = frameToDraw;
      }

      animationFrameId = requestAnimationFrame(animationLoop);
    };

    // Preload all frames into browser cache
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', updateScroll, { passive: true });

    for (let i = 0; i < totalFrames; i++) {
      const actualIndex = startFrame + i;
      const paddedIndex = String(actualIndex).padStart(6, '0');
      const img = new Image();

      const onFrameLoad = () => {
        loadedCount++;
        const progress = Math.round((loadedCount / totalFrames) * 100);
        setLoadProgress(progress);

        if (loadedCount === 1) {
          renderFrame(0);
        }

        if (loadedCount === totalFrames) {
          setIsLoaded(true);
          resizeCanvas();
          updateScroll();
          currentFrame = targetFrame;
          renderFrame(Math.round(currentFrame));
          animationFrameId = requestAnimationFrame(animationLoop);
        }
      };

      img.onload = onFrameLoad;
      img.onerror = onFrameLoad;
      img.src = `/Assets/frames/frame_${paddedIndex}.jpg`;
      images[i] = img;
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [startFrame, endFrame]);

  return (
    <>
      {/* Minimal Preloader Bar */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 bg-[#090a0d] flex flex-col items-center justify-center gap-5 transition-opacity duration-500">
          <div className="flex items-center gap-2.5 text-lg font-bold tracking-[0.26em] text-white font-sans">
            <span>AETHER</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#f2a044] shadow-[0_0_12px_#f2a044] animate-pulse" />
          </div>
          <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white to-[#f2a044] rounded-full transition-all duration-75"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/60 uppercase">
            CALIBRATING OPTICS · {loadProgress}%
          </span>
        </div>
      )}

      {/* Full Bleed Canvas Viewport */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
        <canvas ref={canvasRef} className="w-screen h-screen block" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(10,10,14,0.15)_0%,rgba(10,10,14,0.45)_75%,rgba(10,10,14,0.72)_100%)]" />
      </div>
    </>
  );
};
