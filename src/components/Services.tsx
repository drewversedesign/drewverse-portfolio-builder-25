
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Design & Animation',
    description: 'We create beautiful, functional designs that elevate your brand and engage your audience.',
    specialties: ['Branding', 'UI/UX Design', 'Logo Design', 'Custom Animations'],
    link: '/services/design'
  },
  {
    id: 2,
    number: '02',
    title: 'Web Development',
    description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    specialties: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
    link: '/services/web-development'
  },
  {
    id: 3,
    number: '03',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that provide seamless experiences.',
    specialties: ['iOS', 'Android', 'React Native', 'Flutter'],
    link: '/services/app-development'
  },
  {
    id: 4,
    number: '04',
    title: 'Brand Strategy',
    description: 'Comprehensive brand strategies that position you for success in competitive markets.',
    specialties: ['Market Research', 'Brand Identity', 'Positioning', 'Style Guides'],
    link: '/services/brand-strategy'
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-drew-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="service-chip"
          >
            Our Expertise
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-4"
          >
            Premium Services For <span className="text-gradient">Digital Excellence</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            We provide end-to-end solutions tailored to your unique needs, combining
            cutting-edge technology with creative expertise.
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={item}
              className="glass-card rounded-xl p-8 transition-all duration-300 hover:border-drew-purple/50 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-bold text-drew-purple opacity-30">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-drew-purple/10 flex items-center justify-center group-hover:bg-drew-purple/20 transition-all duration-300">
                    <ArrowRight size={18} className="text-drew-purple" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.specialties.map((specialty, index) => (
                      <span 
                        key={index} 
                        className="service-chip"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={service.link} className="story-link text-drew-purple">
                    Learn more
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
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
