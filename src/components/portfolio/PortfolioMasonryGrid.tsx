
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './cards/ProjectCard';
import { ProjectProps } from './cards/ProjectCard';
import ProjectStats from './ProjectStats';
import { Zap, Star, Users, Award } from 'lucide-react';

interface PortfolioMasonryGridProps {
  projects: ProjectProps[];
}

const PortfolioMasonryGrid = ({ projects }: PortfolioMasonryGridProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  // Calculate project statistics
  const totalProjects = projects.length;
  const uniqueCategories = [...new Set(projects.map(p => p.category))].length;
  const featuredProjects = projects.filter(p => p.id <= 5).length;

  return (
    <div className="space-y-12">
      {/* Project Statistics */}
      <ProjectStats 
        stats={[
          { icon: <Zap size={24} className="text-drew-purple" />, value: totalProjects, label: "Total Projects" },
          { icon: <Star size={24} className="text-amber-500" />, value: uniqueCategories, label: "Categories" },
          { icon: <Users size={24} className="text-blue-500" />, value: "98%", label: "Client Satisfaction" },
          { icon: <Award size={24} className="text-rose-500" />, value: featuredProjects, label: "Featured Work" },
        ]}
      />
      
      {/* Projects Grid */}
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
      
      {/* Project Testimonials & Reviews */}
      <div className="my-12 bg-drew-gray-dark/60 backdrop-blur-sm rounded-xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Client Reviews</h3>
          <div className="flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={16} 
                  className={star <= 4.7 ? "text-amber-400 fill-amber-400" : "text-gray-500"} 
                />
              ))}
            </div>
            <span className="ml-2 text-amber-400 font-medium">4.7</span>
            <span className="ml-1 text-gray-400 text-sm">(128 reviews)</span>
          </div>
        </div>
        
        <blockquote className="italic text-gray-300 border-l-4 border-drew-purple pl-4">
          "The team delivered exceptional work that exceeded our expectations. Their attention to detail and creative approach helped our e-commerce site stand out from competitors."
          <footer className="mt-2 text-sm text-gray-400">
            — James Wilson, CEO at Techmart
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default PortfolioMasonryGrid;
