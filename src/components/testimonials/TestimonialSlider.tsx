
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TestimonialCard, { TestimonialProps } from './TestimonialCard';

interface TestimonialSliderProps {
  testimonials: TestimonialProps[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  direction: number;
  setDirection: (direction: number) => void;
  setAutoplay: (autoplay: boolean) => void;
}

const TestimonialSlider = ({
  testimonials,
  currentIndex,
  setCurrentIndex,
  direction,
  setDirection,
  setAutoplay
}: TestimonialSliderProps) => {
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="max-w-4xl mx-auto relative">
      <div 
        className="glass-card rounded-2xl p-8 md:p-12 overflow-hidden"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <TestimonialCard 
            key={currentIndex} 
            testimonial={testimonials[currentIndex]} 
            direction={direction} 
          />
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
  );
};

export default TestimonialSlider;
