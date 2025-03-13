
import { motion } from 'framer-motion';
import { getImageWithFallback } from '../../utils/imageUtils';
import { ProjectProps } from './cards/ProjectCard';

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
          {/* Technology Tags */}
          {project.technologies && (
            <div className="mb-4 space-x-2 transform transition-transform duration-300" style={{ transformStyle: "preserve-3d", z: categoryZ.get() + 5 }}>
              {project.technologies.slice(0, 3).map((tech, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="inline-block px-2 py-1 text-xs bg-black/40 backdrop-blur-sm border border-drew-purple/30 rounded-md text-gray-300"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="inline-block px-2 py-1 text-xs bg-black/40 backdrop-blur-sm border border-drew-purple/30 rounded-md text-gray-300"
                >
                  +{project.technologies.length - 3} more
                </motion.span>
              )}
            </div>
          )}
          
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
              {isFlipped ? "" : project.description.substring(0, 85) + (project.description.length > 85 ? "..." : "")}
            </motion.p>

            {/* Client and completion date */}
            {!isFlipped && (
              <div className="flex justify-between items-center text-xs text-gray-400" style={{ z: descriptionZ.get() + 10 }}>
                {project.clientName && (
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-drew-purple mr-2"></span>
                    {project.clientName}
                  </span>
                )}
                {project.completionDate && (
                  <span>{project.completionDate}</span>
                )}
              </div>
            )}
            
            {/* Showcase button that appears on hover */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent pointer-events-none"
              style={{ z: descriptionZ.get() + 20 }}
            >
              {!isFlipped && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-drew-purple font-medium">Click to see details</span>
                  <span className="bg-drew-purple/20 px-3 py-1 rounded-full text-xs text-white">#{project.id}</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCardFront;
