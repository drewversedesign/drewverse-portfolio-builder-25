
import { Link } from 'react-router-dom';

const ProjectNotFound = () => {
  return (
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
  );
};

export default ProjectNotFound;
