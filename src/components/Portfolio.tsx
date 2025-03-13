
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Zap, Star, Users, Award } from 'lucide-react';
import PortfolioHeader from './portfolio/PortfolioHeader';
import CategoryFilter from './portfolio/CategoryFilter';
import ProjectsGrid from './portfolio/ProjectsGrid';
import ProjectStats from './portfolio/ProjectStats';
import ClientReviews from './portfolio/masonry/ClientReviews';
import ProjectCallToAction from './portfolio/masonry/ProjectCallToAction';
import { projectsData, portfolioCategories } from '../data/portfolioData';
import { toast } from 'sonner';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, displayCount);
  const hasMoreProjects = visibleProjects.length < filteredProjects.length;

  // Calculate project statistics
  const totalProjects = projectsData.length;
  const uniqueCategories = [...new Set(projectsData.map(p => p.category))].length;
  const featuredProjects = projectsData.filter(p => p.id <= 5).length;

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount(prev => Math.min(prev + 2, filteredProjects.length));
      setIsLoading(false);
      
      if (displayCount + 2 >= filteredProjects.length) {
        toast.success("All projects loaded", {
          description: "You've reached the end of the project list",
          duration: 3000,
        });
      } else {
        toast.info("Loading more projects", {
          description: `Showing ${Math.min(displayCount + 2, filteredProjects.length)} of ${filteredProjects.length} projects`,
          duration: 2000,
        });
      }
    }, 500);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setDisplayCount(4); // Reset display count when changing categories
    
    toast.info(`Category: ${category}`, {
      description: category === 'All' 
        ? "Showing all projects" 
        : `Showing ${projectsData.filter(p => p.category === category).length} projects in this category`,
      duration: 2000,
    });
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-drew-purple/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <PortfolioHeader 
          title="Selected Projects"
          subtitle="Our Work"
          description="Explore our portfolio of successful projects that showcase our expertise
          and creative approach to digital challenges."
        />
        
        {/* Project Statistics */}
        <div className="mb-10">
          <ProjectStats 
            stats={[
              { icon: <Zap size={24} className="text-drew-purple" />, value: totalProjects, label: "Total Projects" },
              { icon: <Star size={24} className="text-amber-500" />, value: uniqueCategories, label: "Categories" },
              { icon: <Users size={24} className="text-blue-500" />, value: "98%", label: "Client Satisfaction" },
              { icon: <Award size={24} className="text-rose-500" />, value: featuredProjects, label: "Featured Work" },
            ]}
          />
        </div>
        
        <CategoryFilter 
          categories={portfolioCategories}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
        />
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-drew-purple"></div>
          </div>
        ) : (
          <ProjectsGrid 
            projects={visibleProjects}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
          />
        )}

        {/* Client Reviews Section */}
        <ClientReviews />

        {hasMoreProjects && (
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-drew-black border border-drew-purple/50 hover:border-drew-purple text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 flex items-center mx-auto"
              onClick={loadMore}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-drew-purple mr-2"></div>
              ) : (
                <Plus size={16} className="mr-2 text-drew-purple" />
              )}
              Load More Projects
            </motion.button>
          </div>
        )}
        
        <ProjectCallToAction />
      </div>
    </section>
  );
}
