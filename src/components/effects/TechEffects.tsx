
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Scanning line effect component
export const ScanningLine = () => (
  <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
    <div className="absolute w-full h-[2px] bg-drew-purple/30 animate-scanning-line"></div>
  </div>
);

// Data flow background effect
export const DataFlow = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
    <div className="absolute top-0 h-full w-[100px] bg-gradient-to-r from-transparent via-drew-purple/30 to-transparent animate-data-flow"></div>
  </div>
);

// Tech grid background
export const TechGrid = ({ children }: { children: ReactNode }) => (
  <div className="relative tech-grid">
    {children}
  </div>
);

// Cyber button with hover effect
export const CyberButton = ({ 
  children, 
  onClick 
}: { 
  children: ReactNode; 
  onClick?: () => void 
}) => (
  <motion.button
    className="relative px-6 py-3 overflow-hidden group rounded-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-drew-purple/20 to-amber-400/20 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute -inset-px bg-drew-black rounded-md border border-drew-purple/30 group-hover:border-drew-purple/70 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-drew-purple/50 group-hover:border-drew-purple transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-drew-purple/50 group-hover:border-drew-purple transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-drew-purple/50 group-hover:border-drew-purple transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-drew-purple/50 group-hover:border-drew-purple transition-all duration-300"></div>
    </div>
    <span className="relative font-mono text-white group-hover:text-drew-purple transition-colors duration-300 z-10">
      {children}
    </span>
  </motion.button>
);

// Glitch text effect
export const GlitchText = ({ text }: { text: string }) => (
  <motion.span 
    className="inline-block relative text-gradient"
    animate={{ 
      x: [0, -1, 1, -1, 0],
      y: [0, 1, -1, 1, 0],
    }}
    transition={{ 
      repeat: Infinity, 
      repeatType: "reverse", 
      duration: 0.2,
      repeatDelay: 5
    }}
  >
    {text}
  </motion.span>
);

// Holographic card effect
export const HolographicCard = ({ children }: { children: ReactNode }) => (
  <motion.div 
    className="holographic relative rounded-xl p-5 overflow-hidden"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.div>
);
