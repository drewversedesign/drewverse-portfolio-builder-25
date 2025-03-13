
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryFilter from '../components/portfolio/CategoryFilter';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import PortfolioMasonryGrid from '../components/portfolio/PortfolioMasonryGrid';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';
import { projectsData, portfolioCategories } from '../data/portfolioData';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (activeCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

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
          
          <CategoryFilter 
            categories={portfolioCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <PortfolioMasonryGrid projects={filteredProjects} />
        </div>
        
        <PortfolioCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
