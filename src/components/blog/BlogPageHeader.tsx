
import { motion } from 'framer-motion';

const BlogPageHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="service-chip">Latest Articles</span>
      <h1 className="text-4xl md:text-5xl font-bold mt-4">
        Our <span className="text-gradient">Blog</span>
      </h1>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Insights, tips, and stories about design, development, and digital trends.
      </p>
    </motion.div>
  );
};

export default BlogPageHeader;
