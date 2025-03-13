
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { placeholderImages } from '../utils/imageUtils';
import { Card, CardContent } from '../components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../components/ui/carousel';

// Portfolio project data
const portfolioProjects = [
  {
    id: 1,
    title: 'Modern E-Commerce Platform',
    category: 'Web Design',
    image: placeholderImages.portfolio1,
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    year: '2023'
  },
  {
    id: 2,
    title: 'AI Data Visualization Dashboard',
    category: 'UI/UX Design',
    image: placeholderImages.portfolio2,
    tags: ['Figma', 'React', 'D3.js'],
    year: '2023'
  },
  {
    id: 3,
    title: 'Financial Services Website',
    category: 'Web Development',
    image: placeholderImages.portfolio3,
    tags: ['TypeScript', 'React', 'Node.js'],
    year: '2022'
  },
  {
    id: 4,
    title: 'Health & Wellness Mobile App',
    category: 'Mobile App',
    image: placeholderImages.portfolio4,
    tags: ['React Native', 'Firebase'],
    year: '2023'
  },
  {
    id: 5,
    title: 'Corporate Branding & Identity',
    category: 'Branding',
    image: placeholderImages.portfolio5,
    tags: ['Brand Strategy', 'Logo Design'],
    year: '2022'
  },
  {
    id: 6,
    title: 'Real Estate Property Listings',
    category: 'Web Development',
    image: placeholderImages.portfolio6,
    tags: ['React', 'Google Maps API'],
    year: '2023'
  },
  {
    id: 7,
    title: 'Sustainable Energy Company',
    category: 'Web Design',
    image: placeholderImages.portfolio7,
    tags: ['WordPress', 'Custom Theme'],
    year: '2022'
  },
  {
    id: 8,
    title: 'Travel & Adventure Blog',
    category: 'Web Development',
    image: placeholderImages.portfolio8,
    tags: ['JAMstack', 'Gatsby', 'Netlify'],
    year: '2023'
  },
  {
    id: 9,
    title: 'Construction Industry Platform',
    category: 'UI/UX Design',
    image: placeholderImages.portfolio9,
    tags: ['Figma', 'Prototyping'],
    year: '2023'
  },
  {
    id: 10,
    title: 'Beauty & Wellness Brand',
    category: 'Branding',
    image: placeholderImages.portfolio10,
    tags: ['Brand Identity', 'Packaging'],
    year: '2022'
  }
];

// Categories for filtering
const categories = ['All', 'Web Design', 'UI/UX Design', 'Branding', 'Web Development', 'Mobile App'];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Filter projects based on active category
    if (activeCategory === 'All') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === activeCategory));
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
          
          {/* Featured Project Carousel */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 inline-flex items-center">
              <span className="text-gradient mr-2">Featured</span> Projects
              <div className="w-2 h-2 bg-drew-purple rounded-full ml-2 animate-pulse"></div>
            </h2>
            
            <Carousel className="w-full">
              <CarouselContent>
                {portfolioProjects.slice(0, 4).map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-none">
                      <CardContent className="p-0">
                        <div className="glass-card rounded-xl overflow-hidden h-[400px] group">
                          <div className="relative h-full">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                              <span className="service-chip mb-2">{project.category}</span>
                              <h3 className="text-xl font-bold">{project.title}</h3>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {project.tags.map((tag, index) => (
                                  <span key={index} className="text-xs bg-drew-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link to={`/portfolio/${project.id}`} className="inline-flex items-center text-drew-purple story-link">
                                  View Project <ArrowRight size={16} className="ml-1" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-drew-purple/20 border-drew-purple/50 text-white hover:bg-drew-purple/40 -left-4" />
              <CarouselNext className="bg-drew-purple/20 border-drew-purple/50 text-white hover:bg-drew-purple/40 -right-4" />
            </Carousel>
          </div>
          
          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <div className="flex items-center justify-center mb-8">
              <Filter size={18} className="mr-2 text-drew-purple" />
              <h2 className="text-xl font-bold">Filter by Category</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-drew-purple text-white' 
                      : 'bg-drew-gray-dark hover:bg-drew-purple/20 text-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card rounded-xl overflow-hidden h-[350px] group"
              >
                <div className="relative h-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                    <div className="flex justify-between items-start mb-2">
                      <span className="service-chip">{project.category}</span>
                      <span className="bg-drew-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-drew-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={`/portfolio/${project.id}`} className="inline-flex items-center text-drew-purple story-link">
                        View Details <ArrowRight size={16} className="ml-1" />
                      </Link>
                      <a href="#" className="text-gray-400 hover:text-white">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Empty State for No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 mb-4">No projects found in this category.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
        
        {/* Call to Action */}
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
