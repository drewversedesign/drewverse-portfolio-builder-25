
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Web Design', 'Branding', 'Mobile Apps', 'UI/UX'];

const projects = [
  {
    id: 1,
    title: 'Gentl Fashion',
    category: 'Web Design',
    image: '/lovable-uploads/c15adf6f-a00b-4c5e-bbe7-58cd9e4f3ccd.png',
    description: 'E-commerce platform with custom animations and seamless checkout experience',
    link: '/portfolio/gentl-fashion'
  },
  {
    id: 2,
    title: 'Everneed AI',
    category: 'UI/UX',
    image: '/lovable-uploads/1f6b0b2c-b6e7-41ff-bed6-566bac9c793c.png',
    description: 'AI-powered content creation platform with intuitive user interface',
    link: '/portfolio/everneed-ai'
  },
  {
    id: 3,
    title: 'TechStream',
    category: 'Branding',
    image: '/lovable-uploads/c1975dfd-5ca5-4ce6-863d-9b881a283e04.png',
    description: 'Complete brand identity for a tech startup, including logo and style guide',
    link: '/portfolio/techstream'
  },
  {
    id: 4,
    title: 'Wellness App',
    category: 'Mobile Apps',
    image: '/lovable-uploads/4c727787-b9ab-4109-a8f0-2728ba907cae.png',
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
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="service-chip"
          >
            Our Work
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-4"
          >
            Selected <span className="text-gradient">Projects</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Explore our portfolio of successful projects that showcase our expertise
            and creative approach to digital challenges.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative rounded-xl overflow-hidden group h-[400px]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-300 group-hover:translate-y-0">
                    <span className="service-chip mb-3">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-6 max-w-md">{project.description}</p>
                    
                    <Link to={project.link} className="inline-flex items-center text-drew-purple story-link">
                      View Project <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
                
                {/* Hover animation elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-drew-purple flex items-center justify-center"
                  animate={{ 
                    scale: hoveredProject === project.id ? [1, 1.1, 1] : 1 
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: hoveredProject === project.id ? Infinity : 0, 
                    repeatType: "reverse" 
                  }}
                >
                  <span className="text-white font-medium">{project.id}</span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
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
