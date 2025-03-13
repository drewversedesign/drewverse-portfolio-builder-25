
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FAQHelpSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-16 text-center p-8 glass-card rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
      <p className="text-gray-400 mb-6 max-w-lg mx-auto">
        If you couldn't find the answer to your question, feel free to reach out to our team directly.
      </p>
      <Link 
        to="/contact" 
        className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg inline-flex items-center transition-all duration-300"
      >
        Contact Us
        <ArrowRight size={18} className="ml-2" />
      </Link>
    </motion.div>
  );
};

export default FAQHelpSection;
