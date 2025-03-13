
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PortfolioCTA = () => {
  return (
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
  );
};

export default PortfolioCTA;
