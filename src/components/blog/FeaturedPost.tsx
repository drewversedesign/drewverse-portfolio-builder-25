
import { motion } from 'framer-motion';
import { BlogPostProps } from '../BlogPost';
import BlogPost from '../BlogPost';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface FeaturedPostProps {
  posts: BlogPostProps[];
}

const FeaturedPost = ({ posts }: FeaturedPostProps) => {
  if (!posts.length) return null;
  
  const mainPost = posts[0];
  const secondaryPosts = posts.slice(1, 3);
  
  return (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        <Star size={20} className="text-amber-400 mr-2" />
        <h2 className="text-2xl font-bold">Featured Posts</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BlogPost post={mainPost} index={0} size="large" />
        </motion.div>
        
        <div className="lg:col-span-1 space-y-6">
          {secondaryPosts.map((post, index) => (
            <BlogPost key={post.id} post={post} index={index + 1} size="small" />
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-end"
          >
            <Link to="/blog" className="text-drew-purple flex items-center group">
              <span className="relative">
                View all featured
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-drew-purple transition-all duration-300"></span>
              </span>
              <motion.span 
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="ml-2"
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
