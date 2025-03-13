
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { placeholderImages } from '../utils/imageUtils';
import ProjectCard from '../components/portfolio/cards/ProjectCard';

// Portfolio data
const projectsData = [
  {
    id: 1,
    title: "Modern Tech Dashboard",
    category: "Web Development",
    image: placeholderImages.portfolio1,
    description: "A comprehensive dashboard with real-time data visualization and interactive analytics.",
    link: "/portfolio/modern-tech-dashboard"
  },
  {
    id: 2,
    title: "Circuit Board Design",
    category: "Hardware",
    image: placeholderImages.portfolio2,
    description: "Custom circuit board design for IoT devices with advanced sensor integration.",
    link: "/portfolio/circuit-board-design"
  },
  {
    id: 3,
    title: "Code Documentation System",
    category: "Software",
    image: placeholderImages.portfolio3,
    description: "Automated code documentation tool that analyzes code structure and generates comprehensive docs.",
    link: "/portfolio/code-documentation-system"
  },
  {
    id: 4,
    title: "Cloud Migration Strategy",
    category: "Cloud Services",
    image: placeholderImages.portfolio4,
    description: "Enterprise-level cloud migration strategy and implementation for a Fortune 500 company.",
    link: "/portfolio/cloud-migration-strategy"
  },
  {
    id: 5,
    title: "Data Analytics Platform",
    category: "Data Science",
    image: placeholderImages.portfolio5,
    description: "End-to-end data analytics platform with machine learning capabilities and predictive modeling.",
    link: "/portfolio/data-analytics-platform"
  },
  {
    id: 6,
    title: "IoT Smart Home System",
    category: "Hardware",
    image: placeholderImages.portfolio6,
    description: "Integrated smart home system with custom hardware and software for automated living spaces.",
    link: "/portfolio/iot-smart-home"
  },
  {
    id: 7,
    title: "Collaborative Team Platform",
    category: "Web Development",
    image: placeholderImages.portfolio7,
    description: "Real-time collaboration platform for remote teams with integrated project management tools.",
    link: "/portfolio/collaborative-team-platform"
  },
  {
    id: 8,
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: placeholderImages.portfolio8,
    description: "Secure and user-friendly mobile banking application with advanced transaction features.",
    link: "/portfolio/mobile-banking-app"
  },
  {
    id: 9,
    title: "Corporate Training Program",
    category: "Education",
    image: placeholderImages.portfolio9,
    description: "Customized corporate training program with interactive learning modules and progress tracking.",
    link: "/portfolio/corporate-training-program"
  },
  {
    id: 10,
    title: "Cybersecurity Framework",
    category: "Security",
    image: placeholderImages.portfolio10,
    description: "Comprehensive cybersecurity framework with threat detection and prevention protocols.",
    link: "/portfolio/cybersecurity-framework"
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
