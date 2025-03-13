
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ServiceProps {
  id: number;
  number: string;
  title: string;
  description: string;
  specialties: string[];
  link: string;
}

interface ServiceCardProps {
  service: ServiceProps;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div 
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
  );
};

export default ServiceCard;
