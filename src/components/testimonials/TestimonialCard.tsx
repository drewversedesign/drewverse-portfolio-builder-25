
import { motion } from 'framer-motion';

export interface TestimonialProps {
  id: number;
  name: string;
  company: string;
  position: string;
  avatar: string;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialProps;
  direction: number;
}

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

const TestimonialCard = ({ testimonial, direction }: TestimonialCardProps) => {
  return (
    <motion.div
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
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-2 border-drew-purple rounded-full"></div>
        </div>
        
        <div className="text-center mt-4">
          <h4 className="text-xl font-bold">{testimonial.name}</h4>
          <p className="text-drew-purple">{testimonial.position}</p>
          <p className="text-gray-400 text-sm">{testimonial.company}</p>
        </div>
      </div>
      
      <div className="md:w-2/3">
        <div className="relative">
          <span className="text-5xl text-drew-purple opacity-20 absolute -left-2 -top-8">"</span>
          <p className="text-lg text-gray-300 italic relative z-10 mb-6">
            {testimonial.quote}
          </p>
          <span className="text-5xl text-drew-purple opacity-20 absolute right-0 bottom-0">"</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
