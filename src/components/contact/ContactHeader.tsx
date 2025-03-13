
import { motion } from 'framer-motion';
import { useAnimationPresets } from '../../utils/animationUtils';

interface ContactHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const ContactHeader = ({
  title,
  subtitle,
  description
}: ContactHeaderProps) => {
  const { fadeInUp, shouldAnimate } = useAnimationPresets();
  
  return (
    <motion.div 
      className="mb-16 text-center"
      initial={shouldAnimate ? "hidden" : undefined}
      animate={shouldAnimate ? "visible" : undefined}
      variants={fadeInUp}
    >
      <span className="text-drew-purple font-medium px-4 py-2 rounded-full bg-drew-purple/10 inline-block mb-4">
        {subtitle}
      </span>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      
      <p className="text-gray-400 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default ContactHeader;
