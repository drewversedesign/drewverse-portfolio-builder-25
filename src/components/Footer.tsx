
import { Link } from 'react-router-dom';
import { MapPin, HelpCircle } from 'lucide-react';

const FooterAdditions = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center py-4 border-t border-white/10 mt-8">
      <Link 
        to="/sitemap" 
        className="flex items-center gap-2 text-gray-400 hover:text-drew-purple transition-colors duration-200"
      >
        <MapPin size={16} />
        <span>Sitemap</span>
      </Link>
      <Link 
        to="/faq" 
        className="flex items-center gap-2 text-gray-400 hover:text-drew-purple transition-colors duration-200"
      >
        <HelpCircle size={16} />
        <span>FAQ</span>
      </Link>
    </div>
  );
};

export default FooterAdditions;
