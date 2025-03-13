
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TechGrid, GlitchTextEffect } from '../../effects/TechEffects';
import { ProjectProps } from './ProjectCard';

interface ProjectCardBackProps {
  project: ProjectProps;
  toggleFlip: (e: React.MouseEvent) => void;
}

const ProjectCardBack = ({ project, toggleFlip }: ProjectCardBackProps) => {
  return (
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
            onClick={toggleFlip}
            className="text-gray-400 text-sm"
          >
            ← Flip back
          </motion.button>
        </div>
      </div>
    </TechGrid>
  );
};

export default ProjectCardBack;
