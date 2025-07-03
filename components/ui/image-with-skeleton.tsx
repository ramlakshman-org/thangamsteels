'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
}

export function ImageWithSkeleton({ 
  src, 
  alt, 
  className, 
  skeletonClassName 
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div 
          className={cn(
            "absolute inset-0 bg-gray-200 animate-skeleton-pulse",
            skeletonClassName
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          hasError && "hidden",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
      {hasError && (
        <div className={cn(
          "flex items-center justify-center bg-gray-100 text-gray-400",
          className
        )}>
          <span className="text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
}