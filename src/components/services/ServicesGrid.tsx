
import { motion } from 'framer-motion';
import ServiceCard, { ServiceProps } from './ServiceCard';

interface ServicesGridProps {
  services: ServiceProps[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </motion.div>
  );
};

export default ServicesGrid;
