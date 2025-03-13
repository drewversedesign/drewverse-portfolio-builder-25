
import { useState, useEffect } from 'react';
import TestimonialHeader from './testimonials/TestimonialHeader';
import TestimonialSlider from './testimonials/TestimonialSlider';
import { TestimonialProps } from './testimonials/TestimonialCard';
import { placeholderImages } from '../utils/imageUtils';

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: 'James Hill',
    company: 'Gentl Fashion',
    position: 'CEO',
    avatar: placeholderImages.testimonial1,
    quote: 'Working with DrewVerse Design was an exceptional experience. They delivered a stunning website that perfectly captures our brand essence. Their attention to detail and creative approach exceeded our expectations.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Everneed AI',
    position: 'Product Manager',
    avatar: placeholderImages.testimonial2,
    quote: 'The team at DrewVerse transformed our complex AI platform into an intuitive and visually appealing product. Their understanding of UX design principles and ability to simplify complex workflows made all the difference.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    company: 'TechStream',
    position: 'Marketing Director',
    avatar: placeholderImages.testimonial3,
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
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 8000);
    }
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-drew-purple/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <TestimonialHeader 
          title="What Our Clients Say"
          subtitle="Testimonials"
          description="Don't just take our word for it - hear what our clients have to say about their
          experiences working with DrewVerse Design."
        />
        
        <TestimonialSlider 
          testimonials={testimonials}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          direction={direction}
          setDirection={setDirection}
          setAutoplay={setAutoplay}
        />
      </div>
    </section>
  );
}
