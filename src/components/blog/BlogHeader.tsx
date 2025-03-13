
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Calendar, Tag, Clock } from 'lucide-react';
import { BlogPostProps } from '../BlogPost';

interface BlogHeaderProps {
  post: BlogPostProps;
  readingTime: number;
}

const BlogHeader = ({ post, readingTime }: BlogHeaderProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-400 hover:text-drew-purple mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all posts
        </Link>
        
        <div className="mb-6">
          <span className="service-chip">{post.category}</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8 gap-6">
          <div className="flex items-center">
            <User size={14} className="mr-2" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-2" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Tag size={14} className="mr-2" />
            {post.category}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-2" />
            {readingTime} min read
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogHeader;
