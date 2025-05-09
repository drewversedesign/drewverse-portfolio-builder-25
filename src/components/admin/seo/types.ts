export interface SEOSetting {
  title: string;
  metaDescription: string;
  metaKeywords: string;
  robotsTxt: string;
  sitemap: string;
}

export interface PageSEO {
  id: string;
  title: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  focusKeyword: string;
  score: number;
}

export const getScoreColor = (score: number) => {
  if (score >= 90) return 'bg-green-500';
  if (score >= 70) return 'bg-yellow-500';
  return 'bg-red-500';
};

export const getScoreText = (score: number) => {
  if (score >= 90) return 'Excellent';
  if (score >= 70) return 'Good';
  if (score >= 50) return 'Needs Improvement';
  return 'Poor';
};

export interface SEOReport {
  id: string;
  title: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  score: number;
}

export interface SEOStorageData {
  generalSettings: SEOSetting;
  pageSettings: PageSEO[];
  lastUpdated: string;
}

export interface SEOAnalysisReport {
  id: string;
  url: string;
  analysis: string | any; // Support both string and JSON data
  created_at: string;
}
