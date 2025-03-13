
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const SitemapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Information",
      links: [
        { name: "FAQ", path: "/faq" },
        { name: "Sitemap", path: "/sitemap" },
      ]
    },
    {
      title: "Portfolio Categories",
      links: [
        { name: "Web Design", path: "/portfolio?category=web-design" },
        { name: "Mobile Apps", path: "/portfolio?category=mobile-apps" },
        { name: "UI/UX", path: "/portfolio?category=ui-ux" },
        { name: "Branding", path: "/portfolio?category=branding" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <SEO 
        title="Sitemap" 
        description="Navigate our website with ease. View our complete sitemap."
      />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="service-chip">Navigation</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Site<span className="text-gradient">map</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Find everything you need with our complete site navigation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {sitemapSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h2 className="text-xl font-bold mb-4 text-drew-purple">{section.title}</h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path}
                        className="text-white hover:text-drew-purple transition-colors duration-300 flex items-center"
                      >
                        <span className="mr-2">•</span>
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
