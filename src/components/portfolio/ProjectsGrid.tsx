
import { motion } from 'framer-motion';
import ProjectCard from './cards/ProjectCard';
import { ProjectProps } from './cards/ProjectCard';

interface ProjectsGridProps {
  projects: ProjectProps[];
  hoveredProject: number | null;
  setHoveredProject: (id: number | null) => void;
}

const ProjectsGrid = ({ projects, hoveredProject, setHoveredProject }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectCard
            project={project}
            isHovered={hoveredProject === project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
