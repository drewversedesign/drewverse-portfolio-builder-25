
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap justify-center gap-4 mb-12"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeCategory === category 
              ? 'bg-drew-purple text-white' 
              : 'bg-drew-gray-dark hover:bg-drew-purple/20 text-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;
