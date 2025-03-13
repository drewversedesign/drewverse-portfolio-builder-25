
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { getImageWithFallback } from '../../utils/imageUtils';
import { TechGrid, GlitchTextEffect } from '../effects/TechEffects';

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
  const [isFlipped, setIsFlipped] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const z = useMotionValue(0);
  
  const imgZ = useTransform(z, [0, 50], [0, 30]);
  const titleZ = useTransform(z, [0, 50], [0, 60]);
  const categoryZ = useTransform(z, [0, 50], [0, 45]);
  const descriptionZ = useTransform(z, [0, 50], [0, 25]);
  const linkZ = useTransform(z, [0, 50], [0, 40]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered || isFlipped) return;
    
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

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
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
        if (!isFlipped) handleMouseLeave();
      }}
      onMouseMove={handleMouseMove}
      onClick={toggleFlip}
      className="relative h-[400px] cursor-pointer transform-style-3d"
    >
      <motion.div 
        className="absolute w-full h-full rounded-xl backface-hidden"
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          rotateX: isFlipped ? 0 : rotateX.get(),
          rotateZ: isFlipped ? 0 : rotateY.get() 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
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
      </motion.div>

      {/* Back of card */}
      <motion.div 
        className="absolute w-full h-full rounded-xl backface-hidden bg-drew-black/90 p-8 flex flex-col justify-between border border-drew-purple/30"
        animate={{ 
          rotateY: isFlipped ? 0 : -180,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <TechGrid>
          <div className="h-full flex flex-col justify-between">
            <div>
              <motion.div className="service-chip mb-3">
                {project.category}
              </motion.div>
              
              <GlitchTextEffect 
                text={project.title}
                intensity="low"
                color="text-white"
              />
              
              <motion.p 
                className="text-gray-300 my-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
            </div>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link to={project.link} className="inline-flex items-center text-drew-purple story-link">
                  View Project <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFlip();
                }}
                className="text-gray-400 text-sm"
              >
                ← Flip back
              </motion.button>
            </div>
          </div>
        </TechGrid>
      </motion.div>
      
      <motion.div 
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-drew-purple flex items-center justify-center z-20"
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
