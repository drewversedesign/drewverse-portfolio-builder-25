
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHeader from '../components/services/ServiceHeader';
import ServicesGrid from '../components/services/ServicesGrid';
import { ServiceProps } from '../components/services/ServiceCard';

// Services data for the services page
const services: ServiceProps[] = [
  {
    id: 1,
    number: '01',
    title: 'Design & Animation',
    description: 'We create beautiful, functional designs that elevate your brand and engage your audience.',
    specialties: ['Branding', 'UI/UX Design', 'Logo Design', 'Custom Animations'],
    link: '/services/design'
  },
  {
    id: 2,
    number: '02',
    title: 'Web Development',
    description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    specialties: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
    link: '/services/web-development'
  },
  {
    id: 3,
    number: '03',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that provide seamless experiences.',
    specialties: ['iOS', 'Android', 'React Native', 'Flutter'],
    link: '/services/app-development'
  },
  {
    id: 4,
    number: '04',
    title: 'Brand Strategy',
    description: 'Comprehensive brand strategies that position you for success in competitive markets.',
    specialties: ['Market Research', 'Brand Identity', 'Positioning', 'Style Guides'],
    link: '/services/brand-strategy'
  },
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="service-chip">What We Offer</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive design and development services to help your
              business thrive in the digital world.
            </p>
          </motion.div>
          
          <ServicesGrid services={services} />
          
          {/* Website Development Service Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-24 max-w-4xl mx-auto"
          >
            <div className="glass-card rounded-xl p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-6">Website Development</h2>
              <p className="text-gray-300 mb-8">
                A great website isn't just about looks—it's about functionality, speed, and user experience. 
                We specialize in high-performance, SEO-optimized websites that engage and convert visitors.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="flex items-center text-xl font-semibold mb-3">
                    <span className="text-drew-purple mr-2">🌟</span> 
                    Custom Website Design & Development
                  </h3>
                  <ul className="pl-8 space-y-2 text-gray-300">
                    <li>• Tailored designs that reflect your brand's identity.</li>
                    <li>• Engaging user interfaces for seamless navigation.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="flex items-center text-xl font-semibold mb-3">
                    <span className="text-drew-purple mr-2">🌟</span> 
                    E-Commerce Website Solutions
                  </h3>
                  <ul className="pl-8 space-y-2 text-gray-300">
                    <li>• Secure, scalable online stores.</li>
                    <li>• Optimized for sales conversions and smooth user experiences.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="flex items-center text-xl font-semibold mb-3">
                    <span className="text-drew-purple mr-2">🌟</span> 
                    Responsive & Mobile-Friendly Design
                  </h3>
                  <ul className="pl-8 space-y-2 text-gray-300">
                    <li>• Seamless experience across desktops, tablets, and smartphones.</li>
                    <li>• Built with modern UI/UX best practices.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="flex items-center text-xl font-semibold mb-3">
                    <span className="text-drew-purple mr-2">🌟</span> 
                    SEO & Performance Optimization
                  </h3>
                  <ul className="pl-8 space-y-2 text-gray-300">
                    <li>• On-page SEO strategies to boost rankings.</li>
                    <li>• Speed optimization for better user engagement.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="flex items-center text-xl font-semibold mb-3">
                    <span className="text-drew-purple mr-2">🌟</span> 
                    Website Maintenance & Support
                  </h3>
                  <ul className="pl-8 space-y-2 text-gray-300">
                    <li>• Regular updates, security enhancements, and technical support.</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-lg font-medium mb-6">
                  <span className="text-drew-purple mr-2">📌</span> 
                  Need a new website or an upgrade? Let's talk!
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center mx-auto"
                  >
                    Get a Quote
                    <ArrowRight size={18} className="ml-2" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
