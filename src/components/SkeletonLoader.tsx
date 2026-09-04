import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const SkeletonLoader: React.FC<{ onLoaded?: () => void }> = () => {
  const [progress, setProgress] = useState(15);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 12;
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.99, filter: 'blur(6px)' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#070709] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
    >

      {/* Ambient gold radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12)_0%,rgba(180,83,9,0.04)_40%,transparent_70%)] pointer-events-none" />

      {/* Cyber subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg w-full px-6 text-center">
        {/* Animated Golden Logo Presentation */}
        <div className="relative mb-10 sm:mb-14 flex items-center justify-center min-h-[150px] sm:min-h-[190px]">
          {/* Luminous warm ambient aura */}
          <div className="absolute w-56 sm:w-80 md:w-96 h-36 sm:h-52 md:h-64 rounded-full bg-amber-500/15 blur-3xl animate-pulse pointer-events-none" />
          
          {/* Subtle celestial orbital rings */}
          <div className="absolute w-44 sm:w-64 md:w-76 h-44 sm:h-64 md:h-76 rounded-full border border-amber-500/20 border-t-amber-400/70 animate-spin [animation-duration:8s] pointer-events-none" />
          <div className="absolute w-52 sm:w-72 md:w-84 h-52 sm:h-72 md:h-84 rounded-full border border-amber-500/10 border-b-amber-300/40 animate-spin [animation-duration:12s] [animation-direction:reverse] pointer-events-none" />

          {/* Logo Hero Image - Sized perfectly for Mobile, Tablet & Laptop */}
          <div className="relative z-10 py-1">
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Beyond Limit"
                onError={() => setLogoError(true)}
                className="w-48 sm:w-64 md:w-76 lg:w-88 h-auto max-h-[120px] sm:max-h-[160px] md:max-h-[190px] object-contain filter drop-shadow-[0_0_20px_rgba(245,158,11,0.55)] drop-shadow-[0_0_45px_rgba(217,119,6,0.3)] transition-all duration-300"
              />
            ) : (
              <div className="text-amber-400 font-display font-extrabold text-2xl sm:text-4xl tracking-widest">
                BEYOND LIMIT
              </div>
            )}
          </div>
        </div>

        {/* Minimalist Subtitle - Positioned down with comfortable breathing room */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-1 pt-6 sm:pt-10 mt-2 sm:mt-4"
        >
          <p className="text-[10px] sm:text-xs font-mono tracking-[0.3em] sm:tracking-[0.45em] text-amber-400/90 uppercase font-medium">
            Digital Architecture Studio
          </p>
        </motion.div>

        {/* High-end Minimalist Loading Bar */}
        <div className="mt-6 sm:mt-8 w-52 sm:w-64 md:w-76 space-y-2.5">
          <div className="h-[2px] w-full bg-neutral-800/80 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(245,158,11,0.9)]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              INITIALIZING
            </span>
            <span className="text-amber-400 font-semibold">{Math.min(progress, 100)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

