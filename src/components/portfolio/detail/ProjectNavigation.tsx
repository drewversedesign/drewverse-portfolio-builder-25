
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectNavigationProps {
  onPrevProject: () => void;
  onNextProject: () => void;
}

const ProjectNavigation = ({ onPrevProject, onNextProject }: ProjectNavigationProps) => {
  return (
    <div className="flex items-center justify-between border-t border-b border-white/10 py-6 my-12">
      <button 
        onClick={onPrevProject}
        className="flex items-center text-gray-400 hover:text-white transition-colors"
      >
        <ChevronLeft size={20} className="mr-2" />
        Previous Project
      </button>
      
      <button 
        onClick={onNextProject}
        className="flex items-center text-gray-400 hover:text-white transition-colors"
      >
        Next Project
        <ChevronRight size={20} className="ml-2" />
      </button>
    </div>
  );
};

export default ProjectNavigation;
