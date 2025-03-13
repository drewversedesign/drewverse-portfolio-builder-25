
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <>
      {/* Enhanced floating elements with tech-inspired animations */}
      <motion.div 
        className="fixed top-1/4 left-[10%] w-32 h-32 rounded-full bg-blue-500/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="fixed top-2/3 right-[5%] w-40 h-40 rounded-full bg-drew-purple/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      <motion.div 
        className="fixed bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-green-500/5 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
        }}
      />

      {/* Digital circuit lines - purely decorative */}
      <svg 
        className="fixed bottom-0 left-0 w-full h-full pointer-events-none opacity-10 z-0" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path 
          d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100" 
          stroke="url(#techGradient)" 
          strokeWidth="1" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default BackgroundEffects;
