
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-32">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-gray-400 mb-8">Oops! Page not found</p>
          <a href="/" className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300">
            Return to Home
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
