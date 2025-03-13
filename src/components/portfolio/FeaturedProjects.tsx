
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ProjectProps } from './cards/ProjectCard';

interface FeaturedProjectsProps {
  projects: ProjectProps[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-16"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <div className="flex-grow h-[1px] bg-drew-purple/30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-drew-gray-dark/60 backdrop-blur-sm rounded-xl overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-black/60 rounded-full px-2 py-1 text-xs flex items-center">
                <Star size={12} className="text-amber-400 fill-amber-400 mr-1" />
                <span>4.{5 + index}</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-drew-purple/20 text-drew-purple">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-medium mt-2">{project.title}</h3>
                </div>
                <span className="text-xs text-gray-400">Project #{project.id}</span>
              </div>
              
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
              
              <Link to={project.link} className="inline-flex items-center text-drew-purple text-sm">
                View Project <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
