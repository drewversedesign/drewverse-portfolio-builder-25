
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Tag, Calendar, User, CheckSquare, ExternalLink } from 'lucide-react';
import { ProjectProps } from './ProjectCard';

interface ProjectCardBackProps {
  project: ProjectProps;
  toggleFlip: (e: React.MouseEvent) => void;
}

const ProjectCardBack = ({ project, toggleFlip }: ProjectCardBackProps) => {
  // Extract the project slug from the link
  const projectSlug = project.link.split('/').pop();
  
  return (
    <div className="relative h-full flex flex-col p-6">
      <button 
        onClick={toggleFlip}
        className="absolute top-4 right-4 bg-drew-gray-dark/80 rounded-full p-1.5 hover:bg-drew-gray-dark z-10"
      >
        <ArrowLeft size={16} />
      </button>
      
      <div className="space-y-5 h-full flex flex-col">
        <div>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-drew-purple/20 text-drew-purple">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mt-3 mb-1">{project.title}</h3>
          
          {/* Project description */}
          <p className="text-sm text-gray-300 line-clamp-3 mb-4">{project.description}</p>
        </div>
        
        <div className="flex-grow space-y-5">
          {/* Client */}
          <div className="flex items-start">
            <User size={18} className="text-drew-purple mr-3 mt-0.5" />
            <div>
              <p className="text-xs text-gray-400 mb-1">Client</p>
              <p className="text-sm font-medium">{project.clientName || 'Confidential'}</p>
            </div>
          </div>
          
          {/* Completion Date */}
          <div className="flex items-start">
            <Calendar size={18} className="text-drew-purple mr-3 mt-0.5" />
            <div>
              <p className="text-xs text-gray-400 mb-1">Completion Date</p>
              <p className="text-sm font-medium">{project.completionDate || 'Ongoing'}</p>
            </div>
          </div>
          
          {/* Technologies */}
          <div>
            <div className="flex items-center mb-2">
              <Tag size={18} className="text-drew-purple mr-2" />
              <p className="text-xs text-gray-400">Technologies</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies?.map((tech, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }} 
                  className="px-2 py-1 bg-drew-black/50 rounded-md text-xs border border-white/10 hover:border-drew-purple/30 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <div className="flex items-center mb-2">
              <CheckSquare size={18} className="text-drew-purple mr-2" />
              <p className="text-xs text-gray-400">Services</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.services?.map((service, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="px-2 py-1 bg-drew-black/50 rounded-md text-xs border border-white/10 hover:border-drew-purple/30 transition-colors"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link 
            to={`/portfolio/${projectSlug}`}
            className="px-4 py-2 bg-drew-purple hover:bg-drew-purple/90 text-white text-sm rounded-lg transition-colors flex justify-center items-center"
          >
            View Details
          </Link>
          
          {project.link.startsWith('http') ? (
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black/30 border border-white/10 hover:border-drew-purple/30 text-white text-sm rounded-lg transition-colors flex justify-center items-center"
            >
              Live Preview
              <ExternalLink size={14} className="ml-2" />
            </a>
          ) : (
            <button 
              onClick={toggleFlip}
              className="px-4 py-2 bg-black/30 border border-white/10 hover:border-drew-purple/30 text-white text-sm rounded-lg transition-colors flex justify-center items-center"
            >
              Close Details
              <ArrowLeft size={14} className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardBack;
