
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Code } from 'lucide-react';
import { TechGrid, GlitchTextEffect } from '../../effects/TechEffects';
import { ProjectProps } from './ProjectCard';

interface ProjectCardBackProps {
  project: ProjectProps;
  toggleFlip: (e: React.MouseEvent) => void;
}

const ProjectCardBack = ({ project, toggleFlip }: ProjectCardBackProps) => {
  // Extract technologies and services if available
  const technologies = 'technologies' in project ? project.technologies : [];
  const services = 'services' in project ? project.services : [];
  const clientName = 'clientName' in project ? project.clientName : 'Client';
  const completionDate = 'completionDate' in project ? project.completionDate : '';

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
            className="text-gray-300 my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.description}
          </motion.p>
          
          {/* Project details */}
          {(clientName || completionDate) && (
            <div className="space-y-2 mb-4">
              {clientName && (
                <div className="flex items-center text-sm text-gray-400">
                  <User size={14} className="mr-2 text-drew-purple" />
                  <span>{clientName}</span>
                </div>
              )}
              
              {completionDate && (
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar size={14} className="mr-2 text-drew-purple" />
                  <span>{completionDate}</span>
                </div>
              )}
            </div>
          )}
          
          {/* Technologies used */}
          {technologies && technologies.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <Code size={14} className="mr-2 text-drew-purple" />
                <span>Technologies</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-drew-black/60 text-gray-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Services provided */}
          {services && services.length > 0 && (
            <div className="mb-4">
              <div className="text-sm text-gray-400 mb-2">Services:</div>
              <ul className="text-xs text-gray-300 list-disc list-inside">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          )}
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
