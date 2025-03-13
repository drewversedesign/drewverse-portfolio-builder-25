
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import ChartCard from './ChartCard';
import { PieChart as PieChartIcon } from 'lucide-react';
import { projectData, COLORS } from './constants';

const ProjectAllocationChart = () => {
  return (
    <ChartCard title="PROJECT ALLOCATION" value="32 Projects" increase="0" icon={PieChartIcon}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={projectData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            animationBegin={200}
            animationDuration={1500}
          >
            {projectData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#8B5CF6' }} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default ProjectAllocationChart;
