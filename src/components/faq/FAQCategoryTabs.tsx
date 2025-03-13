
import { FC } from 'react';

interface FAQCategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FAQCategoryTabs: FC<FAQCategoryTabsProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
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
  );
};

export default FAQCategoryTabs;
