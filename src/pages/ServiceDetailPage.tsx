
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { serviceDetailsData } from '../data/portfolioData';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  // Find the service details based on the slug
  const serviceDetails = serviceDetailsData.find(
    (service) => service.slug === serviceSlug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  // If service not found
  if (!serviceDetails) {
    return (
      <div className="min-h-screen bg-drew-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">Sorry, the service you're looking for doesn't exist.</p>
        <Link to="/services" className="bg-drew-purple hover:bg-drew-purple/90 text-white px-6 py-3 rounded-lg transition-all duration-300">
          Back to Services
        </Link>
      </div>
    );
  }

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: serviceDetails.title, path: `/services/${serviceSlug}`, active: true },
  ];

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <SEO 
        title={`${serviceDetails.title} - DrewVerse Design`}
        description={serviceDetails.metaDescription}
        keywords={serviceDetails.keywords.join(', ')}
      />
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb navigation */}
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="service-chip">{serviceDetails.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              {serviceDetails.title}
            </h1>
            <p className="mt-4 text-gray-400 max-w-3xl">
              {serviceDetails.description}
            </p>
          </motion.div>
          
          {/* Service overview section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-6">{serviceDetails.overview}</p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {serviceDetails.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-drew-purple mr-2 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Our Process</h3>
              <div className="space-y-6">
                {serviceDetails.process.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-drew-purple/20 flex items-center justify-center text-drew-purple">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
          
          {/* Service features */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceDetails.features.map((feature, index) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  {feature.items && (
                    <ul className="space-y-2 text-gray-300">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-drew-purple mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Technologies section */}
          {serviceDetails.technologies && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
              <div className="flex flex-wrap gap-4">
                {serviceDetails.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 rounded-full bg-drew-purple/10 text-drew-purple border border-drew-purple/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>
          )}
          
          {/* FAQ section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl">
              {serviceDetails.faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Call to action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's transform your ideas into reality. Contact us today to discuss your project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center"
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-drew-purple/50 hover:bg-drew-purple/10 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center"
                >
                  View Our Work
                  <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </Link>
            </div>
          </motion.section>
          
          {/* Navigation between services */}
          <div className="mt-24 flex justify-between">
            <Link 
              to={serviceDetails.prevService ? `/services/${serviceDetails.prevService.slug}` : "/services"} 
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              {serviceDetails.prevService ? serviceDetails.prevService.title : "All Services"}
            </Link>
            <Link 
              to={serviceDetails.nextService ? `/services/${serviceDetails.nextService.slug}` : "/services"} 
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              {serviceDetails.nextService ? serviceDetails.nextService.title : "All Services"}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
