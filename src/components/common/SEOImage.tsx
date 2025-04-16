
import React from 'react';
import { cn } from '@/lib/utils';

interface SEOImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  focusKeyword?: string;
  className?: string;
}

const SEOImage: React.FC<SEOImageProps> = ({ 
  alt, 
  focusKeyword, 
  className,
  ...props 
}) => {
  // Ensure alt text contains focus keyword if provided
  const optimizedAlt = focusKeyword 
    ? alt.toLowerCase().includes(focusKeyword.toLowerCase())
      ? alt
      : `${alt} - ${focusKeyword}`
    : alt;

  return (
    <img
      {...props}
      alt={optimizedAlt}
      className={cn('max-w-full h-auto', className)}
      loading="lazy"
    />
  );
};

export default SEOImage;
