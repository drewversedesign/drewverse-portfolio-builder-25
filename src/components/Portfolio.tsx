
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PortfolioHeader from './portfolio/PortfolioHeader';
import CategoryFilter from './portfolio/CategoryFilter';
import ProjectsGrid from './portfolio/ProjectsGrid';
import { ProjectProps } from './portfolio/cards/ProjectCard';
import { placeholderImages } from '../utils/imageUtils';

const categories = ['All', 'Web Design', 'Branding', 'Mobile Apps', 'UI/UX'];

const projects: ProjectProps[] = [
  {
    id: 1,
    title: 'Gentl Fashion',
    category: 'Web Design',
    image: placeholderImages.portfolio1,
    description: 'E-commerce platform with custom animations and seamless checkout experience',
    link: '/portfolio/gentl-fashion'
  },
  {
    id: 2,
    title: 'Everneed AI',
    category: 'UI/UX',
    image: placeholderImages.portfolio2,
    description: 'AI-powered content creation platform with intuitive user interface',
    link: '/portfolio/everneed-ai'
  },
  {
    id: 3,
    title: 'TechStream',
    category: 'Branding',
    image: placeholderImages.portfolio3,
    description: 'Complete brand identity for a tech startup, including logo and style guide',
    link: '/portfolio/techstream'
  },
  {
    id: 4,
    title: 'Wellness App',
    category: 'Mobile Apps',
    image: placeholderImages.portfolio4,
    description: 'Health tracking mobile application with clean design and intuitive UX',
    link: '/portfolio/wellness-app'
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
        
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        <ProjectsGrid 
          projects={filteredProjects}
          hoveredProject={hoveredProject}
          setHoveredProject={setHoveredProject}
        />
        
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
