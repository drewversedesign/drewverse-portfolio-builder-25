
import { motion } from 'framer-motion';
import { BlogPostProps } from '../BlogPost';

interface BlogContentProps {
  post: BlogPostProps;
}

const BlogContent = ({ post }: BlogContentProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl overflow-hidden mb-12 relative group"
      >
        {/* Futuristic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-drew-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-drew-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-drew-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-drew-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-drew-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="prose prose-lg prose-invert max-w-none relative"
      >
        {/* Subtle grid background for content */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(66,71,112,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,71,112,0.03)_1px,transparent_1px)] bg-[size:30px_30px] -z-10"></div>
        
        <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
      </motion.div>
    </>
  );
};

export default BlogContent;
