
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  focusKeyword: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  authorityLinks?: {
    text: string;
    url: string;
    title: string;
  }[];
}

export interface PageSEOConfig {
  home: SEOMetadata;
  about: SEOMetadata;
  services: SEOMetadata;
  portfolio: SEOMetadata;
  blog: SEOMetadata;
  contact: SEOMetadata;
}
