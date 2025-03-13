
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProjectCard from '../cards/ProjectCard';
import { ProjectProps } from '../cards/ProjectCard';

interface MasonryProjectsGridProps {
  projects: ProjectProps[];
}

const MasonryProjectsGrid = ({ projects }: MasonryProjectsGridProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<ProjectProps[]>([]);

  // Animate projects entering one by one
  useEffect(() => {
    setVisibleProjects([]);
    const timer = setTimeout(() => {
      const loadProjectsSequentially = async () => {
        for (let i = 0; i < projects.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 100));
          setVisibleProjects(prev => [...prev, projects[i]]);
        }
      };
      loadProjectsSequentially();
    }, 300);
    return () => clearTimeout(timer);
  }, [projects]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5, delay: 0.3 }} 
      className="masonry-grid"
    >
      {visibleProjects.map(project => (
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

export default MasonryProjectsGrid;
