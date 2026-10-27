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
      const isMobilePortrait = window.innerWidth <= 768 && window.innerHeight > window.innerWidth;
      const displayWidth = isMobilePortrait ? Math.max(1, canvas.clientWidth || (window.innerWidth - 24)) : window.innerWidth;
      const displayHeight = isMobilePortrait ? Math.max(1, canvas.clientHeight || Math.round(window.innerHeight * 0.44 - 78)) : window.innerHeight;

      canvas.width = Math.round(displayWidth * dpr);
      canvas.height = Math.round(displayHeight * dpr);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      lastRenderedFrame = -1;
      renderFrame(Math.round(currentFrame));
    };

    const renderFrame = (index: number) => {
      if (index < 0 || index >= totalFrames) return;
      let img = images[index];

      // Resilient Fallback: If exact frame is still streaming in, render the nearest loaded frame
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let d = 1; d < totalFrames; d++) {
          if (index - d >= 0 && images[index - d] && images[index - d].complete && images[index - d].naturalWidth > 0) {
            img = images[index - d];
            break;
          }
          if (index + d < totalFrames && images[index + d] && images[index + d].complete && images[index + d].naturalWidth > 0) {
            img = images[index + d];
            break;
          }
        }
      }
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      const scale = Math.max(cw / sourceWidth, ch / sourceHeight);
      const drawWidth = Math.round(sourceWidth * scale);
      const drawHeight = Math.round(sourceHeight * scale);
      const drawX = Math.round((cw - drawWidth) / 2);
      const drawY = Math.round((ch - drawHeight) / 2);

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    const updateScroll = () => {
      const contactSection = document.getElementById('contact');
      const maxScroll = contactSection
        ? contactSection.offsetTop - window.innerHeight
        : document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const fraction = Math.max(0, Math.min(1, scrollY / maxScroll));
      targetFrame = fraction * (totalFrames - 1);
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

    let isCompleted = false;
    const finishLoading = () => {
      if (isCompleted) return;
      isCompleted = true;
      setLoadProgress(100);
      setIsLoaded(true);
      resizeCanvas();
      updateScroll();
      currentFrame = targetFrame;
      renderFrame(Math.round(currentFrame));
      animationFrameId = requestAnimationFrame(animationLoop);
    };

    setTimeout(finishLoading, 2000);

    const criticalBuffer = Math.min(18, totalFrames);
    let tier1Loaded = 0;

    const loadFrame = (i: number, priority: 'high' | 'low' | 'auto' = 'auto') => {
      if (images[i]) return images[i];

      const actualIndex = startFrame + i;
      const pad6 = String(actualIndex).padStart(6, '0');
      const pad4 = String(actualIndex).padStart(4, '0');
      const img = new Image();
      if ('fetchPriority' in img) (img as any).fetchPriority = priority;

      img.onload = () => {
        loadedCount++;
        if (i < criticalBuffer) {
          tier1Loaded++;
          const progress = Math.min(100, Math.round((tier1Loaded / criticalBuffer) * 100));
          setLoadProgress(progress);
        }

        if (loadedCount === 1) {
          renderFrame(0);
        }

        if (tier1Loaded >= criticalBuffer) {
          finishLoading();
        }
      };

      img.onerror = () => {
        if (!(img as any)._retried) {
          (img as any)._retried = true;
          img.src = `./Assets/frames/frame_${pad4}.jpg`;
        } else {
          if (i < criticalBuffer) {
            tier1Loaded++;
            if (tier1Loaded >= criticalBuffer) finishLoading();
          }
        }
      };

      img.src = `./Assets/frames/frame_${pad6}.jpg`;
      images[i] = img;
      return img;
    };

    // 1. Immediately load Critical Hero Buffer
    for (let i = 0; i < criticalBuffer; i++) {
      loadFrame(i, i === 0 ? 'high' : 'auto');
    }

    // 2. Request Keyframe Skeleton across timeline (every 8th frame)
    setTimeout(() => {
      for (let i = criticalBuffer; i < totalFrames; i += 8) {
        loadFrame(i, 'low');
      }
    }, 120);

    // 3. Background stream remaining interstitial frames
    setTimeout(() => {
      let nextIndex = 0;
      const streamBatch = () => {
        let queued = 0;
        while (nextIndex < totalFrames && queued < 8) {
          if (!images[nextIndex]) {
            loadFrame(nextIndex, 'low');
            queued++;
          }
          nextIndex++;
        }
        if (nextIndex < totalFrames) {
          if ('requestIdleCallback' in window) {
            (window as any).requestIdleCallback(streamBatch, { timeout: 100 });
          } else {
            setTimeout(streamBatch, 35);
          }
        }
      };
      streamBatch();
    }, 500);

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

      {/* Viewport Canvas Stage: Sticky 44vh Framed Stage on Mobile, Full-Bleed Fixed on Desktop */}
      <div className="canvas-container sticky top-0 h-[44vh] w-screen z-30 bg-[#F6F5F0] p-[68px_12px_10px_12px] box-border shadow-[0_14px_20px_-4px_rgba(246,245,240,0.98)] md:fixed md:inset-0 md:h-screen md:w-screen md:z-0 md:bg-transparent md:p-0 md:shadow-none overflow-hidden pointer-events-none">
        <canvas
          ref={canvasRef}
          id="hero-canvas"
          className="w-full h-full block object-cover rounded-[18px] border border-black/10 shadow-[0_8px_24px_rgba(17,18,21,0.06)] scale-[1.06] md:w-screen md:h-screen md:rounded-none md:border-none md:shadow-none md:scale-100"
        />
      </div>
    </>
  );
};
