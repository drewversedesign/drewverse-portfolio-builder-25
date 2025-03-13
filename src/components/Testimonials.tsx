
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'James Hill',
    company: 'Gentl Fashion',
    position: 'CEO',
    avatar: '/lovable-uploads/f5615327-db3d-4b2e-9a73-0df11a0a9692.png',
    quote: 'Working with DrewVerse Design was an exceptional experience. They delivered a stunning website that perfectly captures our brand essence. Their attention to detail and creative approach exceeded our expectations.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Everneed AI',
    position: 'Product Manager',
    avatar: '/lovable-uploads/7b9b8abf-5621-42a1-ba06-9809c753797e.png',
    quote: 'The team at DrewVerse transformed our complex AI platform into an intuitive and visually appealing product. Their understanding of UX design principles and ability to simplify complex workflows made all the difference.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    company: 'TechStream',
    position: 'Marketing Director',
    avatar: '/lovable-uploads/a30fd670-aefb-43e8-bde6-fe81e343a319.png',
    quote: 'The branding package DrewVerse created for us has been instrumental in our market positioning. Their strategic approach to design and attention to our company values produced results that truly reflect our mission.'
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 8000);
    }
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-drew-purple/10 filter blur-3xl"></div>
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
            Testimonials
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-4"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it - hear what our clients have to say about their
            experiences working with DrewVerse Design.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            className="glass-card rounded-2xl p-8 md:p-12 overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/3">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border-2 border-drew-purple rounded-full"></div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-drew-purple">{testimonials[currentIndex].position}</p>
                    <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="relative">
                    <span className="text-5xl text-drew-purple opacity-20 absolute -left-2 -top-8">"</span>
                    <p className="text-lg text-gray-300 italic relative z-10 mb-6">
                      {testimonials[currentIndex].quote}
                    </p>
                    <span className="text-5xl text-drew-purple opacity-20 absolute right-0 bottom-0">"</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-drew-purple/10 hover:border-drew-purple/50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-drew-purple w-6' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-drew-purple/10 hover:border-drew-purple/50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
