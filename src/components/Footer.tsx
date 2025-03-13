
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="pt-24 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-drew-purple/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-gradient">
                DrewVerse<span className="text-white">Design</span>
              </span>
            </Link>
            
            <p className="text-gray-400 mb-6">
              Premium design studio crafting exceptional digital experiences
              that elevate brands and engage audiences.
            </p>
            
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'instagram', 'dribbble'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-drew-gray-dark hover:bg-drew-purple/20 border border-white/10 flex items-center justify-center transition-all duration-300"
                >
                  <span className="capitalize text-xs font-medium">{social.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                { name: 'Design & Animation', path: '/services/design' },
                { name: 'Web Development', path: '/services/web-development' },
                { name: 'App Development', path: '/services/app-development' },
                { name: 'Brand Strategy', path: '/services/brand-strategy' },
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-drew-purple transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Careers', path: '/careers' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-drew-purple transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <p>1234 Design Street</p>
              <p>Creative District, CD 12345</p>
              <p className="hover:text-drew-purple transition-colors duration-300">
                <a href="mailto:hello@drewverse.design">hello@drewverse.design</a>
              </p>
              <p className="hover:text-drew-purple transition-colors duration-300">
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DrewVerse Design. All rights reserved.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex gap-4 md:gap-8">
              <Link to="/privacy" className="text-gray-500 hover:text-drew-purple text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-drew-purple text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-drew-purple flex items-center justify-center"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
