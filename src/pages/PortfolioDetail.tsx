
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const PortfolioDetail = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="service-chip">Project Details</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              <span className="text-gradient">{id || 'Project'}</span> Case Study
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Detailed project information coming soon...
            </p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
