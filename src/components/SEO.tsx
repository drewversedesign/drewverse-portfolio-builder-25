
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterHandle?: string;
  twitterCard?: string;
  structuredData?: object;
  alternateLanguages?: Array<{
    lang: string;
    href: string;
  }>;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Drew Creative Agency - Professional Web Development & Design',
  description = 'Drew Creative Agency specializes in modern web development, design, and digital marketing strategies that elevate your brand and drive results.',
  keywords = 'web development, web design, UI/UX, branding, digital marketing, Drew Creative',
  canonical = 'https://www.drewcreative.com',
  canonicalUrl,
  ogImage = '/og-image.png',
  ogType = 'website',
  ogUrl,
  twitterHandle = '@drewcreative',
  twitterCard = 'summary_large_image',
  structuredData,
  alternateLanguages = [],
}) => {
  // Format JSON-LD structured data
  const structuredDataString = structuredData
    ? JSON.stringify(structuredData)
    : JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Drew Creative Agency',
        url: 'https://www.drewcreative.com',
        description:
          'Professional web development, design, and digital marketing services for businesses of all sizes.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.drewcreative.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      });

  // Get full canonical URL
  // Use canonicalUrl if provided, otherwise build from canonical
  const fullCanonicalUrl = canonicalUrl 
    ? canonicalUrl 
    : (canonical.startsWith('http')
      ? canonical
      : `https://www.drewcreative.com${canonical}`);

  // Get full OG image URL
  const fullOgImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `https://www.drewcreative.com${ogImage}`;

  // Get full OG URL
  const fullOgUrl = ogUrl || fullCanonicalUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:site_name" content="Drew Creative Agency" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />

      {/* Alternate Languages */}
      {alternateLanguages.map((alt) => (
        <link 
          key={alt.lang} 
          rel="alternate" 
          hrefLang={alt.lang} 
          href={alt.href} 
        />
      ))}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{structuredDataString}</script>
    </Helmet>
  );
};

export default SEO;
