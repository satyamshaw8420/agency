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
        return prev + Math.floor(Math.random() * 20) + 16;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 bg-[#070709] flex flex-col items-center justify-center p-6 select-none overflow-hidden will-change-transform transform-gpu"
    >
      {/* Subtle gold ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-md w-full px-6 text-center">
        {/* Logo coming smoothly from front */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 flex items-center justify-center"
        >
          {/* Ambient warm glow behind logo */}
          <div className="absolute w-44 sm:w-56 h-32 sm:h-40 rounded-full bg-amber-500/15 blur-2xl pointer-events-none" />

          <div className="relative z-10">
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Beyond Limit"
                width="240"
                height="96"
                onError={() => setLogoError(true)}
                className="w-44 sm:w-56 h-auto object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.45)]"
              />
            ) : (
              <div className="text-amber-400 font-display font-bold text-2xl sm:text-3xl tracking-widest">
                BEYOND LIMIT
              </div>
            )}
          </div>
        </motion.div>

        {/* Refined tagline below logo */}
        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1"
        >
          <p className="text-xs sm:text-sm text-neutral-300 font-medium tracking-wide">
            Architecting modern web experiences
          </p>
          <p className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-amber-400/90 uppercase font-semibold">
            Digital Engineering &amp; Design Studio
          </p>
        </motion.div>

        {/* Minimalist Progress Track */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="mt-8 w-48 sm:w-56 space-y-2"
        >
          <div className="h-[2px] w-full bg-neutral-800/80 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-100 ease-out shadow-[0_0_8px_rgba(245,158,11,0.8)]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              LOADING
            </span>
            <span className="text-amber-400 font-medium">{Math.min(progress, 100)}%</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


