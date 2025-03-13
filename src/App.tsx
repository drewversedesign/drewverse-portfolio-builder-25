
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import components and pages
import Index from './pages/Index';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetail from './pages/PortfolioDetail';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import SitemapPage from './pages/SitemapPage';
import NotFound from './pages/NotFound';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AdminPage from './pages/AdminPage';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the current route
    console.log('Current Route:', location.pathname);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:projectId" element={<PortfolioDetail />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
