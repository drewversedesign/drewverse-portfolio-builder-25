
// Utility function for handling image loading errors by providing fallbacks
export const getImageWithFallback = (src: string, fallbackSrc: string = '/placeholder.svg') => {
  return {
    src,
    onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== fallbackSrc) {
        console.warn(`Image failed to load: ${target.src}, using fallback`);
        target.src = fallbackSrc;
      }
    }
  };
};

// Reliable placeholder images from Unsplash (access public URLs)
export const placeholderImages = {
  portfolio1: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80",
  portfolio2: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
  portfolio3: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=80",
  portfolio4: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80",
  testimonial1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  testimonial2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
  testimonial3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
};
