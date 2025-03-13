
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card rounded-xl p-8 h-full"
    >
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-drew-purple/20 flex items-center justify-center flex-shrink-0">
            <Mail size={20} className="text-drew-purple" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Email Us</h4>
            <a 
              href="mailto:hello@drewverse.design"
              className="text-gray-400 hover:text-drew-purple transition-colors duration-300"
            >
              hello@drewverse.design
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-drew-purple/20 flex items-center justify-center flex-shrink-0">
            <Phone size={20} className="text-drew-purple" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Call Us</h4>
            <a 
              href="tel:+1234567890"
              className="text-gray-400 hover:text-drew-purple transition-colors duration-300"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h4 className="text-xl font-bold mb-4">Follow Us</h4>
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
    </motion.div>
  );
};

export default ContactInfo;
