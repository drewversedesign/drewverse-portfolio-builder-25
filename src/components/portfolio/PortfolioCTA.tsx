
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, Clock, ThumbsUp } from 'lucide-react';

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
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          We're ready to transform your ideas into reality. Let's collaborate and create something amazing together.
        </p>
        
        {/* Services Highlights - E-commerce inspired */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <ShoppingBag size={24} />, title: "E-commerce", desc: "Boost your online sales" },
            { icon: <Truck size={24} />, title: "Fast Delivery", desc: "Quick project turnaround" },
            { icon: <Clock size={24} />, title: "24/7 Support", desc: "Always here to help" },
            { icon: <ThumbsUp size={24} />, title: "Satisfaction", desc: "100% guaranteed results" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-drew-gray-dark/80 backdrop-blur-sm p-4 rounded-lg border border-drew-purple/20"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-drew-purple/20 flex items-center justify-center mb-3 text-drew-purple">
                  {item.icon}
                </div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
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
