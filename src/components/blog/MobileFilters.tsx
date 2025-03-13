
import { Filter } from 'lucide-react';

interface MobileFiltersProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const MobileFilters = ({ showFilters, setShowFilters }: MobileFiltersProps) => {
  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setShowFilters(!showFilters)}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-drew-gray-dark rounded-full"
      >
        <Filter size={18} />
        {showFilters ? 'Hide Filters' : 'Show Categories'}
      </button>
    </div>
  );
};

export default MobileFilters;
