
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, ArrowRight, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPost from '../components/BlogPost';
import SEO from '../components/SEO';
import FeaturedPost from '../components/blog/FeaturedPost';
import TrendingPosts from '../components/blog/TrendingPosts';
import { blogPosts, getAllCategories, getFeaturedPosts, getTrendingPosts } from '../utils/blogUtils';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const postsPerPage = 4;

  // Get all available categories
  const categories = getAllCategories();
  
  // Get featured and trending posts
  const featuredPosts = getFeaturedPosts();
  const trendingPosts = getTrendingPosts();

  // Filter posts based on category and search query (exclude featured posts from main listing)
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
      <SEO 
        title="Blog"
        description="Discover insights, tips, and trends in design, development, and digital marketing on the DrewVerse Design blog."
        keywords="design blog, web development tips, UI/UX trends, digital marketing insights"
        ogType="article"
      />
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
          
          {/* Featured Posts Section */}
          <FeaturedPost posts={featuredPosts} />
          
          {/* Trending Posts Section */}
          <TrendingPosts posts={trendingPosts} />
          
          {/* Search and Filters */}
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
            
            <div className="md:hidden">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-drew-gray-dark rounded-full"
              >
                <Filter size={18} />
                {showFilters ? 'Hide Filters' : 'Show Categories'}
              </button>
            </div>
            
            <div className={`flex flex-wrap gap-2 ${showFilters ? 'block' : 'hidden md:flex'}`}>
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
          
          {/* Category Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold">
              {activeCategory === 'All' ? 'All Articles' : activeCategory}
              {searchQuery && <span className="text-drew-purple"> • Search Results</span>}
            </h2>
          </motion.div>
          
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
