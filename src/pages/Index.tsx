
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

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

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
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Services />
          <Portfolio />
          <DataVisualization />
          <Testimonials />
          <Contact />
        </motion.div>
      </main>
      
      <Footer />

      {/* Progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-drew-purple origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-drew-purple text-white flex items-center justify-center shadow-lg z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0.8,
          y: showScrollTop ? 0 : 20 
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>

      {/* Floating elements - purely decorative */}
      <div className="fixed top-1/4 left-[10%] w-32 h-32 rounded-full bg-blue-500/5 blur-3xl animate-float" />
      <div className="fixed top-2/3 right-[5%] w-40 h-40 rounded-full bg-drew-purple/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="fixed bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-green-500/5 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
    </div>
  );
};

export default Index;
