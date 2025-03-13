
import { useReducedMotion } from 'framer-motion';

// Animation presets that respect reduced motion preferences
export const useAnimationPresets = () => {
  const prefersReducedMotion = useReducedMotion();
  
  // Base variants that can be used across components
  const fadeInUp = prefersReducedMotion 
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }
        }
      };
      
  const fadeIn = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.5 }
        }
      };
  
  const staggerChildren = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            when: "beforeChildren"
          }
        }
      };
  
  // Optimized hover animations
  const optimizedHover = prefersReducedMotion
    ? {}
    : {
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      };
  
  // Helper for conditionally applying animations
  const shouldAnimate = !prefersReducedMotion;
  
  return {
    fadeInUp,
    fadeIn,
    staggerChildren,
    optimizedHover,
    shouldAnimate
  };
};

// Helper hook for lazy loading below-fold content
export const useLazyAnimation = (threshold = 0.1) => {
  // This would normally use Intersection Observer
  // For simplicity, we'll just return a basic implementation
  const prefersReducedMotion = useReducedMotion();
  
  const lazyFadeIn = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
          }
        }
      };
  
  return {
    lazyFadeIn,
    shouldLazyLoad: !prefersReducedMotion
  };
};
