
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import DataVisualization from '../components/DataVisualization';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ArrowUp } from 'lucide-react';
import { TechGrid, GlitchText } from '../components/effects/TechEffects';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
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
    <div className="min-h-screen bg-drew-black text-white">
      <Navbar />
      
      <main>
        <TechGrid>
          <Hero />
        </TechGrid>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          <motion.div style={{ y: y1, scale }}>
            <Services />
          </motion.div>
          
          <motion.div style={{ y: y2 }}>
            <Portfolio />
          </motion.div>
          
          <DataVisualization />
          <Testimonials />
          <Contact />
        </motion.div>
      </main>
      
      <Footer />

      {/* Progress indicator with enhanced styling */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-drew-purple via-amber-400 to-drew-purple origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Scroll to top button with tech effect */}
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
    </div>
  );
};

export default Index;
