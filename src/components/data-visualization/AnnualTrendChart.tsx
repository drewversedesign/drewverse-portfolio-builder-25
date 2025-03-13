
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { ArrowUpRight, LineChart as LineChartIcon } from 'lucide-react';
import { performanceData } from './constants';

const AnnualTrendChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-8 futuristic-panel rounded-xl p-5"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-gray-400 text-sm">ANNUAL TREND ANALYSIS</h3>
          <div className="flex items-baseline mt-1">
            <span className="text-2xl font-bold mr-2">$2.4M Revenue</span>
            <span className="text-green-400 text-xs flex items-center">
              +18.6% <ArrowUpRight size={14} className="ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-drew-purple/20 p-2 rounded-lg">
          <LineChartIcon size={18} className="text-drew-purple" />
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={performanceData}
            margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#D946EF' }} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#D946EF" 
              strokeWidth={2}
              dot={{ stroke: '#D946EF', strokeWidth: 2, r: 4, fill: '#0F0F0F' }}
              activeDot={{ r: 6, stroke: '#D946EF', strokeWidth: 2, fill: '#D946EF' }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default AnnualTrendChart;
