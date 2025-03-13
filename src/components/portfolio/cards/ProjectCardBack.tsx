
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { ProjectProps } from './ProjectCard';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import ProjectDetails from '../detail/ProjectDetails';

interface ProjectCardBackProps {
  project: ProjectProps;
  toggleFlip: (e: React.MouseEvent) => void;
}

const ProjectCardBack = ({ project, toggleFlip }: ProjectCardBackProps) => {
  return (
    <div className="relative w-full h-full p-6 flex flex-col">
      {/* Close button */}
      <button
        onClick={toggleFlip}
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-drew-purple/20 flex items-center justify-center hover:bg-drew-purple/40 transition-colors"
      >
        <X size={16} className="text-white" />
      </button>
      
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div>
          <span className="service-chip mb-2">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        </div>
        
        {/* Content */}
        <div className="py-4 flex-grow overflow-y-auto scrollbar-none">
          <p className="text-sm text-gray-300 mb-4">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-xs uppercase text-gray-400 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs bg-black/40 backdrop-blur-sm border border-drew-purple/30 rounded-md text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Services */}
          {project.services && (
            <div className="mb-4">
              <h4 className="text-xs uppercase text-gray-400 mb-2">Services</h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs bg-black/40 backdrop-blur-sm border border-drew-purple/30 rounded-md text-gray-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Client & Date */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.clientName && (
              <div>
                <h4 className="text-xs uppercase text-gray-400 mb-1">Client</h4>
                <p className="text-sm text-white">{project.clientName}</p>
              </div>
            )}
            {project.completionDate && (
              <div>
                <h4 className="text-xs uppercase text-gray-400 mb-1">Completed</h4>
                <p className="text-sm text-white">{project.completionDate}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer with buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="inline-flex items-center justify-center px-4 py-2 bg-drew-purple hover:bg-drew-purple/90 rounded-lg transition-colors text-white text-sm group"
              >
                View Project Details
                <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] bg-drew-black border border-drew-purple/20">
              <DialogTitle className="sr-only">Project Details for {project.title}</DialogTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                    <span className="service-chip">{project.category}</span>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-100">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <ProjectDetails project={project} />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardBack;
