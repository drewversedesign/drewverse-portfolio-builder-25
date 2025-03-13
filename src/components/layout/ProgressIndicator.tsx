
import { motion, useScroll } from 'framer-motion';

const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-drew-purple via-amber-400 to-drew-purple origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressIndicator;
