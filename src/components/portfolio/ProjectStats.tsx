
import { motion } from 'framer-motion';
import React from 'react';

interface StatProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

interface ProjectStatsProps {
  stats: StatProps[];
}

const ProjectStats = ({
  stats
}: ProjectStatsProps) => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
        y: 20
      }} 
      animate={{
        opacity: 1,
        y: 0
      }} 
      transition={{
        duration: 0.5
      }} 
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            delay: index * 0.1
          }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-drew-purple/50 transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-drew-purple mb-2 p-2 rounded-full bg-drew-purple/10">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectStats;
