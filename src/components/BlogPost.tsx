
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

export interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

interface BlogPostCardProps {
  post: BlogPostProps;
  index: number;
}

export default function BlogPost({ post, index }: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden hover-scale transition-all duration-300"
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="service-chip">{post.category}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3 gap-4">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 hover:text-drew-purple transition-colors duration-300">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.slug}`} 
          className="inline-flex items-center text-drew-purple story-link"
        >
          Read More <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </motion.article>
  );
}
