
import { motion } from 'framer-motion';
import { Briefcase, BarChart3, Zap, CheckCircle } from 'lucide-react';

const DesignProcess = () => {
  const steps = [
    {
      icon: <Briefcase />,
      title: "Discovery",
      desc: "We analyze requirements and research your industry landscape"
    },
    {
      icon: <BarChart3 />,
      title: "Strategy",
      desc: "Planning the right approach to achieve your business goals"
    },
    {
      icon: <Zap />,
      title: "Design & Develop",
      desc: "Creating engaging interfaces and robust functionality"
    },
    {
      icon: <CheckCircle />,
      title: "Delivery",
      desc: "Testing, refinement and launching your perfect solution"
    }
  ];

  return (
    <div className="my-16">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold">Our Design Process</h2>
        <div className="flex-grow h-[1px] bg-drew-purple/30"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-drew-gray-dark/60 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden group"
          >
            <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-drew-purple/10 group-hover:bg-drew-purple/20 transition-all duration-300"></div>
            
            <div className="relative z-10">
              <div className="text-drew-purple mb-4 bg-drew-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
                {step.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-2">
                <span className="text-gray-500 mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                {step.title}
              </h3>
              
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesignProcess;
