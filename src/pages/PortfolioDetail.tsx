
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, User, Tag, CheckSquare, Clock, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectProps } from '../components/portfolio/cards/ProjectCard';
import { toast } from 'sonner';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<ProjectProps[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    
    // Find the project by ID or slug
    const projectId = id?.includes('-') 
      ? id 
      : parseInt(id as string);
    
    const findProject = () => {
      if (typeof projectId === 'string') {
        // Try to find by slug (assuming the URL format is like "/portfolio/project-name")
        const formattedProjectId = projectId.replace(/-/g, ' ');
        return projectsData.find(p => 
          p.title.toLowerCase().includes(formattedProjectId.toLowerCase())
        );
      } else {
        // Find by numeric ID
        return projectsData.find(p => p.id === projectId);
      }
    };
    
    const foundProject = findProject();
    
    if (foundProject) {
      setProject(foundProject);
      
      // Find related projects (same category)
      const related = projectsData
        .filter(p => p.category === foundProject.category && p.id !== foundProject.id)
        .slice(0, 3);
      setRelatedProjects(related);
    } else {
      toast.error("Project not found", {
        description: "The project you're looking for doesn't exist or has been removed.",
      });
    }
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handlePrevProject = () => {
    if (!project) return;
    
    const currentIndex = projectsData.findIndex(p => p.id === project.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projectsData.length - 1;
    const prevProject = projectsData[prevIndex];
    
    navigate(`/portfolio/${prevProject.link.split('/').pop()}`);
  };

  const handleNextProject = () => {
    if (!project) return;
    
    const currentIndex = projectsData.findIndex(p => p.id === project.id);
    const nextIndex = currentIndex < projectsData.length - 1 ? currentIndex + 1 : 0;
    const nextProject = projectsData[nextIndex];
    
    navigate(`/portfolio/${nextProject.link.split('/').pop()}`);
  };

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-gray-400 hover:text-drew-purple mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </Link>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-32">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-drew-purple"></div>
            </div>
          ) : project ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <span className="service-chip">{project.category}</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4">
                  <span className="text-gradient">{project.title}</span>
                </h1>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                  {project.description}
                </p>
              </motion.div>
              
              {/* Project Hero Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl overflow-hidden mb-12 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-drew-black/80 via-transparent to-transparent z-10 opacity-70"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full object-cover h-[500px]"
                />
              </motion.div>
              
              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="md:col-span-2"
                >
                  <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description} This project showcases our expertise in creating
                      engaging and functional websites that meet the specific needs of our clients.
                      We worked closely with {project.clientName} to develop a solution that would
                      enhance their online presence and provide a seamless experience for their users.
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed">
                      The design approach focused on creating a visually appealing interface while
                      ensuring optimal performance and usability. We implemented modern technologies
                      to deliver a responsive and interactive website that works flawlessly across
                      all devices.
                    </p>
                    
                    {/* Project Services */}
                    <div className="mt-8">
                      <h3 className="text-xl font-medium mb-4">Services Provided</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.services?.map((service, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 rounded-full bg-drew-purple/20 text-drew-purple text-sm flex items-center"
                          >
                            <CheckSquare size={14} className="mr-1" />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-drew-gray-dark/60 backdrop-blur-sm rounded-xl p-6"
                >
                  <h3 className="text-xl font-medium mb-6">Project Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <User size={20} className="text-drew-purple mt-1 mr-3" />
                      <div>
                        <p className="text-sm text-gray-400">Client</p>
                        <p className="font-medium">{project.clientName}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar size={20} className="text-drew-purple mt-1 mr-3" />
                      <div>
                        <p className="text-sm text-gray-400">Completion Date</p>
                        <p className="font-medium">{project.completionDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Tag size={20} className="text-drew-purple mt-1 mr-3" />
                      <div>
                        <p className="text-sm text-gray-400">Category</p>
                        <p className="font-medium">{project.category}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock size={20} className="text-drew-purple mt-1 mr-3" />
                      <div>
                        <p className="text-sm text-gray-400">Project ID</p>
                        <p className="font-medium">#{project.id}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="font-medium mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-black/30 rounded-md text-xs border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-drew-purple hover:bg-drew-purple/90 rounded-lg transition-colors mt-4 w-full justify-center"
                      >
                        View Live Project
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Project Navigation */}
              <div className="flex items-center justify-between border-t border-b border-white/10 py-6 my-12">
                <button 
                  onClick={handlePrevProject}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronLeft size={20} className="mr-2" />
                  Previous Project
                </button>
                
                <button 
                  onClick={handleNextProject}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  Next Project
                  <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
              
              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedProjects.map((relatedProject) => (
                      <motion.div
                        key={relatedProject.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-drew-gray-dark/60 backdrop-blur-sm rounded-xl overflow-hidden group"
                      >
                        <Link to={relatedProject.link}>
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={relatedProject.image} 
                              alt={relatedProject.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          
                          <div className="p-4">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-drew-purple/20 text-drew-purple">
                              {relatedProject.category}
                            </span>
                            <h3 className="text-lg font-medium mt-2">{relatedProject.title}</h3>
                            <p className="text-sm text-gray-400 line-clamp-2 mt-1">{relatedProject.description}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-32">
              <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
              <p className="text-gray-400 mb-6">The project you're looking for doesn't exist or has been removed.</p>
              <Link 
                to="/portfolio" 
                className="px-6 py-3 bg-drew-purple rounded-lg hover:bg-drew-purple/90 transition-colors"
              >
                Browse All Projects
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
