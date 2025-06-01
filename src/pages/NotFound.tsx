
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Home } from "lucide-react";
import SEO from "../components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-drew-black text-white">
      <SEO title="404 Not Found | DrewVerse Design" description="The page you are looking for does not exist on DrewVerse Design. Return to the homepage or use the navigation menu." keywords="404, not found, DrewVerse Design, error page" ogType="website" ogImage="/lovable-uploads/7ffe5de1-8359-47de-94b6-f05851a6e354.png" />
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto px-4"
        >
          <h1 className="text-7xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-2xl text-gray-200 mb-4">Page Not Found</p>
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            If you entered the URL directly, please check that it's correct.
          </p>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Current path: <span className="text-drew-purple">{location.pathname}</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link to="/" className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Home size={18} className="mr-2" />
                Return to Home
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="border border-drew-purple/50 hover:border-drew-purple text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <ArrowLeft size={18} className="mr-2" />
                Go Back
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
