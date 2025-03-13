
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';
import CategoryGrid from '../components/portfolio/CategoryGrid';
import PortfolioSearch from '../components/portfolio/search/PortfolioSearch';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import { projectsData, portfolioCategories } from '../data/portfolioData';

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
          <CategoryGrid 
            categories={subcategories}
            projects={projectsData}
            handleCategoryClick={handleCategoryClick}
          />
          
          {/* Search and filter controls */}
          <PortfolioSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            portfolioCategories={portfolioCategories}
            filtersVisible={filtersVisible}
            toggleFilters={toggleFilters}
          />
          
          {/* Portfolio Grid */}
          <PortfolioGrid
            isLoading={isLoading}
            filteredProjects={filteredProjects}
            allProjects={projectsData}
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            handleReset={handleReset}
          />
        </div>
        
        <PortfolioCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
