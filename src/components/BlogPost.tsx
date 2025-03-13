import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { useState } from 'react';
import { getImageWithFallback } from '../utils/imageUtils';

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
  const [isHovered, setIsHovered] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;
    
    const rotX = (mouseY / (rect.height / 2)) * -3;
    const rotY = (mouseX / (rect.width / 2)) * 3;
    
    rotateX.set(rotX);
    rotateY.set(rotY);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const imageProps = getImageWithFallback(post.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY,
        transition: "transform 0.1s ease-out",
        boxShadow: isHovered 
          ? "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.2)" 
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }}
      whileHover={{
        translateY: -10
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card rounded-xl overflow-hidden transition-all duration-300"
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={imageProps.src} 
          onError={imageProps.onError}
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <motion.div 
          className="absolute top-4 left-4"
          animate={{ 
            z: isHovered ? 10 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="service-chip">{post.category}</span>
        </motion.div>
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
        
        <motion.h3 
          className="text-xl font-bold mb-3 hover:text-drew-purple transition-colors duration-300"
          animate={{ 
            z: isHovered ? 15 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </motion.h3>
        
        <p className="text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <motion.div
          animate={{
            z: isHovered ? 20 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link 
            to={`/blog/${post.slug}`} 
            className="inline-flex items-center text-drew-purple story-link"
          >
            Read More <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}
