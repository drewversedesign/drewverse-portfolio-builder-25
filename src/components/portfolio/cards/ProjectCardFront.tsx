
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { ProjectProps } from './ProjectCard';
import { MotionValue } from 'framer-motion';

interface ProjectCardFrontProps {
  project: ProjectProps;
  imgZ: MotionValue<number>;
  categoryZ: MotionValue<number>;
  titleZ: MotionValue<number>;
  descriptionZ: MotionValue<number>;
  isFlipped: boolean;
}

const ProjectCardFront = ({ 
  project, 
  imgZ, 
  categoryZ, 
  titleZ, 
  descriptionZ,
  isFlipped
}: ProjectCardFrontProps) => {
  // Extract the project slug from the title
  const projectSlug = project.link.split('/').pop();
  
  return (
    <div className="bg-gradient-to-tr from-drew-gray-dark to-drew-black/95 rounded-xl overflow-hidden h-full p-5 border border-white/5 hover:border-drew-purple/30 transition-all duration-300">
      {/* Project image with overlay */}
      <motion.div 
        className="h-48 md:h-56 rounded-lg overflow-hidden relative mb-4"
        style={{ 
          zIndex: imgZ,
          transformStyle: "preserve-3d",
          transform: isFlipped ? "none" : "translateZ(20px)"
        }}
      >
        <Link to={`/portfolio/${projectSlug}`} className="block h-full">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-drew-black/80 via-drew-black/30 to-transparent transition-opacity duration-300 opacity-60 hover:opacity-40"></div>
        </Link>
      </motion.div>
      
      {/* Project content */}
      <div className="space-y-3">
        <motion.div 
          style={{ 
            zIndex: categoryZ, 
            transformStyle: "preserve-3d",
            transform: isFlipped ? "none" : "translateZ(15px)"
          }}
        >
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-drew-purple/20 text-drew-purple">
            {project.category}
          </span>
        </motion.div>
        
        <Link to={`/portfolio/${projectSlug}`}>
          <motion.h3 
            className="text-lg font-medium hover:text-drew-purple transition-colors"
            style={{ 
              zIndex: titleZ, 
              transformStyle: "preserve-3d",
              transform: isFlipped ? "none" : "translateZ(25px)"
            }}
          >
            {project.title}
          </motion.h3>
        </Link>
        
        <motion.p 
          className="text-sm text-gray-400 line-clamp-2"
          style={{ 
            zIndex: descriptionZ, 
            transformStyle: "preserve-3d",
            transform: isFlipped ? "none" : "translateZ(10px)"
          }}
        >
          {project.description}
        </motion.p>
        
        <div className="pt-3 flex justify-between items-center">
          <Link 
            to={`/portfolio/${projectSlug}`}
            className="text-drew-purple text-sm hover:text-drew-purple/80 transition-colors flex items-center"
          >
            View Details
            <ExternalLink size={14} className="ml-1" />
          </Link>
          
          <div className="text-xs text-gray-500">
            {project.completionDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardFront;
