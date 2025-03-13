
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Tag, Calendar, User, CheckSquare } from 'lucide-react';
import { ProjectProps } from './ProjectCard';

interface ProjectCardBackProps {
  project: ProjectProps;
  toggleFlip: (e: React.MouseEvent) => void;
}

const ProjectCardBack = ({ project, toggleFlip }: ProjectCardBackProps) => {
  // Extract the project ID from the link
  const projectSlug = project.link.split('/').pop();
  
  return (
    <div className="relative h-full flex flex-col">
      <button 
        onClick={toggleFlip}
        className="absolute top-0 right-0 bg-drew-gray-dark/80 rounded-full p-1 hover:bg-drew-gray-dark"
      >
        <ArrowLeft size={16} />
      </button>
      
      <div className="space-y-4 h-full flex flex-col">
        <div>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-drew-purple/20 text-drew-purple">
            {project.category}
          </span>
          <h3 className="text-lg font-bold mt-2">{project.title}</h3>
        </div>
        
        <div className="flex-grow space-y-4">
          {/* Client */}
          <div className="flex items-center">
            <User size={16} className="text-drew-purple mr-2" />
            <span className="text-sm text-gray-400">Client: </span>
            <span className="text-sm ml-1">{project.clientName || 'Confidential'}</span>
          </div>
          
          {/* Completion Date */}
          <div className="flex items-center">
            <Calendar size={16} className="text-drew-purple mr-2" />
            <span className="text-sm text-gray-400">Completed: </span>
            <span className="text-sm ml-1">{project.completionDate || 'Ongoing'}</span>
          </div>
          
          {/* Technologies */}
          <div>
            <div className="flex items-center mb-2">
              <Tag size={16} className="text-drew-purple mr-2" />
              <span className="text-sm text-gray-400">Technologies:</span>
            </div>
            <div className="flex flex-wrap gap-1 ml-6">
              {project.technologies?.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-drew-black/30 rounded-md text-xs border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <div className="flex items-center mb-2">
              <CheckSquare size={16} className="text-drew-purple mr-2" />
              <span className="text-sm text-gray-400">Services:</span>
            </div>
            <div className="flex flex-wrap gap-1 ml-6">
              {project.services?.map((service, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-drew-black/30 rounded-md text-xs border border-white/5"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <Link 
          to={`/portfolio/${projectSlug}`}
          className="w-full px-4 py-2 bg-drew-purple hover:bg-drew-purple/90 text-white text-sm rounded-lg transition-colors mt-auto flex justify-center items-center"
        >
          View Full Case Study
        </Link>
      </div>
    </div>
  );
};

export default ProjectCardBack;
