
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="service-chip">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              About <span className="text-gradient">DrewVerse Design</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We are a creative studio focused on delivering exceptional digital experiences
              that help brands stand out in today's competitive landscape.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">
              Coming soon...
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
