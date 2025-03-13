
import { motion } from 'framer-motion';
import ContactHeader from './contact/ContactHeader';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-drew-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ContactHeader 
          title="Let's Collaborate"
          subtitle="Get In Touch"
          description="Have a project in mind? We'd love to hear about it. Drop us a message
          and we'll get back to you as soon as possible."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
