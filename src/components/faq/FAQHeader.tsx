
import { motion } from 'framer-motion';

const FAQHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="service-chip">Get Answers</span>
      <h1 className="text-4xl md:text-5xl font-bold mt-4">
        Frequently Asked <span className="text-gradient">Questions</span>
      </h1>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Find answers to common questions about our services, processes, and collaboration.
      </p>
    </motion.div>
  );
};

export default FAQHeader;
