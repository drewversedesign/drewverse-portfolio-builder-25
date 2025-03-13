
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from 'recharts';
import { conversionData } from './analyticsData';

const ConversionChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion Rate</CardTitle>
        <CardDescription>Monthly website conversion rate</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Conversion Rate']}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="rate" 
                stroke="#8884d8" 
                name="Conversion Rate (%)"
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionChart;
