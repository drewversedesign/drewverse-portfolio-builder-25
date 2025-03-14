import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import DataVisualization from '../components/DataVisualization';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { TechGrid } from '../components/effects/TechEffects';
import ScrollToTop from '../components/layout/ScrollToTop';
import ProgressIndicator from '../components/layout/ProgressIndicator';
import BackgroundEffects from '../components/effects/BackgroundEffects';

const Index = () => {
  const { scrollYProgress } = useScroll();

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Homepage structured data
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DrewVerse Design",
    "url": "https://drewverse.design",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://drewverse.design/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <SEO 
        title="DrewVerse Design - Premium Digital Agency in Uganda"
        description="Top-rated website design in Kampala & branding agency in Uganda. We create stunning websites, mobile apps, and custom website development solutions throughout Uganda."
        keywords="website design Kampala, branding agency Uganda, custom website development Uganda, affordable website design in Kampala, best branding services in Uganda 2025"
        ogUrl="https://drewverse.design/"
        canonicalUrl="https://drewverse.design/"
        structuredData={homePageSchema}
      />
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
          <motion.div 
            style={{ y: y1, scale }}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Services />
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Portfolio />
          </motion.div>
          
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <DataVisualization />
          </motion.div>
          
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Testimonials />
          </motion.div>
          
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Contact />
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />

      {/* Progress indicator */}
      <ProgressIndicator />

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Background effects */}
      <BackgroundEffects />
    </div>
  );
};

export default Index;
