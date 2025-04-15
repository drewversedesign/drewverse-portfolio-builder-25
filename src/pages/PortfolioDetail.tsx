import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { projectsData } from '../data/portfolioData';
import { ProjectProps } from '../components/portfolio/cards/ProjectCard';
import { generateProjectSEO, projectSEOMetadata } from '../utils/portfolio/seoMetadata';
import { toast } from 'sonner';

// Import our refactored components
import ProjectHeader from '../components/portfolio/detail/ProjectHeader';
import ProjectOverview from '../components/portfolio/detail/ProjectOverview';
import ProjectDetails from '../components/portfolio/detail/ProjectDetails';
import ProjectNavigation from '../components/portfolio/detail/ProjectNavigation';
import RelatedProjects from '../components/portfolio/detail/RelatedProjects';
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
      if (!id) {
        navigate('/portfolio');
        return null;
      }
      
      // First try to find by exact slug match
      const projectBySlug = projectsData.find(p => {
        // Extract the slug from the link URL
        const pSlug = p.link.split('/').pop();
        return pSlug === id;
      });
      
      if (projectBySlug) return projectBySlug;
      
      // If no match by slug, try numeric ID (fallback)
      if (!isNaN(parseInt(id))) {
        const numId = parseInt(id);
        const projectById = projectsData.find(p => p.id === numId);
        if (projectById) return projectById;
      }
      
      // If no project found, redirect to the portfolio page
      navigate('/portfolio');
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
      
      console.log('Project found:', foundProject.title);
    } 
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [id, navigate]);

  const handlePrevProject = () => {
    if (!project) return;
    
    const currentIndex = projectsData.findIndex(p => p.id === project.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projectsData.length - 1;
    const prevProject = projectsData[prevIndex];
    
    // Extract the slug for navigation
    const slug = prevProject.link.split('/').pop();
    navigate(`/portfolio/${slug}`);
  };

  const handleNextProject = () => {
    if (!project) return;
    
    const currentIndex = projectsData.findIndex(p => p.id === project.id);
    const nextIndex = currentIndex < projectsData.length - 1 ? currentIndex + 1 : 0;
    const nextProject = projectsData[nextIndex];
    
    // Extract the slug for navigation
    const slug = nextProject.link.split('/').pop();
    navigate(`/portfolio/${slug}`);
  };

  return (
    <div className="min-h-screen bg-drew-black text-white">
      {project && (
        <SEO 
          {...generateProjectSEO(project)}
          ogType="article"
          ogImage={project.image}
          structuredData={{
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "image": project.image,
            "author": {
              "@type": "Organization",
              "name": "DrewVerse Design"
            },
            "category": project.category,
            "datePublished": project.completionDate
          }}
        />
      )}
      
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
            // This will not be rendered because we redirect to /portfolio
            // when no project is found, but keeping it as a fallback
            <div className="py-16 text-center">
              <div className="animate-pulse flex flex-col items-center justify-center">
                <div className="w-24 h-24 mb-6 rounded-full bg-drew-purple/20"></div>
                <div className="h-8 w-64 bg-drew-purple/20 rounded mb-4"></div>
                <div className="h-4 w-48 bg-drew-purple/10 rounded"></div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
