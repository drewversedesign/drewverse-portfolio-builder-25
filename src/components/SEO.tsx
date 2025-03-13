
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
  children?: React.ReactNode;
  publishedTime?: string;
  modifiedTime?: string;
  category?: string;
  locale?: string;
}

const SEO = ({
  title = 'DrewVerse Design - Premium Digital Agency in Uganda',
  description = 'Top website design in Kampala & branding agency in Uganda. We create stunning websites, apps, and custom website development solutions throughout Uganda. Affordable website design in Kampala and SEO-optimized solutions.',
  keywords = 'website design Kampala, branding agency Uganda, custom website development Uganda, affordable website design in Kampala, best branding services in Uganda 2025, SEO-optimized website design near me, website designer near me, build website, digital agency, web design, UX/UI design, brand identity, mobile apps',
  author = 'DrewVerse Design',
  ogImage = '/lovable-uploads/9d8eb58e-b3c8-4d28-afb4-0e85b24f49d9.png',
  ogUrl = 'https://drewverse.design/',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  structuredData,
  publishedTime,
  modifiedTime,
  category,
  locale = 'en-ug',
  children
}: SEOProps) => {
  // Construct full title with branding
  const fullTitle = title.includes('DrewVerse') ? title : `${title} | DrewVerse Design`;
  
  // Use provided canonical URL or default to ogUrl
  const canonical = canonicalUrl || ogUrl;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `https://drewverse.design${ogImage}`} />
      <meta property="og:site_name" content="DrewVerse Design" />
      
      {/* Article specific metadata */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && category && (
        <meta property="article:section" content={category} />
      )}
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage.startsWith('http') ? ogImage : `https://drewverse.design${ogImage}`} />
      
      {/* Location-specific meta tags */}
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content="Kampala" />
      
      {/* Language and locale */}
      <meta property="og:locale" content={locale} />
      <link rel="alternate" hreflang={locale} href={ogUrl} />
      
      {/* Structured data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional meta tags from children */}
      {children}
    </Helmet>
  );
};

export default SEO;
