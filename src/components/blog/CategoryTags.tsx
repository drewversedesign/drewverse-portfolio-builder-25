
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

interface CategoryTagsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryTags = ({ categories, activeCategory, onSelectCategory }: CategoryTagsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center mb-4">
        <Tag size={18} className="mr-2 text-drew-purple" />
        <h3 className="text-xl font-bold">Categories</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
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
    </motion.div>
  );
};

export default CategoryTags;
