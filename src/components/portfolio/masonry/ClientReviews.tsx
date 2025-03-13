
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ClientReviews = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-12 bg-drew-gray-dark/60 backdrop-blur-sm rounded-xl p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Client Reviews</h3>
        <div className="flex items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <Star 
                key={star} 
                size={16} 
                className={star <= 4.7 ? "text-amber-400 fill-amber-400" : "text-gray-500"} 
              />
            ))}
          </div>
          <span className="ml-2 text-amber-400 font-medium">4.7</span>
          <span className="ml-1 text-gray-400 text-sm">(128 reviews)</span>
        </div>
      </div>
      
      <blockquote className="italic text-gray-300 border-l-4 border-drew-purple pl-4">
        "The team delivered exceptional work that exceeded our expectations. Their attention to detail and creative approach helped our e-commerce site stand out from competitors."
        <footer className="mt-2 text-sm text-gray-400">
          — James Wilson, CEO at Techmart
        </footer>
      </blockquote>
    </motion.div>
  );
};

export default ClientReviews;
