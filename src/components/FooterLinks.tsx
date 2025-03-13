
import { Link } from 'react-router-dom';
import { MapPin, HelpCircle } from 'lucide-react';

interface FooterLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const FooterLink = ({ to, icon, label }: FooterLinkProps) => {
  return (
    <Link 
      to={to} 
      className="flex items-center gap-2 text-gray-400 hover:text-drew-purple transition-colors duration-200"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const FooterLinks = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center mt-4">
      <FooterLink 
        to="/sitemap" 
        icon={<MapPin size={16} />} 
        label="Sitemap" 
      />
      <FooterLink 
        to="/faq" 
        icon={<HelpCircle size={16} />} 
        label="FAQ" 
      />
    </div>
  );
};

export default FooterLinks;
