
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';

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
    {
      title: "Service Pages",
      links: [
        { name: "Website Design", path: "/services/website-design" },
        { name: "Mobile App Development", path: "/services/mobile-app-development" },
        { name: "UI/UX Design", path: "/services/ui-ux-design" },
        { name: "Brand Identity", path: "/services/brand-identity" },
        { name: "SEO Services", path: "/services/seo-services" },
      ]
    },
    {
      title: "Blog Categories",
      links: [
        { name: "Design", path: "/blog/category/design" },
        { name: "Development", path: "/blog/category/development" },
        { name: "Business", path: "/blog/category/business" },
        { name: "Marketing", path: "/blog/category/marketing" },
      ]
    },
  ];

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Sitemap", path: "/sitemap", active: true }
  ];

  // Structured data for this page
  const sitemapSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sitemap - DrewVerse Design",
    "description": "Complete sitemap for DrewVerse Design website, showing all pages and sections.",
    "url": "https://drewverse.design/sitemap",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://drewverse.design/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sitemap",
          "item": "https://drewverse.design/sitemap"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <SEO 
        title="Sitemap - Website Navigation" 
        description="Explore the full DrewVerse Design website structure. Find all pages including our services, portfolio, blog, and contact information for website design in Kampala."
        keywords="sitemap, website navigation, DrewVerse Design pages, website design Kampala, branding agency Uganda"
        ogUrl="https://drewverse.design/sitemap"
        canonicalUrl="https://drewverse.design/sitemap"
        ogType="website"
        structuredData={sitemapSchema}
      />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} className="text-sm mb-8" />
          </div>
          
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
              Complete navigation guide to all pages and sections of the DrewVerse Design website
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
          
          {/* XML Sitemap link for search engines */}
          <div className="mt-16 text-center">
            <p className="text-gray-400">
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-drew-purple hover:underline">
                XML Sitemap
              </a>
              {" "}available for search engines
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SitemapPage;
