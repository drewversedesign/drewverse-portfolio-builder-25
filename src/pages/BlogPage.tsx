
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPost, { BlogPostProps } from '../components/BlogPost';

// Sample blog posts data
const blogPosts: BlogPostProps[] = [
  {
    id: 1,
    title: 'How to Choose the Right Color Palette for Your Brand',
    excerpt: 'Color psychology plays a crucial role in brand perception. Learn how to select colors that reflect your brand values and resonate with your audience.',
    author: 'Drew Thompson',
    date: 'June 15, 2023',
    category: 'Branding',
    image: '/lovable-uploads/c15adf6f-a00b-4c5e-bbe7-58cd9e4f3ccd.png',
    slug: 'color-palette-brand'
  },
  {
    id: 2,
    title: 'The Future of UI/UX: AI-Driven Design Trends',
    excerpt: 'Artificial intelligence is transforming the design landscape. Discover how AI tools are shaping the future of user interfaces and experiences.',
    author: 'Sarah Chen',
    date: 'July 8, 2023',
    category: 'UI/UX',
    image: '/lovable-uploads/1f6b0b2c-b6e7-41ff-bed6-566bac9c793c.png',
    slug: 'ai-driven-design-trends'
  },
  {
    id: 3,
    title: 'Responsive Design: Beyond the Basics',
    excerpt: 'Go beyond standard breakpoints and learn advanced techniques for creating truly responsive layouts that adapt to any device or screen size.',
    author: 'Drew Thompson',
    date: 'August 22, 2023',
    category: 'Web Design',
    image: '/lovable-uploads/c1975dfd-5ca5-4ce6-863d-9b881a283e04.png',
    slug: 'responsive-design-advanced'
  },
  {
    id: 4,
    title: 'Creating Effective Call-to-Action Buttons',
    excerpt: 'Learn the psychology behind high-converting CTA buttons and discover design principles that increase engagement and conversion rates.',
    author: 'Alex Rivera',
    date: 'September 5, 2023',
    category: 'Conversion',
    image: '/lovable-uploads/4c727787-b9ab-4109-a8f0-2728ba907cae.png',
    slug: 'effective-cta-buttons'
  },
  {
    id: 5,
    title: 'Typography Trends That Will Dominate This Year',
    excerpt: 'Explore the latest typography trends that are shaping the design world and learn how to implement them in your projects.',
    author: 'Sarah Chen',
    date: 'October 12, 2023',
    category: 'Typography',
    image: '/lovable-uploads/c15adf6f-a00b-4c5e-bbe7-58cd9e4f3ccd.png',
    slug: 'typography-trends'
  },
  {
    id: 6,
    title: 'The Impact of Dark Mode on User Experience',
    excerpt: 'Dark mode is more than just aesthetics. Discover its impact on user experience, accessibility, and energy consumption.',
    author: 'Drew Thompson',
    date: 'November 18, 2023',
    category: 'UI/UX',
    image: '/lovable-uploads/1f6b0b2c-b6e7-41ff-bed6-566bac9c793c.png',
    slug: 'dark-mode-user-experience'
  }
];

const categories = ['All', 'Branding', 'UI/UX', 'Web Design', 'Conversion', 'Typography'];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <span className="service-chip">Latest Articles</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Insights, tips, and stories about design, development, and digital trends.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between mb-10 gap-6">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-drew-gray-dark/70 border border-white/10 rounded-full px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-drew-purple/50 pl-12 transition-all duration-300"
              />
              <Search size={18} className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-drew-purple text-white' 
                      : 'bg-drew-gray-dark hover:bg-drew-purple/20 text-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {currentPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {currentPosts.map((post, index) => (
                  <BlogPost key={post.id} post={post} index={index} />
                ))}
              </div>
              
              {/* Pagination */}
              {filteredPosts.length > postsPerPage && (
                <div className="flex justify-center items-center gap-2 mt-16">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentPage === 1
                        ? 'bg-drew-gray-dark/50 text-gray-500 cursor-not-allowed'
                        : 'bg-drew-gray-dark hover:bg-drew-purple/20 text-white'
                    }`}
                  >
                    <ArrowLeft size={16} />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentPage === number
                          ? 'bg-drew-purple text-white'
                          : 'bg-drew-gray-dark hover:bg-drew-purple/20 text-white'
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentPage === totalPages
                        ? 'bg-drew-gray-dark/50 text-gray-500 cursor-not-allowed'
                        : 'bg-drew-gray-dark hover:bg-drew-purple/20 text-white'
                    }`}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No matching articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
