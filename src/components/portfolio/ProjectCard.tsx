import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getImageWithFallback } from '../../utils/imageUtils';

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
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const z = useMotionValue(0);
  
  const imgZ = useTransform(z, [0, 50], [0, 30]);
  const titleZ = useTransform(z, [0, 50], [0, 60]);
  const categoryZ = useTransform(z, [0, 50], [0, 45]);
  const descriptionZ = useTransform(z, [0, 50], [0, 25]);
  const linkZ = useTransform(z, [0, 50], [0, 40]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;
    
    const rotX = (mouseY / (rect.height / 2)) * -5;
    const rotY = (mouseX / (rect.width / 2)) * 5;
    
    rotateX.set(rotX);
    rotateY.set(rotY);
    z.set(50);
  };
  
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    z.set(0);
  };
  
  const imageProps = getImageWithFallback(project.image);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => {
        onMouseLeave();
        handleMouseLeave();
      }}
      onMouseMove={handleMouseMove}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY
      }}
      className="relative rounded-xl overflow-hidden group h-[400px]"
    >
      <motion.img 
        src={imageProps.src}
        onError={imageProps.onError}
        alt={project.title} 
        style={{ z: imgZ }}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end" style={{ transformStyle: "preserve-3d" }}>
        <div className="transform transition-transform duration-300 group-hover:translate-y-0" style={{ transformStyle: "preserve-3d" }}>
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
            {project.description}
          </motion.p>
          
          <motion.div style={{ z: linkZ }}>
            <Link to={project.link} className="inline-flex items-center text-drew-purple story-link">
              View Project <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-drew-purple flex items-center justify-center"
        animate={{ 
          scale: isHovered ? [1, 1.1, 1] : 1,
          z: isHovered ? 30 : 0,
          rotateZ: isHovered ? 10 : 0
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
