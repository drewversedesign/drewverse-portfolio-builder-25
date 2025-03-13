
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCallToAction = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-16 p-8 md:p-12 bg-gradient-to-br from-drew-purple/20 via-drew-black to-drew-black/80 rounded-xl text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/lovable-uploads/dc7355e5-cce2-468b-9d9e-5ec8df8fe47a.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
        <p className="text-gray-300 mb-8 text-lg">Let's collaborate to create something amazing for your business. Our team is ready to deliver exceptional results.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-3 bg-drew-purple hover:bg-drew-purple/90 text-white font-medium rounded-lg transition-colors duration-300">
            Start a Project
          </Link>
          <Link to="/services" className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-colors duration-300">
            Explore Services
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCallToAction;
