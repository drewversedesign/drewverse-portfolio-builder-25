import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProjectCard from './cards/ProjectCard';
import { ProjectProps } from './cards/ProjectCard';
import ProjectStats from './ProjectStats';
import { Zap, Star, Users, Award, CheckCircle, BarChart3, Briefcase, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
interface PortfolioMasonryGridProps {
  projects: ProjectProps[];
}
const PortfolioMasonryGrid = ({
  projects
}: PortfolioMasonryGridProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<ProjectProps[]>([]);

  // Calculate project statistics
  const totalProjects = projects.length;
  const uniqueCategories = [...new Set(projects.map(p => p.category))].length;
  const featuredProjects = projects.filter(p => p.id <= 5).length;

  // Animate projects entering one by one
  useEffect(() => {
    setVisibleProjects([]);
    const timer = setTimeout(() => {
      const loadProjectsSequentially = async () => {
        for (let i = 0; i < projects.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 100));
          setVisibleProjects(prev => [...prev, projects[i]]);
        }
      };
      loadProjectsSequentially();
    }, 300);
    return () => clearTimeout(timer);
  }, [projects]);
  return <div className="space-y-16">
      {/* Project Statistics */}
      <ProjectStats stats={[{
      icon: <Zap size={24} className="text-drew-purple" />,
      value: totalProjects,
      label: "Total Projects"
    }, {
      icon: <Star size={24} className="text-amber-500" />,
      value: uniqueCategories,
      label: "Categories"
    }, {
      icon: <Users size={24} className="text-blue-500" />,
      value: "98%",
      label: "Client Satisfaction"
    }, {
      icon: <Award size={24} className="text-rose-500" />,
      value: featuredProjects,
      label: "Featured Work"
    }]} />
      
      {/* Projects Grid */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5,
      delay: 0.3
    }} className="masonry-grid">
        {visibleProjects.map(project => <motion.div key={project.id} layout initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.9
      }} transition={{
        duration: 0.3
      }} className="masonry-item mb-6">
            <ProjectCard project={project} isHovered={hoveredProject === project.id} onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)} />
          </motion.div>)}
      </motion.div>
      
      {/* Client Logos Section */}
      
      
      {/* Project Workflow Process */}
      <div className="my-16">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold">Our Design Process</h2>
          <div className="flex-grow h-[1px] bg-drew-purple/30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[{
          icon: <Briefcase />,
          title: "Discovery",
          desc: "We analyze requirements and research your industry landscape"
        }, {
          icon: <BarChart3 />,
          title: "Strategy",
          desc: "Planning the right approach to achieve your business goals"
        }, {
          icon: <Zap />,
          title: "Design & Develop",
          desc: "Creating engaging interfaces and robust functionality"
        }, {
          icon: <CheckCircle />,
          title: "Delivery",
          desc: "Testing, refinement and launching your perfect solution"
        }].map((step, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: index * 0.1
        }} className="bg-drew-gray-dark/60 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-drew-purple/10 group-hover:bg-drew-purple/20 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-drew-purple mb-4 bg-drew-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  {step.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-2">
                  <span className="text-gray-500 mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
      
      {/* Project Testimonials & Reviews */}
      <div className="my-12 bg-drew-gray-dark/60 backdrop-blur-sm rounded-xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Client Reviews</h3>
          <div className="flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} className={star <= 4.7 ? "text-amber-400 fill-amber-400" : "text-gray-500"} />)}
            </div>
            <span className="ml-2 text-amber-400 font-medium">4.7</span>
            <span className="ml-1 text-gray-400 text-sm">(128 reviews)</span>
          </div>
        </div>
        
        <blockquote className="italic text-gray-300 border-l-4 border-drew-purple pl-4">
          "The team delivered exceptional work that exceeded our expectations. Their attention to detail and creative approach helped our e-commerce site stand out from competitors."
          <footer className="mt-2 text-sm text-gray-400">
            — James Wilson, CEO at Techmart
          </footer>
        </blockquote>
      </div>
      
      {/* Project Metrics Dashboard */}
      <div className="my-16 bg-drew-gray-dark/40 backdrop-blur-sm rounded-xl p-6 md:p-8 overflow-hidden relative">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-drew-purple/10 filter blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-drew-purple/20 text-drew-purple text-xs rounded-full mb-2">Performance Metrics</span>
            <h2 className="text-2xl md:text-3xl font-bold">Project Success Rates</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Our portfolio of successful projects demonstrates our commitment to excellence and client satisfaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            title: "On-Time Delivery",
            value: "94%",
            icon: <Clock className="text-drew-purple" />
          }, {
            title: "Client Return Rate",
            value: "87%",
            icon: <Users className="text-blue-500" />
          }, {
            title: "Project Success Rate",
            value: "96%",
            icon: <CheckCircle className="text-green-500" />
          }].map((metric, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: index * 0.1
          }} className="bg-drew-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-drew-purple/30 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">{metric.title}</h3>
                    <p className="text-3xl font-bold mt-2 text-white">{metric.value}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center">
                    {metric.icon}
                  </div>
                </div>
                
                <div className="mt-4 bg-black/20 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-drew-purple to-blue-500 rounded-full" style={{
                width: metric.value
              }}></div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
      
      {/* Call To Action */}
      <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-drew-purple/20 via-drew-black to-drew-black/80 rounded-xl text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/dc7355e5-cce2-468b-9d9e-5ec8df8fe47a.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-gray-300 mb-8 text-lg">Let's collaborate to create something amazing for your business. Our team is ready to deliver exceptional results.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3 bg-drew-purple hover:bg-drew-purple/90 text-white font-medium rounded-lg transition-colors duration-300">
              Start a Project
            </Link>
            <Link to="/services" className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-colors duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default PortfolioMasonryGrid;