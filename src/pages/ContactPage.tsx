
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <Navbar />
      
      <main className="pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="service-chip">Reach Out</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Have questions or ready to start your next project? We're here to help!
            </p>
          </motion.div>
        </div>
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
