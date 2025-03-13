
import { motion } from 'framer-motion';
import { Clock, Users, CheckCircle } from 'lucide-react';

const ProjectMetrics = () => {
  const metrics = [
    {
      title: "On-Time Delivery",
      value: "94%",
      icon: <Clock className="text-drew-purple" />
    },
    {
      title: "Client Return Rate",
      value: "87%",
      icon: <Users className="text-blue-500" />
    },
    {
      title: "Project Success Rate",
      value: "96%",
      icon: <CheckCircle className="text-green-500" />
    }
  ];

  return (
    <div className="my-16 bg-drew-gray-dark/40 backdrop-blur-sm rounded-xl p-6 md:p-8 overflow-hidden relative">
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-drew-purple/10 filter blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-drew-purple/20 text-drew-purple text-xs rounded-full mb-2">Performance Metrics</span>
          <h2 className="text-2xl md:text-3xl font-bold">Project Success Rates</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Our portfolio of successful projects demonstrates our commitment to excellence and client satisfaction.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-drew-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-drew-purple/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-300">{metric.title}</h3>
                  <p className="text-3xl font-bold mt-2 text-white">{metric.value}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center">
                  {metric.icon}
                </div>
              </div>
              
              <div className="mt-4 bg-black/20 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-drew-purple to-blue-500 rounded-full" 
                  style={{ width: metric.value }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMetrics;
