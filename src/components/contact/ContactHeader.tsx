
import { motion } from 'framer-motion';

interface ContactHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const ContactHeader = ({ title, subtitle, description }: ContactHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="service-chip"
      >
        {subtitle}
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold mt-4"
      >
        {title.split(' ').map((word, index) => 
          index === 1 ? 
          <span key={index} className="text-gradient">{word}{' '}</span> : 
          <span key={index}>{word}{' '}</span>
        )}
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 text-gray-400 max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default ContactHeader;
