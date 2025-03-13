
import { motion } from 'framer-motion';
import { getImageWithFallback } from '../../../utils/imageUtils';
import { ProjectProps } from './ProjectCard';

interface ProjectCardFrontProps {
  project: ProjectProps;
  imgZ: any;
  categoryZ: any;
  titleZ: any;
  descriptionZ: any;
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
  const imageProps = getImageWithFallback(project.image);
  
  return (
    <div className="absolute w-full h-full rounded-xl overflow-hidden">
      <motion.div 
        className="relative w-full h-full overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img 
          src={imageProps.src}
          onError={imageProps.onError}
          alt={project.title} 
          style={{ z: imgZ }}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end" style={{ transformStyle: "preserve-3d" }}>
          <div className="transform transition-transform duration-300" style={{ transformStyle: "preserve-3d" }}>
            <motion.span 
              className="service-chip mb-2"
              style={{ z: categoryZ }}
            >
              {project.category}
            </motion.span>
            
            <motion.h3 
              className="text-xl font-bold text-white mb-2"
              style={{ z: titleZ }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-sm text-gray-300 mb-4 max-w-md"
              style={{ z: descriptionZ }}
            >
              {isFlipped ? "" : "Click to see details"}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCardFront;
