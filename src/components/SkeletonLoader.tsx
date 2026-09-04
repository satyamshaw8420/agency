import React from 'react';
import { Loader2 } from 'lucide-react';

export const SkeletonLoader: React.FC<{ onLoaded?: () => void }> = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#050811] flex flex-col items-center justify-center p-6 selection:bg-sky-400 selection:text-[#050811]">
      {/* Ambient velvet glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl mx-auto space-y-8 text-center">
        {/* Brand Header Skeleton */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-sky-900/30 border border-sky-500/20 animate-pulse flex items-center justify-center">
            <Loader2 className="w-5 h-5 text-sky-400 animate-spin" />
          </div>
          <div className="h-6 w-48 bg-neutral-800/80 rounded-lg animate-pulse" />
        </div>

        {/* Hero Skeletons */}
        <div className="space-y-4">
          <div className="h-10 w-3/4 mx-auto bg-neutral-800/60 rounded-xl animate-pulse" />
          <div className="h-10 w-1/2 mx-auto bg-neutral-800/50 rounded-xl animate-pulse" />
          <div className="h-4 w-2/3 mx-auto bg-neutral-900 rounded-lg animate-pulse mt-2" />
        </div>

        {/* Bento Grid Skeleton Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="h-32 rounded-2xl velvet-card p-4 animate-pulse flex flex-col justify-between">
            <div className="w-8 h-8 rounded-lg bg-neutral-800/80" />
            <div className="space-y-2">
              <div className="h-3 w-16 bg-neutral-800 rounded" />
              <div className="h-2 w-24 bg-neutral-900 rounded" />
            </div>
          </div>
          <div className="h-32 rounded-2xl velvet-card p-4 animate-pulse flex flex-col justify-between">
            <div className="w-8 h-8 rounded-lg bg-neutral-800/80" />
            <div className="space-y-2">
              <div className="h-3 w-16 bg-neutral-800 rounded" />
              <div className="h-2 w-24 bg-neutral-900 rounded" />
            </div>
          </div>
          <div className="h-32 rounded-2xl velvet-card p-4 animate-pulse flex flex-col justify-between">
            <div className="w-8 h-8 rounded-lg bg-neutral-800/80" />
            <div className="space-y-2">
              <div className="h-3 w-16 bg-neutral-800 rounded" />
              <div className="h-2 w-24 bg-neutral-900 rounded" />
            </div>
          </div>
        </div>

        {/* Loading status indicator */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-sky-400/80 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span>Loading Velvet Environment...</span>
        </div>
      </div>
    </div>
  );
};
