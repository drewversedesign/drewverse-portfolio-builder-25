
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
      <motion.img 
        src={imageProps.src}
        onError={imageProps.onError}
        alt={project.title} 
        style={{ z: imgZ }}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end" style={{ transformStyle: "preserve-3d" }}>
        <div className="transform transition-transform duration-300" style={{ transformStyle: "preserve-3d" }}>
          <motion.span 
            className="service-chip mb-3"
            style={{ z: categoryZ }}
          >
            {project.category}
          </motion.span>
          
          <motion.h3 
            className="text-2xl font-bold text-white mb-2"
            style={{ z: titleZ }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 mb-6 max-w-md"
            style={{ z: descriptionZ }}
          >
            {isFlipped ? "" : "Click to see details"}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardFront;
