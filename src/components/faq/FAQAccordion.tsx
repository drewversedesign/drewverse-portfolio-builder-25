
import { FC } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  expandedQuestions: Record<string, boolean>;
  toggleQuestion: (question: string) => void;
}

const FAQAccordion: FC<FAQAccordionProps> = ({ 
  faqs, 
  expandedQuestions, 
  toggleQuestion 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
            expandedQuestions[faq.question] ? 'border-drew-purple' : 'border-transparent'
          }`}
        >
          <button
            onClick={() => toggleQuestion(faq.question)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <div className="flex items-start">
              <HelpCircle size={20} className="mr-3 text-drew-purple mt-1 flex-shrink-0" />
              <span className="font-medium text-lg">{faq.question}</span>
            </div>
            {expandedQuestions[faq.question] ? (
              <Minus size={18} className="text-drew-purple flex-shrink-0" />
            ) : (
              <Plus size={18} className="text-drew-purple flex-shrink-0" />
            )}
          </button>
          
          {expandedQuestions[faq.question] && (
            <div className="px-6 pb-6 pt-0">
              <div className="pl-9">
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FAQAccordion;
