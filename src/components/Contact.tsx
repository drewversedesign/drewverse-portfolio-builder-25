
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Mail, Phone } from 'lucide-react';

export default function Contact() {
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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-drew-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-3xl"></div>
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
            Get In Touch
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-4"
          >
            Let's <span className="text-gradient">Collaborate</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear about it. Drop us a message
            and we'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
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
          </div>
          
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
        </div>
      </div>
    </section>
  );
}
