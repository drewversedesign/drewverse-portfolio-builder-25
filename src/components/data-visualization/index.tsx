
import { motion } from 'framer-motion';
import PerformanceChart from './PerformanceChart';
import ProjectAllocationChart from './ProjectAllocationChart';
import QuarterlyGrowthChart from './QuarterlyGrowthChart';

const DataVisualization = () => {
  return (
    <section id="data" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 tech-grid"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-drew-purple/5 filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 filter blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Performance Analytics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time data visualization with advanced metrics to track project performance and growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <PerformanceChart />
          <ProjectAllocationChart />
          <QuarterlyGrowthChart />
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;
