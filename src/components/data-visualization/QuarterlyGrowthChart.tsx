
import { BarChart, Bar, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ChartCard from './ChartCard';
import { BarChart3 } from 'lucide-react';
import { growthData } from './constants';

const QuarterlyGrowthChart = () => {
  return (
    <ChartCard title="QUARTERLY GROWTH" value="68.2%" increase="23.7" icon={BarChart3}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={growthData}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
          <YAxis stroke="rgba(255,255,255,0.5)" />
          <Tooltip contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#0EA5E9' }} />
          <Bar 
            dataKey="value" 
            fill="#0EA5E9"
            animationBegin={300}
            animationDuration={1500}
            radius={[4, 4, 0, 0]}
          >
            {growthData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={`rgba(14, 165, 233, ${0.5 + (index * 0.15)})`} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default QuarterlyGrowthChart;
