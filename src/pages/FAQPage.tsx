
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

// FAQ data structure
const faqData = [
  {
    category: 'Services & Processes',
    questions: [
      {
        question: 'What services does DrewVerse Design offer?',
        answer: 'We provide a range of digital services including web design and development, mobile app development, UI/UX design, branding, digital marketing, and custom software solutions. Our team specializes in creating tailored digital experiences that align with your business goals and user needs.'
      },
      {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while complex applications or e-commerce platforms can take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.'
      },
      {
        question: 'What is your design process?',
        answer: 'Our design process includes discovery (understanding your needs and goals), research (market and user research), wireframing, design concepts, revisions, and final delivery. We keep you involved throughout the process with regular updates and feedback sessions.'
      },
      {
        question: 'Do you provide ongoing support after project completion?',
        answer: 'Yes, we offer various maintenance and support packages to ensure your digital products remain up-to-date, secure, and functioning optimally. These can include regular updates, security monitoring, content updates, and technical support.'
      }
    ]
  },
  {
    category: 'Technology & Implementation',
    questions: [
      {
        question: 'What technologies do you use?',
        answer: 'We work with a wide range of technologies including React, Angular, Vue.js, Node.js, PHP, WordPress, Shopify, and various other frameworks and platforms. Our technology choices are based on your specific needs and what will provide the best performance and user experience.'
      },
      {
        question: 'Can you work with our existing systems?',
        answer: 'Absolutely. We have experience integrating with various existing systems, APIs, and databases. During our discovery phase, we'll assess your current infrastructure and develop a plan for seamless integration.'
      },
      {
        question: 'Are your websites mobile-friendly?',
        answer: 'Yes, all our websites are built using responsive design principles, ensuring they function and look great on all devices, from desktop computers to tablets and smartphones.'
      },
      {
        question: 'Do you handle website hosting and domain registration?',
        answer: 'Yes, we can manage hosting setup, domain registration, and ongoing hosting management. We'll recommend the best hosting solutions based on your website's needs and expected traffic.'
      }
    ]
  },
  {
    category: 'Collaboration & Pricing',
    questions: [
      {
        question: 'How do we get started working together?',
        answer: 'The first step is to schedule a consultation where we'll discuss your project goals, timeline, and budget. After this, we'll provide a detailed proposal outlining our approach, deliverables, timeline, and pricing. Once approved, we'll begin with the discovery phase of your project.'
      },
      {
        question: 'How do you determine pricing for projects?',
        answer: 'Our pricing is based on the scope, complexity, and timeline of your project. We provide detailed quotes after understanding your specific requirements during the initial consultation. We offer both fixed-price projects and hourly rate arrangements depending on the nature of the work.'
      },
      {
        question: 'Do you work with clients internationally?',
        answer: 'Yes, we work with clients globally. Our team is set up for remote collaboration with efficient communication processes regardless of time zone differences.'
      },
      {
        question: 'What is expected from clients during a project?',
        answer: 'Successful projects require collaboration. We'll need your input on requirements, timely feedback on deliverables, content provision (if applicable), and availability for scheduled check-ins. We'll guide you through what's needed at each stage to ensure a smooth process.'
      }
    ]
  }
];

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

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'FAQ', path: '/faq', active: true },
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
            <span className="service-chip">Get Answers</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services, processes, and collaboration.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {faqData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeCategory === category.category 
                      ? 'bg-drew-purple text-white' 
                      : 'bg-drew-gray-dark hover:bg-drew-purple/20 text-gray-300'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
            
            {/* FAQ accordion */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {faqData
                .find(category => category.category === activeCategory)?.questions
                .map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                      expandedQuestions[faq.question] ? 'border-drew-purple' : 'border-transparent'
                    }`}
                  >
                    <button
                      onClick={() => toggleQuestion(faq.question)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-start">
                        <HelpCircle size={20} className="mr-3 text-drew-purple mt-1 flex-shrink-0" />
                        <span className="font-medium text-lg">{faq.question}</span>
                      </div>
                      {expandedQuestions[faq.question] ? (
                        <Minus size={18} className="text-drew-purple flex-shrink-0" />
                      ) : (
                        <Plus size={18} className="text-drew-purple flex-shrink-0" />
                      )}
                    </button>
                    
                    {expandedQuestions[faq.question] && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-9">
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
            </motion.div>
            
            {/* Additional help section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center p-8 glass-card rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                If you couldn't find the answer to your question, feel free to reach out to our team directly.
              </p>
              <Link 
                to="/contact" 
                className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg inline-flex items-center transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
