
import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ChartCardProps {
  title: string;
  value: string;
  increase?: string;
  children: ReactNode;
  icon: LucideIcon;
}

const ChartCard = ({ title, value, increase, children, icon: Icon }: ChartCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="futuristic-panel rounded-xl p-5 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scanning line animation */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <div className="absolute w-full h-[2px] bg-drew-purple/30 animate-scanning-line"></div>
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-gray-400 text-sm">{title}</h3>
          <div className="flex items-baseline mt-1">
            <span className="text-2xl font-bold mr-2">{value}</span>
            {increase && (
              <span className="text-green-400 text-xs flex items-center">
                +{increase}% <ArrowUpRight size={14} className="ml-0.5" />
              </span>
            )}
          </div>
        </div>
        <div className="bg-drew-purple/20 p-2 rounded-lg">
          <Icon size={18} className="text-drew-purple" />
        </div>
      </div>
      
      <div className="h-48">
        {children}
      </div>
    </motion.div>
  );
};

export default ChartCard;
