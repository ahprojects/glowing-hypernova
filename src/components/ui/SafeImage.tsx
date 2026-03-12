'use client';

import NextImage, { ImageProps } from 'next/image';
import { useState } from 'react';

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

export default function SafeImage({ src, alt, fallbackSrc, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error && !fallbackSrc) {
    return null; // Hide the image if it fails and no fallback is provided
  }

  return (
    <NextImage
      src={error ? (fallbackSrc as string) : src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}
