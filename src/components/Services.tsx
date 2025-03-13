
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceHeader from './services/ServiceHeader';
import ServicesGrid from './services/ServicesGrid';
import { ServiceProps } from './services/ServiceCard';

const services: ServiceProps[] = [
  {
    id: 1,
    number: '01',
    title: 'Design & Animation',
    description: 'We create beautiful, functional designs that elevate your brand and engage your audience.',
    specialties: ['Branding', 'UI/UX Design', 'Logo Design', 'Custom Animations'],
    link: '/services/design',
    slug: 'design'
  },
  {
    id: 2,
    number: '02',
    title: 'Web Development',
    description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    specialties: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
    link: '/services/web-development',
    slug: 'web-development'
  },
  {
    id: 3,
    number: '03',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that provide seamless experiences.',
    specialties: ['iOS', 'Android', 'React Native', 'Flutter'],
    link: '/services/app-development',
    slug: 'app-development'
  },
  {
    id: 4,
    number: '04',
    title: 'Brand Strategy',
    description: 'Comprehensive brand strategies that position you for success in competitive markets.',
    specialties: ['Market Research', 'Brand Identity', 'Positioning', 'Style Guides'],
    link: '/services/brand-strategy',
    slug: 'brand-strategy'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-drew-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ServiceHeader 
          title="Premium Services For Digital Excellence"
          subtitle="Our Expertise"
          description="We provide end-to-end solutions tailored to your unique needs, combining
          cutting-edge technology with creative expertise."
        />
        
        <ServicesGrid services={services} />
        
        <div className="text-center mt-16">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center mx-auto"
            >
              All Services
              <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
