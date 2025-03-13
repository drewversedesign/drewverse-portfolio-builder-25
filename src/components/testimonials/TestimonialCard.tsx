
import { motion } from 'framer-motion';
import { useState } from 'react';

export interface TestimonialProps {
  id: number;
  name: string;
  company: string;
  position: string;
  avatar: string; // We'll keep this in the interface for compatibility, but won't use it
  quote: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialProps;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const TestimonialCard = ({ testimonial, direction }: TestimonialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  // Generate initials from the name
  const initials = testimonial.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }}
      className="flex flex-col md:flex-row gap-8 items-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scanning line effect */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-[2px] bg-drew-purple/30 animate-scanning-line"></div>
        </div>
      )}
      
      <motion.div 
        className="relative w-32 h-32 rounded-full overflow-hidden mx-auto flex items-center justify-center bg-drew-purple/20 border-2 border-drew-purple"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: isHovered ? 10 : 0,
          z: isHovered ? 20 : 0
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Tech overlay for initials */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-drew-purple/20 to-transparent z-10"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        )}
        
        {/* Display initials instead of avatar */}
        <span className="text-4xl font-bold text-drew-purple">{initials}</span>
        
        <motion.div 
          className="absolute inset-0 border-2 border-drew-purple rounded-full"
          animate={{
            boxShadow: isHovered 
              ? "0 0 15px rgba(249, 115, 22, 0.4)" 
              : "0 0 0px rgba(249, 115, 22, 0)"
          }}
        ></motion.div>
      </motion.div>
      
      <div className="text-center mt-4">
        <motion.h4 
          className="text-xl font-bold"
          animate={{ 
            y: isHovered ? -2 : 0,
            z: isHovered ? 10 : 0,
            textShadow: isHovered ? "0 0 8px rgba(249, 115, 22, 0.3)" : "none"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {testimonial.name}
        </motion.h4>
        <motion.p 
          className="text-drew-purple"
          animate={{ 
            y: isHovered ? -1 : 0,
            z: isHovered ? 5 : 0 
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
        >
          {testimonial.position}
        </motion.p>
        <motion.p 
          className="text-gray-400 text-sm"
          animate={{ z: isHovered ? 3 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        >
          {testimonial.company}
        </motion.p>
      </div>
      
      <div className="md:w-2/3">
        <motion.div 
          className="relative"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: isHovered ? 2 : 0,
            rotateY: isHovered ? -3 : 0,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          {/* Digital circuit background */}
          {isHovered && (
            <motion.div 
              className="absolute -inset-4 -z-10 opacity-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="circuit" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0,10 L20,10 M10,0 L10,20" stroke="#F97316" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit)" />
              </svg>
            </motion.div>
          )}
          
          <motion.span 
            className="text-5xl text-drew-purple opacity-20 absolute -left-2 -top-8"
            animate={{ 
              rotateZ: isHovered ? -5 : 0,
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? "drop-shadow(0 0 8px rgba(249, 115, 22, 0.5))" : "none"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            "
          </motion.span>
          <p className="text-lg text-gray-300 italic relative z-10 mb-6">
            {testimonial.quote}
          </p>
          <motion.span 
            className="text-5xl text-drew-purple opacity-20 absolute right-0 bottom-0"
            animate={{
              rotateZ: isHovered ? 5 : 0,
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? "drop-shadow(0 0 8px rgba(249, 115, 22, 0.5))" : "none"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            "
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
