
import { motion } from 'framer-motion';
import BlogPost from '../BlogPost';
import BlogPagination from './BlogPagination';
import { BlogPostProps } from '../BlogPost';

interface BlogListProps {
  filteredPosts: BlogPostProps[];
  currentPosts: BlogPostProps[];
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
  handlePageChange: (pageNumber: number) => void;
  activeCategory: string;
  searchQuery: string;
}

const BlogList = ({ 
  filteredPosts, 
  currentPosts, 
  currentPage, 
  totalPages, 
  postsPerPage,
  handlePageChange,
  activeCategory,
  searchQuery
}: BlogListProps) => {
  return (
    <>
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
            <BlogPagination 
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium mb-2">No matching articles found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </>
  );
};

export default BlogList;
