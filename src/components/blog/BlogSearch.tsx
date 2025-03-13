
import { Search } from 'lucide-react';

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const BlogSearch = ({ searchQuery, setSearchQuery }: BlogSearchProps) => {
  return (
    <div className="relative w-full md:w-96">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="w-full bg-drew-gray-dark/70 border border-white/10 rounded-full px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-drew-purple/50 pl-12 transition-all duration-300"
      />
      <Search size={18} className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
    </div>
  );
};

export default BlogSearch;
