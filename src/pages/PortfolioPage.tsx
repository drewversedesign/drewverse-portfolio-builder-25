
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryFilter from '../components/portfolio/CategoryFilter';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import PortfolioMasonryGrid from '../components/portfolio/PortfolioMasonryGrid';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';
import FeaturedProjects from '../components/portfolio/FeaturedProjects';
import { projectsData, portfolioCategories } from '../data/portfolioData';
import { toast } from 'sonner';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "az" | "za">("newest");
  const [isLoading, setIsLoading] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  // Get the unique categories as sort of "subcategories" to showcase
  const subcategories = [...new Set(projectsData.map(project => project.category))];
  
  // Filter projects based on activeCategory and search query
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      let results = projectsData;
      
      // Filter by category
      if (activeCategory !== "All") {
        results = results.filter(project => project.category === activeCategory);
      }
      
      // Filter by search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        results = results.filter(
          project => 
            project.title.toLowerCase().includes(query) || 
            project.description.toLowerCase().includes(query) ||
            project.category.toLowerCase().includes(query)
        );
      }
      
      // Sort results
      switch (sortBy) {
        case "newest":
          results = [...results].sort((a, b) => b.id - a.id);
          break;
        case "oldest":
          results = [...results].sort((a, b) => a.id - b.id);
          break;
        case "az":
          results = [...results].sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "za":
          results = [...results].sort((a, b) => b.title.localeCompare(a.title));
          break;
      }
      
      setFilteredProjects(results);
      setIsLoading(false);
      
      // Show toast when filters are applied
      if (activeCategory !== "All" || searchQuery.trim() !== "") {
        toast.info(`Showing ${results.length} project${results.length !== 1 ? 's' : ''}`, {
          description: `${activeCategory !== "All" ? `Category: ${activeCategory}` : ''}${searchQuery ? ` Search: "${searchQuery}"` : ''}`,
          duration: 3000,
        });
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (window.innerWidth < 768) {
      window.scrollTo({
        top: document.getElementById('portfolio-grid')?.offsetTop || 0,
        behavior: 'smooth'
      });
    }
  };

  const handleReset = () => {
    setActiveCategory("All");
    setSearchQuery("");
    setSortBy("newest");
    toast.success("Filters have been reset", {
      description: "Showing all projects",
      duration: 3000,
    });
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <PortfolioHeader
            title="Portfolio Showcase"
            subtitle="Our Work"
            description="Explore our complete collection of projects that demonstrate our expertise
            in design, development, and digital innovation."
          />
          
          {/* Featured Project Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {subcategories.slice(0, 4).map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <div className="w-full h-32 bg-drew-gray-dark overflow-hidden">
                  <motion.img 
                    src={projectsData.find(p => p.category === category)?.image || '/placeholder.svg'} 
                    alt={category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="text-white font-medium">{category}</h3>
                  <p className="text-xs text-gray-300">
                    {projectsData.filter(p => p.category === category).length} projects
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Search and filter controls */}
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
          </div>
          
          {/* Featured Projects Section */}
          {activeCategory === "All" && searchQuery === "" && filteredProjects.length > 5 && (
            <FeaturedProjects projects={projectsData.slice(0, 3)} />
          )}
        </div>
        
        <PortfolioCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
