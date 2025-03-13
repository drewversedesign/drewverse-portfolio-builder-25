
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

// Sitemap data structure
const sitemapData = [
  {
    section: 'Main Pages',
    links: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Sitemap', path: '/sitemap' },
    ]
  },
  {
    section: 'Services',
    links: [
      { name: 'Design & Animation', path: '/services/design' },
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'App Development', path: '/services/app-development' },
      { name: 'Brand Strategy', path: '/services/brand-strategy' },
    ]
  },
  {
    section: 'Legal',
    links: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ]
  },
];

const SitemapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Sitemap', path: '/sitemap', active: true },
  ];

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb navigation */}
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="service-chip">Navigation Guide</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Site<span className="text-gradient">map</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Find your way around our website with this complete overview of all pages and sections.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sitemapData.map((section, index) => (
              <motion.div
                key={section.section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <Map className="mr-2 text-drew-purple" size={20} />
                  <h2 className="text-xl font-semibold">{section.section}</h2>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.path} className="transition-colors duration-200">
                      <Link 
                        to={link.path} 
                        className="flex items-center text-gray-300 hover:text-drew-purple group"
                      >
                        <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SitemapPage;
