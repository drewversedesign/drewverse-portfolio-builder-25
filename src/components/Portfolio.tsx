
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Star, Users, Award, Zap } from 'lucide-react';
import PortfolioHeader from './portfolio/PortfolioHeader';
import CategoryFilter from './portfolio/CategoryFilter';
import ProjectsGrid from './portfolio/ProjectsGrid';
import ProjectStats from './portfolio/ProjectStats';
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
        
        <div className="text-center mt-16">
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center mx-auto"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
