
import { motion } from 'framer-motion';
import { User, Calendar, Tag, Clock, ExternalLink } from 'lucide-react';
import { ProjectProps } from '../cards/ProjectCard';

interface ProjectDetailsProps {
  project: ProjectProps;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-drew-gray-dark/60 backdrop-blur-sm rounded-xl p-6"
    >
      <h3 className="text-xl font-medium mb-6">Project Details</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <User size={20} className="text-drew-purple mt-1 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Client</p>
            <p className="font-medium">{project.clientName}</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Calendar size={20} className="text-drew-purple mt-1 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Completion Date</p>
            <p className="font-medium">{project.completionDate}</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Tag size={20} className="text-drew-purple mt-1 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Category</p>
            <p className="font-medium">{project.category}</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock size={20} className="text-drew-purple mt-1 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Project ID</p>
            <p className="font-medium">#{project.id}</p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/10">
          <h4 className="font-medium mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-black/30 rounded-md text-xs border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-drew-purple hover:bg-drew-purple/90 rounded-lg transition-colors mt-4 w-full justify-center"
          >
            View Live Project
            <ExternalLink size={16} className="ml-2" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
