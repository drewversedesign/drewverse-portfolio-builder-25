
import { Link } from 'react-router-dom';

const BlogNotFound = () => {
  return (
    <div className="min-h-screen bg-drew-black text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-drew-purple hover:underline">
          Return to blog
        </Link>
      </div>
    </div>
  );
};

export default BlogNotFound;
