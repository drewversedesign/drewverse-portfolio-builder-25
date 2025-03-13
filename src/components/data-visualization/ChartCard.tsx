
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
      className="futuristic-panel rounded-xl p-5 h-full transform transition-all duration-300"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transform: isHovered ? "translateY(-5px)" : "translateY(0px)",
        boxShadow: isHovered 
          ? "0 15px 30px rgba(249, 115, 22, 0.1), 0 5px 15px rgba(0, 0, 0, 0.12)" 
          : "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}
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
          <h3 className="text-gray-400 text-sm font-mono uppercase tracking-wider">{title}</h3>
          <div className="flex items-baseline mt-1">
            <span className="text-2xl font-display font-bold mr-2 tracking-wider">{value}</span>
            {increase && (
              <span className="text-green-400 text-xs flex items-center font-mono">
                +{increase}% <ArrowUpRight size={14} className="ml-0.5" />
              </span>
            )}
          </div>
        </div>
        <motion.div 
          className="bg-drew-purple/20 p-2 rounded-lg"
          animate={{ rotateY: isHovered ? 15 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Icon size={18} className="text-drew-purple" />
        </motion.div>
      </div>
      
      <div className="h-48">
        {children}
      </div>
    </motion.div>
  );
};

export default ChartCard;
