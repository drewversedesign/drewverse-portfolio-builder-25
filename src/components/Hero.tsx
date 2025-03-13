
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Hero() {
  // Performance optimization: respect user's reduced motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DrewVerse Design",
      "description": "Premium design studio transforming ideas into digital excellence",
      "url": window.location.origin,
      "logo": `${window.location.origin}/og-image.png`,
      "sameAs": [
        "https://twitter.com/drewverse",
        "https://instagram.com/drewverse",
        "https://linkedin.com/company/drewverse"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-123-4567",
        "contactType": "customer service"
      }
    };

    // Add structured data script to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Animation variants - will only apply if user allows motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.5
      }
    }
  };

  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements - using CSS animations instead of JS for better performance */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-drew-purple/20 filter blur-3xl animate-pulse-slow will-change-transform"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 filter blur-3xl animate-pulse-slow will-change-transform"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6"
          >
            <motion.span 
              variants={prefersReducedMotion ? {} : itemVariants} 
              className="service-chip"
            >
              Premium Design Studio
            </motion.span>
            
            <motion.h1 
              variants={prefersReducedMotion ? {} : itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Transforming <span className="text-gradient">Ideas</span> Into Digital <span className="text-gradient">Excellence</span>
            </motion.h1>

            <motion.p 
              variants={prefersReducedMotion ? {} : itemVariants}
              className="text-lg text-gray-300 max-w-xl"
            >
              DrewVerse Design crafts premium digital experiences that blend
              stunning aesthetics with exceptional functionality to elevate your brand.
            </motion.p>

            <motion.div 
              variants={prefersReducedMotion ? {} : itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-6"
            >
              <Link to="/portfolio" className="group">
                <motion.button 
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  View Our Work
                  <motion.span 
                    animate={prefersReducedMotion ? {} : {
                      x: [0, 5, 0],
                      transition: { 
                        repeat: Infinity, 
                        duration: 1.5, 
                        repeatType: "reverse",
                        ease: "easeInOut" 
                      }
                    }} 
                    className="ml-2 will-change-transform"
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button 
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  className="border border-white/20 hover:border-drew-purple/50 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:bg-drew-purple/10"
                >
                  Let's Connect
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] glass-card rounded-2xl overflow-hidden">
              <motion.div 
                initial={prefersReducedMotion ? { opacity: 1 } : { y: 20, opacity: 0 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-drew-purple/20 to-transparent"
              ></motion.div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400">DrewVerse Design</span>
                    <h3 className="text-xl font-bold text-white">Creative Solutions</h3>
                  </div>
                  <span className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded-full">Premium</span>
                </div>
                
                <motion.div 
                  variants={prefersReducedMotion ? {} : containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {['Web Design', 'UX/UI Design', 'Brand Identity', 'Mobile Apps'].map((item, index) => (
                    <motion.div 
                      key={index} 
                      variants={prefersReducedMotion ? {} : {
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            delay: 0.8 + index * 0.1,
                            duration: 0.5
                          }
                        }
                      }}
                      className="glass-card rounded-lg p-4 hover-scale"
                      // Add loading="lazy" attribute to HTML attributes for components that appear below fold
                      data-loading="lazy"
                    >
                      <h4 className="text-sm font-medium text-white">{item}</h4>
                      <div className="mt-2 w-16 h-1 bg-drew-purple rounded-full"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            {/* Floating elements with optimized animations */}
            {!prefersReducedMotion && (
              <>
                <motion.div 
                  className="absolute -top-6 -right-6 w-24 h-24 glass-card rounded-xl flex items-center justify-center will-change-transform"
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-drew-purple flex items-center justify-center">
                    <span className="text-lg font-bold text-white">D</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-8 -left-8 w-32 h-16 glass-card rounded-xl flex items-center justify-center will-change-transform"
                  animate={{
                    y: [0, 10, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                >
                  <span className="text-gradient font-medium">Let's Create</span>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>;
}
