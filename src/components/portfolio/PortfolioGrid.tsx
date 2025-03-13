
import { motion } from 'framer-motion';
import PortfolioMasonryGrid from './PortfolioMasonryGrid';
import FeaturedProjects from './FeaturedProjects';
import { ProjectProps } from './cards/ProjectCard';

interface PortfolioGridProps {
  isLoading: boolean;
  filteredProjects: ProjectProps[];
  allProjects: ProjectProps[];
  activeCategory: string;
  searchQuery: string;
  handleReset: () => void;
}

const PortfolioGrid = ({
  isLoading,
  filteredProjects,
  allProjects,
  activeCategory,
  searchQuery,
  handleReset
}: PortfolioGridProps) => {
  return (
    <div id="portfolio-grid">
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-drew-purple"></div>
        </div>
      ) : filteredProjects.length > 0 ? (
        <PortfolioMasonryGrid projects={filteredProjects} />
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl text-gray-300 mb-4">No projects found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          <button 
            onClick={handleReset}
            className="mt-4 px-4 py-2 bg-drew-purple text-white rounded-lg hover:bg-drew-purple/90 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
      
      {/* Featured Projects Section */}
      {activeCategory === "All" && searchQuery === "" && filteredProjects.length > 5 && (
        <FeaturedProjects projects={allProjects.slice(0, 3)} />
      )}
    </div>
  );
};

export default PortfolioGrid;
