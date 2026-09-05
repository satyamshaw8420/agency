import React, { useState, useEffect, useRef, memo } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  width?: string | number;
  height?: string | number;
  priority?: boolean;
  rootMargin?: string;
}

export const LazyImage: React.FC<LazyImageProps> = memo(({
  src,
  alt,
  className = '',
  containerClassName = '',
  width,
  height,
  priority = false,
  rootMargin = '250px 0px',
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(priority);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (priority || isVisible) return;

    // Fallback if browser doesn't support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority, rootMargin, isVisible]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-neutral-950 ${containerClassName}`}
    >
      {/* Subtle skeleton shimmer placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-900/80 animate-pulse flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer" />
        </div>
      )}

      {isVisible && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';
