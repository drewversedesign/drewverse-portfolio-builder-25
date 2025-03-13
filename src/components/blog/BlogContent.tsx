
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
        className="rounded-xl overflow-hidden mb-12"
      >
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-auto"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="prose prose-lg prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />
    </>
  );
};

export default BlogContent;
