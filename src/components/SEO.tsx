
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  children?: React.ReactNode;
}

const SEO = ({
  title = 'DrewVerse Design - Premium Digital Agency',
  description = 'Innovative solutions for your digital needs. We create stunning websites, apps, and digital experiences that transform ideas into digital excellence.',
  keywords = 'digital agency, web design, UX/UI design, brand identity, mobile apps, premium design studio',
  author = 'DrewVerse Design',
  ogImage = '/og-image.png',
  ogUrl = 'https://drewverse.design/',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  children
}: SEOProps) => {
  // Construct full title
  const fullTitle = title.includes('DrewVerse') ? title : `${title} | DrewVerse Design`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="DrewVerse Design" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional meta tags from children */}
      {children}
    </Helmet>
  );
};

export default SEO;
