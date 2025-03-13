
import { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ChartCard from './ChartCard';
import { Zap } from 'lucide-react';
import { performanceData } from './constants';

const PerformanceChart = () => {
  const [animatedData, setAnimatedData] = useState(
    performanceData.map(item => ({ ...item, value: 0 }))
  );
  
  useEffect(() => {
    // Animate chart data on component mount
    const timer = setTimeout(() => {
      setAnimatedData(performanceData);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ChartCard title="PERFORMANCE METRICS" value="78.5%" increase="12.4" icon={Zap}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={animatedData}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
          <YAxis stroke="rgba(255,255,255,0.5)" />
          <Tooltip contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#8B5CF6' }} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8B5CF6"
            fillOpacity={1}
            fill="url(#colorValue)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default PerformanceChart;
