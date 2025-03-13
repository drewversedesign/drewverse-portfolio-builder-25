
import { Search, ChevronDown, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import CategoryFilter from '../CategoryFilter';

interface PortfolioSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: "newest" | "oldest" | "az" | "za";
  setSortBy: (sort: "newest" | "oldest" | "az" | "za") => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  portfolioCategories: string[];
  filtersVisible: boolean;
  toggleFilters: () => void;
}

const PortfolioSearch = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  activeCategory,
  setActiveCategory,
  portfolioCategories,
  filtersVisible,
  toggleFilters
}: PortfolioSearchProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-drew-gray-dark rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-drew-purple"
          />
        </div>
        
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "newest" | "oldest" | "az" | "za")}
            className="appearance-none bg-drew-gray-dark rounded-lg py-2 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-drew-purple"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
          <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        
        <button 
          onClick={toggleFilters} 
          className="md:hidden bg-drew-purple rounded-lg py-2 px-4 flex items-center justify-center"
        >
          <Filter size={18} className="mr-2" /> Filters
        </button>
      </div>
      
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: filtersVisible ? 'auto' : 0,
          opacity: filtersVisible ? 1 : 0
        }}
        className="md:hidden overflow-hidden mb-4"
      >
        <CategoryFilter 
          categories={portfolioCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </motion.div>
      
      <div className="hidden md:block">
        <CategoryFilter 
          categories={portfolioCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </>
  );
};

export default PortfolioSearch;
