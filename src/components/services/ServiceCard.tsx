
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      variants={item}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card rounded-xl p-8 transition-all duration-300 hover:border-drew-purple/50 group"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        transform: isHovered ? "translateY(-8px) rotateX(2deg)" : "translateY(0) rotateX(0)",
        boxShadow: isHovered 
          ? "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <motion.span 
            className="text-4xl font-bold text-drew-purple opacity-30"
            animate={{ 
              z: isHovered ? 10 : 0,
              rotateY: isHovered ? -15 : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {service.number}
          </motion.span>
          <motion.div 
            className="w-12 h-12 rounded-full bg-drew-purple/10 flex items-center justify-center group-hover:bg-drew-purple/20 transition-all duration-300"
            animate={{ 
              z: isHovered ? 15 : 0,
              rotateY: isHovered ? 15 : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ArrowRight size={18} className="text-drew-purple" />
          </motion.div>
        </div>
        
        <motion.h3 
          className="text-2xl font-bold mb-3"
          animate={{ z: isHovered ? 8 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {service.title}
        </motion.h3>
        
        <p className="text-gray-400 mb-6">{service.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {service.specialties.map((specialty, index) => (
              <motion.span 
                key={index} 
                className="service-chip"
                initial={{ z: 0 }}
                animate={{ 
                  z: isHovered ? 5 + index * 2 : 0,
                  y: isHovered ? -2 - index * 0.5 : 0
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  delay: index * 0.05
                }}
              >
                {specialty}
              </motion.span>
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
