
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
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="bg-drew-gray-dark/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-drew-purple/20 hover:border-drew-purple/40 transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              {stat.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{stat.value}</h3>
            <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>;
};

export default ProjectStats;
