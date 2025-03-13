
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BlogPostProps } from '../BlogPost';
import { getImageWithFallback } from '../../utils/imageUtils';

interface RelatedPostsProps {
  relatedPosts: BlogPostProps[];
}

const RelatedPosts = ({ relatedPosts }: RelatedPostsProps) => {
  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-20"
    >
      <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((relatedPost) => {
          const imageProps = getImageWithFallback(relatedPost.image);
          
          return (
            <div 
              key={relatedPost.id}
              className="glass-card rounded-xl overflow-hidden hover-scale transition-all duration-300"
            >
              <Link to={`/blog/${relatedPost.slug}`} className="block">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={imageProps.src} 
                    onError={imageProps.onError}
                    alt={relatedPost.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  <Link to={`/blog/${relatedPost.slug}`} className="hover:text-drew-purple transition-colors duration-300">
                    {relatedPost.title}
                  </Link>
                </h3>
                <Link 
                  to={`/blog/${relatedPost.slug}`} 
                  className="inline-flex items-center text-drew-purple story-link mt-2"
                  aria-label={`Read more about ${relatedPost.title}`}
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RelatedPosts;
