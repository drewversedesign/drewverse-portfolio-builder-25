
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FeaturedPost from '../components/blog/FeaturedPost';
import TrendingPosts from '../components/blog/TrendingPosts';
import CategoryTags from '../components/blog/CategoryTags';
import BlogSearch from '../components/blog/BlogSearch';
import MobileFilters from '../components/blog/MobileFilters';
import BlogList from '../components/blog/BlogList';
import BlogPageHeader from '../components/blog/BlogPageHeader';
import { blogPosts, getAllCategories, getFeaturedPosts, getTrendingPosts } from '../utils/blog';

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

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setShowFilters(false);
  };

  // Blog archive structured data
  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "DrewVerse Design Blog",
    "description": "Discover insights, tips, and trends in design, development, and digital marketing on the DrewVerse Design blog.",
    "url": "https://drewversedesign.online/blog",
    "isPartOf": {
      "@type": "WebSite",
      "name": "DrewVerse Design",
      "url": "https://drewversedesign.online"
    },
    "about": {
      "@type": "Thing",
      "name": "Web Design and Development"
    },
    "keywords": "web design blog, development tips, UI/UX trends, digital marketing insights, DrewVerse Design blog, Drew Verse Design"
  };

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <SEO 
        title="Blog | DrewVerse Design - Web Design & Development Insights"
        description="Discover insights, tips, and trends in design, development, and digital marketing on the DrewVerse Design blog. Expert advice from Uganda's top web designers."
        keywords="design blog, web development tips, UI/UX trends, digital marketing insights, DrewVerse Design blog, Drew Verse Design, Uganda web design blog"
        ogType="website"
        ogUrl="https://drewversedesign.online/blog"
        canonicalUrl="https://drewversedesign.online/blog"
        structuredData={blogListingSchema}
      />
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <BlogPageHeader />
          
          {/* Featured Posts Section */}
          <FeaturedPost posts={featuredPosts} />
          
          {/* Trending Posts Section */}
          <TrendingPosts posts={trendingPosts} />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              {/* Category sidebar for larger screens */}
              <div className="hidden lg:block sticky top-32">
                <CategoryTags 
                  categories={categories} 
                  activeCategory={activeCategory} 
                  onSelectCategory={handleCategorySelect}
                />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              {/* Search and Mobile Filters */}
              <div className="flex flex-col md:flex-row justify-between mb-10 gap-6">
                <BlogSearch 
                  searchQuery={searchQuery}
                  setSearchQuery={(query) => {
                    setSearchQuery(query);
                    setCurrentPage(1);
                  }}
                />
                
                <MobileFilters 
                  showFilters={showFilters}
                  setShowFilters={setShowFilters}
                />
              </div>
              
              {/* Mobile category tags */}
              <div className={`lg:hidden mb-8 ${showFilters ? 'block' : 'hidden'}`}>
                <CategoryTags 
                  categories={categories} 
                  activeCategory={activeCategory} 
                  onSelectCategory={handleCategorySelect}
                />
              </div>
              
              <BlogList 
                filteredPosts={filteredPosts}
                currentPosts={currentPosts}
                currentPage={currentPage}
                totalPages={totalPages}
                postsPerPage={postsPerPage}
                handlePageChange={handlePageChange}
                activeCategory={activeCategory}
                searchQuery={searchQuery}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
