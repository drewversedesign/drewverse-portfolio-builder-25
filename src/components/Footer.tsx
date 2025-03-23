
import { Link } from 'react-router-dom';
import { MapPin, HelpCircle, Mail, Phone, Globe, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-drew-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">DrewVerse Design</h3>
            <p className="text-gray-400 mb-4">
              Creating stunning digital experiences through innovative design and development solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Globe size={16} />
              <span>Kampala, Uganda</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-drew-purple transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Web Development', path: '/services/web-development' },
                { name: 'App Development', path: '/services/app-development' },
                { name: 'UI/UX Design', path: '/services/design' },
                { name: 'Brand Strategy', path: '/services/brand-strategy' }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-drew-purple transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:drewversedesign@gmail.com" 
                  className="flex items-center gap-2 text-gray-400 hover:text-drew-purple transition-colors duration-200"
                >
                  <Mail size={16} />
                  <span>drewversedesign@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+256772653789" 
                  className="flex items-center gap-2 text-gray-400 hover:text-drew-purple transition-colors duration-200"
                >
                  <Phone size={16} />
                  <span>+256 772 653 789</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Sitemap and FAQ Links */}
        <div className="flex flex-wrap gap-6 items-center justify-center py-4 border-t border-white/10 mb-6">
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
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} DrewVerse Design. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> by DrewVerse
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
