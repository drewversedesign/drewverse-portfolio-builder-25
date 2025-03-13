
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-drew-black border border-drew-purple text-white flex items-center justify-center shadow-lg z-50 overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: showScrollTop ? 1 : 0, 
        scale: showScrollTop ? 1 : 0.8,
        y: showScrollTop ? 0 : 20 
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      whileHover={{
        boxShadow: "0 0 15px rgba(249, 115, 22, 0.5)"
      }}
    >
      {/* Tech glow effect */}
      <div className="absolute inset-0 bg-drew-purple/10 animate-pulse"></div>
      
      {/* Button content */}
      <ArrowUp size={20} className="relative z-10 text-drew-purple" />
      
      {/* Scan line effect */}
      <div className="absolute w-full h-[2px] bg-drew-purple/30 -top-1 left-0 animate-scanning-line"></div>
    </motion.button>
  );
};

export default ScrollToTop;
