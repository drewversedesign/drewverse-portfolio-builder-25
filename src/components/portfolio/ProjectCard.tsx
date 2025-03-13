
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface ProjectProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative rounded-xl overflow-hidden group h-[400px]"
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
        <div className="transform transition-transform duration-300 group-hover:translate-y-0">
          <span className="service-chip mb-3">{project.category}</span>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-6 max-w-md">{project.description}</p>
          
          <Link to={project.link} className="inline-flex items-center text-drew-purple story-link">
            View Project <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
      
      {/* Hover animation elements */}
      <motion.div 
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-drew-purple flex items-center justify-center"
        animate={{ 
          scale: isHovered ? [1, 1.1, 1] : 1 
        }}
        transition={{ 
          duration: 1, 
          repeat: isHovered ? Infinity : 0, 
          repeatType: "reverse" 
        }}
      >
        <span className="text-white font-medium">{project.id}</span>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
