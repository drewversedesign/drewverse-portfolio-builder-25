
// This file now provides initial data for charts with TypeScript support
// The live data will be fetched from Supabase in the components

// Traffic data by source
export type TrafficDataPoint = {
  month: string;
  direct: number;
  organic: number;
  referral: number;
  social: number;
};

export const trafficData: TrafficDataPoint[] = [
  { month: 'Jan', direct: 400, organic: 240, referral: 180, social: 120 },
  { month: 'Feb', direct: 300, organic: 230, referral: 190, social: 140 },
  { month: 'Mar', direct: 500, organic: 260, referral: 220, social: 160 },
  { month: 'Apr', direct: 450, organic: 290, referral: 250, social: 190 },
  { month: 'May', direct: 600, organic: 310, referral: 270, social: 210 },
  { month: 'Jun', direct: 700, organic: 360, referral: 290, social: 240 },
];

// Device type distribution
export type DeviceDataPoint = {
  name: string;
  value: number;
};

export const deviceData: DeviceDataPoint[] = [
  { name: 'Desktop', value: 58 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 7 },
];

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

// Conversion rate data
export type ConversionDataPoint = {
  month: string;
  rate: number;
};

export const conversionData: ConversionDataPoint[] = [
  { month: 'Jan', rate: 2.4 },
  { month: 'Feb', rate: 2.8 },
  { month: 'Mar', rate: 3.2 },
  { month: 'Apr', rate: 3.6 },
  { month: 'May', rate: 3.1 },
  { month: 'Jun', rate: 3.9 },
];

// Top pages sample data
export type PageDataPoint = {
  path: string;
  views: number;
  bounceRate: string;
};

export const topPagesData: PageDataPoint[] = [
  { path: '/', views: 3842, bounceRate: '42%' },
  { path: '/portfolio', views: 2259, bounceRate: '38%' },
  { path: '/services', views: 1876, bounceRate: '41%' },
  { path: '/about', views: 1568, bounceRate: '35%' },
  { path: '/contact', views: 1245, bounceRate: '29%' },
];

// Top referrers sample data
export type ReferrerDataPoint = {
  source: string;
  visitors: number;
  conversion: string;
};

export const topReferrersData: ReferrerDataPoint[] = [
  { source: 'Google', visitors: 4582, conversion: '3.2%' },
  { source: 'Facebook', visitors: 2862, conversion: '2.8%' },
  { source: 'Instagram', visitors: 1958, conversion: '3.1%' },
  { source: 'Twitter', visitors: 1286, conversion: '2.4%' },
  { source: 'LinkedIn', visitors: 964, conversion: '3.8%' },
];
