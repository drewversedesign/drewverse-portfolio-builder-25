
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectProps } from '../cards/ProjectCard';

interface RelatedProjectsProps {
  projects: ProjectProps[];
}

const RelatedProjects = ({ projects }: RelatedProjectsProps) => {
  if (projects.length === 0) return null;
  
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((relatedProject) => (
          <motion.div
            key={relatedProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-drew-gray-dark/60 backdrop-blur-sm rounded-xl overflow-hidden group"
          >
            <Link to={relatedProject.link}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={relatedProject.image} 
                  alt={relatedProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-4">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-drew-purple/20 text-drew-purple">
                  {relatedProject.category}
                </span>
                <h3 className="text-lg font-medium mt-2">{relatedProject.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2 mt-1">{relatedProject.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
