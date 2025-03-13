
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ProjectProps } from '../cards/ProjectCard';

interface ProjectHeaderProps {
  project: ProjectProps;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <>
      <Link 
        to="/portfolio" 
        className="inline-flex items-center text-gray-400 hover:text-drew-purple mb-8 transition-colors duration-300"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Portfolio
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="service-chip">{project.category}</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          <span className="text-gradient">{project.title}</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          {project.description}
        </p>
      </motion.div>
      
      {/* Project Hero Image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl overflow-hidden mb-12 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-drew-black/80 via-transparent to-transparent z-10 opacity-70"></div>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full object-cover h-[500px]"
        />
      </motion.div>
    </>
  );
};

export default ProjectHeader;
