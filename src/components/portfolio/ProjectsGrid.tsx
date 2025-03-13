
import { AnimatePresence } from 'framer-motion';
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
      <AnimatePresence mode="wait">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={hoveredProject === project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsGrid;
