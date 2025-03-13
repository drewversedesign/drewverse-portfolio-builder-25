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
      {stats.map((stat, index) => {})}
    </motion.div>;
};
export default ProjectStats;