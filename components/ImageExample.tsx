'use client';

import Image from 'next/image';
import { getImageUrl } from '@/lib/imageUtils';

interface ImageExampleProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * A reusable image component that demonstrates proper image handling
 * with Next.js Image and our custom image utilities
 */
export default function ImageExample({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
}: ImageExampleProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={getImageUrl(src)}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-auto transition-opacity duration-300 hover:opacity-90"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNGM0Y0RjYiLz4KICA8cGF0aCBkPSJNNDAwIDIwMEM0MDAgMjUyLjUgMzU3LjUgMjk1IDMwNSAyOTVDMjUyLjUgMjk1IDIxMCAyNTIuNSAyMTAgMjAwQzIxMCAxNDcuNSAyNTIuNSAxMDUgMzA1IDEwNUMzNTcuNSAxMDUgNDAwIDE0Ny41IDQwMCAyMDBaIiBmaWxsPSIjRTVFN0VCIi8+CiAgPHBhdGggZD0iTTQwMCAyMEM0MDAgNzIuNSAzNTcuNSAxMTUgMzA1IDExNUMyNTIuNSAxMTUgMjEwIDcyLjUgMjEwIDIwQzIxMCAtMzIuNSAyNTIuNSAtNzUgMzA1IC03NUMzNTcuNS03NSA0MDAgLTMyLjUgNDAwIDIwWiIgc3Ryb2tlPSIjOUNBM0FGIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBkPSJNNDAwIDIwMEM0MDAgMjUyLjUgMzU3LjUgMjk1IDMwNSAyOTUiIHN0cm9rZT0iIzlDQTNDRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4KICA8cGF0aCBkPSJNMTAwIDUwMEg3MDBWNTI1SDEwMFY1MDBaIiBmaWxsPSIjRTVFN0VCIi8+CiAgPHBhdGggZD0iTTEwMCA1MDBINzAwVjUyNUgxMDBWNTAwWiIgc3Ryb2tlPSIjOUNBM0FGIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBkPSJNMTAwIDUwMEg3MDAiIHN0cm9rZT0iIzlDQTNDRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4KICA8cGF0aCBkPSJNMTAwIDEwMEg3MDBWNDUwSDEwMFYxMDBaIiBzdHJva2U9IiM5Q0EzQ0YiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+Cjwvc3ZnPgo="
        loading="lazy"
        onError={(e) => {
          // Fallback to our placeholder if the image fails to load
          const target = e.target as HTMLImageElement;
          target.src = getImageUrl('placeholders/image-not-found.svg');
        }}
      />
    </div>
  );
}
