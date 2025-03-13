
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import ProjectCardFront from './ProjectCardFront';
import ProjectCardBack from './ProjectCardBack';

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

  const toggleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };
  
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
      onClick={() => !isFlipped && setIsFlipped(true)}
      className="relative h-[400px] cursor-pointer transform-style-3d"
    >
      {/* Front card */}
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
        <ProjectCardFront 
          project={project}
          imgZ={imgZ}
          categoryZ={categoryZ}
          titleZ={titleZ}
          descriptionZ={descriptionZ}
          isFlipped={isFlipped}
        />
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
        <ProjectCardBack 
          project={project} 
          toggleFlip={toggleFlip}
        />
      </motion.div>
      
      {/* Project number badge */}
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
