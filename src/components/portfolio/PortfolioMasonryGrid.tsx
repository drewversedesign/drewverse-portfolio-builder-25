
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './cards/ProjectCard';
import { ProjectProps } from './cards/ProjectCard';

interface PortfolioMasonryGridProps {
  projects: ProjectProps[];
}

const PortfolioMasonryGrid = ({ projects }: PortfolioMasonryGridProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="masonry-grid"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="masonry-item mb-6"
        >
          <ProjectCard
            project={project}
            isHovered={hoveredProject === project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PortfolioMasonryGrid;
