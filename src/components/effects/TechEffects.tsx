import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

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

// New Advanced Glitch text effect with more distortion and character manipulation
export const GlitchTextEffect = ({ 
  text,
  intensity = "medium", // low, medium, high
  color = "text-drew-purple"
}: { 
  text: string;
  intensity?: "low" | "medium" | "high";
  color?: string;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  
  // Set glitch parameters based on intensity
  const glitchFrequency = intensity === "low" ? 5000 : intensity === "medium" ? 3000 : 1500;
  const glitchDuration = intensity === "low" ? 200 : intensity === "medium" ? 400 : 700;
  const maxDistortion = intensity === "low" ? 1 : intensity === "medium" ? 2 : 3;
  
  // Characters for distortion
  const distortionChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\";
  
  // Function to create distorted version of text
  const distortText = (originalText: string, amount: number) => {
    let result = "";
    for (let i = 0; i < originalText.length; i++) {
      // Randomly decide if this character should be distorted
      if (Math.random() < amount / 10) {
        // Replace with random distortion character
        result += distortionChars[Math.floor(Math.random() * distortionChars.length)];
      } else {
        result += originalText[i];
      }
    }
    return result;
  };
  
  useEffect(() => {
    // Setup random glitching intervals
    const triggerGlitchInterval = setInterval(() => {
      // Only start a new glitch if not currently glitching
      if (!isGlitching) {
        setIsGlitching(true);
        
        // Create a series of rapid text changes
        let glitchCount = 0;
        const maxGlitches = intensity === "low" ? 2 : intensity === "medium" ? 4 : 6;
        
        const glitchInterval = setInterval(() => {
          if (glitchCount < maxGlitches) {
            // Apply distortion with increasing then decreasing intensity
            const distortionAmount = glitchCount < maxGlitches/2 
              ? (glitchCount + 1) * maxDistortion 
              : (maxGlitches - glitchCount) * maxDistortion;
              
            setDisplayText(distortText(text, distortionAmount));
            glitchCount++;
          } else {
            // Reset back to original text
            setDisplayText(text);
            clearInterval(glitchInterval);
            setIsGlitching(false);
          }
        }, glitchDuration / maxGlitches);
      }
    }, glitchFrequency + Math.random() * 2000); // Add randomness to the interval
    
    // Cleanup
    return () => clearInterval(triggerGlitchInterval);
  }, [text, intensity, isGlitching, maxDistortion, glitchDuration]);
  
  return (
    <span className={`relative inline-block ${color} font-mono`}>
      {/* Main text */}
      <span className="relative z-10">{displayText}</span>
      
      {/* Glitch layers */}
      <motion.span 
        className="absolute left-0 top-0 text-red-500 opacity-70 z-0"
        animate={{ 
          x: isGlitching ? [-1, 1, -2, 0] : 0,
          y: isGlitching ? [1, -1, 0, 1] : 0,
          opacity: isGlitching ? [0.7, 0.4, 0.7, 0.3] : 0
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {displayText}
      </motion.span>
      
      <motion.span 
        className="absolute left-0 top-0 text-blue-500 opacity-70 z-0"
        animate={{ 
          x: isGlitching ? [1, -1, 2, 0] : 0,
          y: isGlitching ? [-1, 1, 0, -1] : 0,
          opacity: isGlitching ? [0.7, 0.3, 0.6, 0.2] : 0
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {displayText}
      </motion.span>
    </span>
  );
};
