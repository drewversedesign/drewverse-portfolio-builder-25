
import { motion } from 'framer-motion';
import { BlogPostProps } from '../BlogPost';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { getImageWithFallback } from '../../utils/imageUtils';

interface TrendingPostsProps {
  posts: BlogPostProps[];
}

const TrendingPosts = ({ posts }: TrendingPostsProps) => {
  if (!posts.length) return null;
  
  return (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        <TrendingUp size={20} className="text-rose-500 mr-2" />
        <h2 className="text-2xl font-bold">Trending Now</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <TrendingPostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  );
};

const TrendingPostCard = ({ post, index }: { post: BlogPostProps; index: number }) => {
  const imageProps = getImageWithFallback(post.image);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden hover-scale transition-all duration-300"
    >
      <div className="relative">
        <img
          src={imageProps.src}
          onError={imageProps.onError}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 bg-gradient-to-b from-black/70 to-transparent w-full h-full">
          <div className="p-4">
            <span className="inline-flex items-center bg-rose-500 text-white text-xs px-2 py-1 rounded-full">
              <TrendingUp size={12} className="mr-1" /> Trending
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
          <span className="text-xs font-medium text-drew-purple bg-drew-purple/10 px-2 py-1 rounded">
            {post.category}
          </span>
          <h3 className="text-white text-lg font-bold mt-2 line-clamp-2">
            <Link to={`/blog/${post.slug}`} className="hover:text-drew-purple transition-colors">
              {post.title}
            </Link>
          </h3>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>{post.author}</span>
          <Link to={`/blog/${post.slug}`} className="text-drew-purple flex items-center">
            Read <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TrendingPosts;
