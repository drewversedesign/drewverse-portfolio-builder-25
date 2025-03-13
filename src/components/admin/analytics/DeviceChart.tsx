
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/card';
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from 'recharts';
import { deviceData, COLORS } from './analyticsData';

const DeviceChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Distribution</CardTitle>
        <CardDescription>Breakdown of visitors by device type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeviceChart;
