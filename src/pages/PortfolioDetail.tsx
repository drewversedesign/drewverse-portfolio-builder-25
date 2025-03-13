
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projectsData } from '../data/portfolioData';
import { ProjectProps } from '../components/portfolio/cards/ProjectCard';
import { toast } from 'sonner';

// Import our refactored components
import ProjectHeader from '../components/portfolio/detail/ProjectHeader';
import ProjectOverview from '../components/portfolio/detail/ProjectOverview';
import ProjectDetails from '../components/portfolio/detail/ProjectDetails';
import ProjectNavigation from '../components/portfolio/detail/ProjectNavigation';
import RelatedProjects from '../components/portfolio/detail/RelatedProjects';
import ProjectNotFound from '../components/portfolio/detail/ProjectNotFound';
import LoadingSpinner from '../components/portfolio/detail/LoadingSpinner';

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
    const findProject = () => {
      if (id) {
        if (id.includes('-')) {
          // Find by slug (URL path)
          return projectsData.find(p => {
            const pSlug = p.link.split('/').pop();
            return pSlug === id;
          });
        } else {
          // Find by numeric ID
          const numId = parseInt(id);
          return projectsData.find(p => p.id === numId);
        }
      }
      return null;
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
    const nextIndex = currentIndex < projectsData.length - 1 ? currentIndex + 0 : 0;
    const nextProject = projectsData[nextIndex];
    
    navigate(`/portfolio/${nextProject.link.split('/').pop()}`);
  };

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            <LoadingSpinner />
          ) : project ? (
            <>
              <ProjectHeader project={project} />
              
              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <ProjectOverview project={project} />
                <ProjectDetails project={project} />
              </div>
              
              <ProjectNavigation 
                onPrevProject={handlePrevProject}
                onNextProject={handleNextProject}
              />
              
              <RelatedProjects projects={relatedProjects} />
            </>
          ) : (
            <ProjectNotFound />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
