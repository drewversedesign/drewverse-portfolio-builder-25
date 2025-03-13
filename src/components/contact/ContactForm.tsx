
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="lg:col-span-3"
    >
      <form 
        onSubmit={handleSubmit}
        className="glass-card rounded-xl p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-drew-gray-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-drew-purple/50 transition-all duration-300"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-drew-gray-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-drew-purple/50 transition-all duration-300"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-drew-gray-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-drew-purple/50 transition-all duration-300"
          >
            <option value="" disabled>Select a subject</option>
            <option value="Website Design">Website Design</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Branding">Branding</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-drew-gray-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-drew-purple/50 transition-all duration-300"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.05 }}
          whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
          className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
            isSubmitted
              ? 'bg-green-600 text-white'
              : isSubmitting
              ? 'bg-drew-purple/50 text-white/70 cursor-not-allowed'
              : 'bg-drew-purple text-white hover:bg-drew-purple/90'
          }`}
        >
          {isSubmitted ? (
            <>
              <Check size={20} className="mr-2" />
              Message Sent!
            </>
          ) : isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight size={20} className="ml-2" />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
