
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
}

const BlogPagination = ({ currentPage, totalPages, handlePageChange }: BlogPaginationProps) => {
  if (totalPages <= 1) return null;
  
  return (
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
  );
};

export default BlogPagination;
