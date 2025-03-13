
import { motion } from 'framer-motion';
import { Zap, Star, Users, Award } from 'lucide-react';
import ProjectStats from './ProjectStats';
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
  // Calculate project statistics
  const totalProjects = projects.length;
  const uniqueCategories = [...new Set(projects.map(p => p.category))].length;
  const featuredProjects = projects.filter(p => p.id <= 5).length;

  return (
    <div className="space-y-16">
      {/* Project Statistics */}
      <ProjectStats 
        stats={[
          {
            icon: <Zap size={24} className="text-drew-purple" />,
            value: totalProjects,
            label: "Total Projects"
          }, 
          {
            icon: <Star size={24} className="text-amber-500" />,
            value: uniqueCategories,
            label: "Categories"
          }, 
          {
            icon: <Users size={24} className="text-blue-500" />,
            value: "98%",
            label: "Client Satisfaction"
          }, 
          {
            icon: <Award size={24} className="text-rose-500" />,
            value: featuredProjects,
            label: "Featured Work"
          }
        ]} 
      />
      
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
