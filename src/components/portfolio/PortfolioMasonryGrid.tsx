
import { motion } from 'framer-motion';
import { ProjectProps } from './cards/ProjectCard';
import MasonryProjectsGrid from './masonry/MasonryProjectsGrid';
import DesignProcess from './masonry/DesignProcess';
import ProjectMetrics from './masonry/ProjectMetrics';
import ClientReviews from './masonry/ClientReviews';
import ProjectCallToAction from './masonry/ProjectCallToAction';

interface PortfolioMasonryGridProps {
  projects: ProjectProps[];
}

const PortfolioMasonryGrid = ({ projects }: PortfolioMasonryGridProps) => {
  return (
    <div className="space-y-16">
      {/* Projects Grid */}
      <MasonryProjectsGrid projects={projects} />
      
      {/* Project Workflow Process */}
      <DesignProcess />
      
      {/* Project Testimonials & Reviews */}
      <ClientReviews />
      
      {/* Project Metrics Dashboard */}
      <ProjectMetrics />
      
      {/* Call To Action */}
      <ProjectCallToAction />
    </div>
  );
};

export default PortfolioMasonryGrid;
