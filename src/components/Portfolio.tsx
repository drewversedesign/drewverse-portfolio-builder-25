
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';
import PortfolioHeader from './portfolio/PortfolioHeader';
import CategoryFilter from './portfolio/CategoryFilter';
import ProjectsGrid from './portfolio/ProjectsGrid';
import { ProjectProps } from './portfolio/cards/ProjectCard';
import { placeholderImages } from '../utils/imageUtils';
import ProjectStats from './portfolio/ProjectStats';
import FeaturedProjects from './portfolio/FeaturedProjects';
import { projectsData } from '../data/portfolioData';

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
  {
    id: 5,
    title: 'Crypto Dashboard',
    category: 'Web Design',
    image: placeholderImages.portfolio2,
    description: 'Real-time cryptocurrency tracking dashboard with advanced data visualization',
    link: '/portfolio/crypto-dashboard'
  },
  {
    id: 6,
    title: 'FutureBank',
    category: 'UI/UX',
    image: placeholderImages.portfolio3,
    description: 'Next-generation banking interface with biometric authentication',
    link: '/portfolio/futurebank'
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(4);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, displayCount);
  const hasMoreProjects = visibleProjects.length < filteredProjects.length;

  // Get the unique categories to showcase
  const subcategories = [...new Set(projects.map(project => project.category))];
  
  // Calculate project statistics for display
  const totalProjects = projects.length;
  const uniqueCategories = subcategories.length;
  const featuredProjects = projects.filter(p => p.id <= 3).length;

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 2, filteredProjects.length));
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
        
        {/* Featured Project Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {subcategories.slice(0, 4).map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
              onClick={() => setActiveCategory(category)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <div className="w-full h-32 bg-drew-gray-dark overflow-hidden">
                <motion.img 
                  src={projects.find(p => p.category === category)?.image || '/placeholder.svg'} 
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4 z-20">
                <h3 className="text-white font-medium">{category}</h3>
                <p className="text-xs text-gray-300">
                  {projects.filter(p => p.category === category).length} projects
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Project Stats Section */}
        <ProjectStats 
          stats={[
            { icon: <ArrowRight size={24} className="text-drew-purple" />, value: totalProjects, label: "Total Projects" },
            { icon: <Star size={24} className="text-amber-500" />, value: uniqueCategories, label: "Categories" },
            { icon: <Users size={24} className="text-blue-500" />, value: "98%", label: "Client Satisfaction" },
            { icon: <Award size={24} className="text-rose-500" />, value: featuredProjects, label: "Featured Work" },
          ]}
        />
        
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        <ProjectsGrid 
          projects={visibleProjects}
          hoveredProject={hoveredProject}
          setHoveredProject={setHoveredProject}
        />

        {hasMoreProjects && (
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-drew-black border border-drew-purple/50 hover:border-drew-purple text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 flex items-center mx-auto"
              onClick={loadMore}
            >
              <Plus size={16} className="mr-2 text-drew-purple" />
              Load More Projects
            </motion.button>
          </div>
        )}
        
        {/* Featured Projects Section */}
        <FeaturedProjects projects={projectsData.slice(0, 3)} />
        
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
