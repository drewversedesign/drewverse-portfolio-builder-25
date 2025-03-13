
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ArrowUpRight, Zap, BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon } from 'lucide-react';

// Sample data for charts
const performanceData = [
  { name: 'Jan', value: 400, amt: 2400 },
  { name: 'Feb', value: 600, amt: 2400 },
  { name: 'Mar', value: 550, amt: 2400 },
  { name: 'Apr', value: 780, amt: 2400 },
  { name: 'May', value: 700, amt: 2400 },
  { name: 'Jun', value: 900, amt: 2400 },
  { name: 'Jul', value: 1000, amt: 2400 },
];

const projectData = [
  { name: 'Design', value: 35 },
  { name: 'Development', value: 45 },
  { name: 'Marketing', value: 20 },
];

const growthData = [
  { name: 'Q1', value: 240 },
  { name: 'Q2', value: 390 },
  { name: 'Q3', value: 500 },
  { name: 'Q4', value: 680 },
];

const COLORS = ['#8B5CF6', '#0EA5E9', '#D946EF', '#34D399'];

const ChartCard = ({ title, value, increase, children, icon: Icon }) => {
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

const DataVisualization = () => {
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
    <section id="data" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 tech-grid"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-drew-purple/5 filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 filter blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Performance Analytics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time data visualization with advanced metrics to track project performance and growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
          
          <ChartCard title="PROJECT ALLOCATION" value="32 Projects" icon={PieChartIcon}>
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
        </div>
        
        {/* Additional Chart */}
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
      </div>
    </section>
  );
};

export default DataVisualization;
