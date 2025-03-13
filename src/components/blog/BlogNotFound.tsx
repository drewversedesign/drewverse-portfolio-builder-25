
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogNotFound = () => {
  return (
    <div className="min-h-screen bg-drew-black text-white flex items-center justify-center overflow-hidden relative">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-drew-purple/10 filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 filter blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>
      
      {/* Grid overlay for futuristic feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,71,112,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(66,71,112,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 neo-blur p-12 rounded-2xl border border-drew-purple/20"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">404<span className="text-white">_</span>Post not found</h2>
          <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="inline-flex items-center px-6 py-3 rounded-xl bg-drew-purple hover:bg-drew-purple/90 transition-all duration-300 text-white">
            Return to blog
          </Link>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 border border-drew-purple/30 rounded-md"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border border-drew-purple/30 rounded-md"></div>
      </motion.div>
    </div>
  );
};

export default BlogNotFound;
