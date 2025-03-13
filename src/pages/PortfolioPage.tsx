
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/portfolio/cards/ProjectCard';

// Portfolio data with the new website designs
const projectsData = [
  {
    id: 1,
    title: "Tattoo Studio Website",
    category: "Web Design",
    image: "/lovable-uploads/7f1bdb8b-9567-4035-b245-46cef0683176.png",
    description: "Complete website for a professional tattoo studio with portfolio and booking functionality.",
    link: "/portfolio/tattoo-studio"
  },
  {
    id: 2,
    title: "City Government Portal",
    category: "Public Sector",
    image: "/lovable-uploads/22a1af60-9b45-47af-883b-1741939ce285.png",
    description: "Municipal website with citizen services, events calendar, and city information portal.",
    link: "/portfolio/city-portal"
  },
  {
    id: 3,
    title: "Creative Portfolio",
    category: "UI/UX Design",
    image: "/lovable-uploads/1f3b9f2c-9bf4-49eb-8512-827343264840.png",
    description: "Personal portfolio website for a UI/UX designer with interactive elements and skill showcase.",
    link: "/portfolio/creative-portfolio"
  },
  {
    id: 4,
    title: "Furniture Collection",
    category: "E-commerce",
    image: "/lovable-uploads/25e54975-9718-4b57-a5c5-e13af9e13277.png",
    description: "Minimalist e-commerce site for a modern furniture brand with unique product visualization.",
    link: "/portfolio/furniture-collection"
  },
  {
    id: 5,
    title: "Charity Organization",
    category: "Non-profit",
    image: "/lovable-uploads/9ca6c79d-0038-44cb-84a8-826f90f37710.png",
    description: "Global aid network website featuring donation campaigns and community programs.",
    link: "/portfolio/charity-website"
  },
  {
    id: 6,
    title: "Professional Portfolio",
    category: "UI/UX Design",
    image: "/lovable-uploads/f30ebe5b-ddbb-48e6-bb0e-c815ab1635d2.png",
    description: "Portfolio website for a product designer with service offerings and experience timeline.",
    link: "/portfolio/product-designer"
  },
  {
    id: 7,
    title: "Electronics Store",
    category: "E-commerce",
    image: "/lovable-uploads/6f5c0670-0645-4624-a474-e26ed3215cac.png",
    description: "Feature-rich electronics e-commerce platform with product categories and promotions.",
    link: "/portfolio/electronics-store"
  },
  {
    id: 8,
    title: "Cooking School",
    category: "Education",
    image: "/lovable-uploads/18f77782-e5a0-4601-ba99-28b71b8b90d2.png",
    description: "Culinary education platform featuring courses from professional chefs and interactive lessons.",
    link: "/portfolio/cooking-school"
  },
  {
    id: 9,
    title: "Gaming Shop",
    category: "E-commerce",
    image: "/lovable-uploads/9af1d2e5-2854-4fe7-b508-fa1014aad445.png",
    description: "Online store for gaming equipment and accessories with dark-themed UI.",
    link: "/portfolio/gaming-shop"
  },
  {
    id: 10,
    title: "Tech Gaming Mouse",
    category: "Product Landing",
    image: "/lovable-uploads/edca2eed-3274-4bfe-aa83-12bbfd3c3ab5.png",
    description: "Product showcase website for a high-performance gaming mouse with sleek dark UI.",
    link: "/portfolio/gaming-mouse"
  },
  {
    id: 11,
    title: "Furniture Store",
    category: "E-commerce",
    image: "/lovable-uploads/b006bad2-6f67-47eb-9ae8-bb08d76318dc.png",
    description: "E-commerce website for home furniture with elegant design and product categories.",
    link: "/portfolio/furniture-store"
  },
  {
    id: 12,
    title: "Interior Design",
    category: "E-commerce",
    image: "/lovable-uploads/a6e93d81-3c17-4c07-9759-2f50d8a8c017.png",
    description: "Modern furniture and interior design shop with product collections and room showcases.",
    link: "/portfolio/interior-design"
  },
  {
    id: 13,
    title: "Electronics Shop",
    category: "E-commerce",
    image: "/lovable-uploads/4d42eb80-8f61-4dbc-97bc-88b575973920.png",
    description: "Consumer electronics online store featuring headphones and audio equipment.",
    link: "/portfolio/electronics-shop"
  },
  {
    id: 14,
    title: "Tech Headphones",
    category: "Product Landing",
    image: "/lovable-uploads/5c71d99b-1290-407e-8903-2fc8ef94ff52.png",
    description: "Premium headphones product landing page with categories and promotional sections.",
    link: "/portfolio/tech-headphones"
  },
  {
    id: 15,
    title: "Social Media Analytics",
    category: "SaaS",
    image: "/lovable-uploads/847901d1-1b4c-4bbb-923a-aee7333a605d.png",
    description: "Social media management dashboard with analytics tools and performance insights.",
    link: "/portfolio/social-analytics"
  },
  {
    id: 16,
    title: "Mobile Store",
    category: "E-commerce",
    image: "/lovable-uploads/63ceb566-c57b-4b50-91cf-a20a8c844625.png",
    description: "Mobile phone and accessories e-commerce site with purple accents and clean design.",
    link: "/portfolio/mobile-store"
  },
  {
    id: 17,
    title: "Wireless Headphones",
    category: "Product Landing",
    image: "/lovable-uploads/cd4a8928-d83b-469f-b461-02944638cb38.png",
    description: "Minimalist product page for wireless headphones with elegant product photography.",
    link: "/portfolio/wireless-headphones"
  },
  {
    id: 18,
    title: "Furniture Marketplace",
    category: "E-commerce",
    image: "/lovable-uploads/cf7289f9-2740-4d85-be2d-c838014cce83.png",
    description: "Clean, modern furniture e-commerce site with categorized collections and special offers.",
    link: "/portfolio/furniture-marketplace"
  }
];

// Get unique categories from project data
const categories = ["All", ...new Set(projectsData.map(project => project.category))];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="service-chip">Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              <span className="text-gradient">Portfolio</span> Showcase
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Explore our complete collection of projects that demonstrate our expertise
              in design, development, and digital innovation.
            </p>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-drew-purple text-white' 
                    : 'bg-drew-gray-dark hover:bg-drew-purple/20 text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          {/* Pinterest-style Masonry Layout */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="masonry-grid"
          >
            {filteredProjects.map((project) => (
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
        </div>
        
        <div className="container mx-auto px-4 md:px-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We're ready to transform your ideas into reality. Let's collaborate and create something amazing together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center mx-auto"
              >
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
