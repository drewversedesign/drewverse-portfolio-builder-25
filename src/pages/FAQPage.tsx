
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import FAQHeader from '../components/faq/FAQHeader';
import FAQCategoryTabs from '../components/faq/FAQCategoryTabs';
import FAQAccordion from '../components/faq/FAQAccordion';
import FAQHelpSection from '../components/faq/FAQHelpSection';
import faqData from '../data/faqData';

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (question: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  // Get all category names
  const categories = faqData.map(item => item.category);

  // Get questions for active category
  const activeQuestions = faqData.find(category => 
    category.category === activeCategory
  )?.questions || [];

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'FAQ', path: '/faq', active: true },
  ];

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services, processes, and collaboration at DrewVerse Design."
        keywords="FAQ, frequently asked questions, DrewVerse, web design FAQ, digital agency questions"
      />
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb navigation */}
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          
          {/* FAQ Header */}
          <FAQHeader />
          
          <div className="max-w-4xl mx-auto">
            {/* Category tabs */}
            <FAQCategoryTabs 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            
            {/* FAQ accordion */}
            <FAQAccordion 
              faqs={activeQuestions}
              expandedQuestions={expandedQuestions}
              toggleQuestion={toggleQuestion}
            />
            
            {/* Additional help section */}
            <FAQHelpSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
