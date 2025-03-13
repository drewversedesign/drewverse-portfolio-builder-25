
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PortfolioPage = () => {
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
            <span className="service-chip">Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              <span className="text-gradient">Portfolio</span> Showcase
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Explore our complete collection of projects that demonstrate our expertise
              in design, development, and digital innovation.
            </p>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We're ready to transform your ideas into reality. Let's collaborate and create something amazing together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center mx-auto"
              >
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
