
import { motion } from 'framer-motion';
import { ProjectProps } from './cards/ProjectCard';

interface CategoryGridProps {
  categories: string[];
  projects: ProjectProps[];
  handleCategoryClick: (category: string) => void;
}

const CategoryGrid = ({ categories, projects, handleCategoryClick }: CategoryGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {categories.slice(0, 4).map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative overflow-hidden rounded-xl group cursor-pointer"
          onClick={() => handleCategoryClick(category)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
          <div className="w-full h-32 bg-drew-gray-dark overflow-hidden">
            <motion.img 
              src={projects.find(p => p.category === category)?.image || '/placeholder.svg'} 
              alt={category}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-4 z-20">
            <h3 className="text-white font-medium">{category}</h3>
            <p className="text-xs text-gray-300">
              {projects.filter(p => p.category === category).length} projects
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryGrid;
