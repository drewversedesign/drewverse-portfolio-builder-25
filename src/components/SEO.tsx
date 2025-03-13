
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
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
  canonical = 'https://www.drewcreative.com',
  ogImage = '/og-image.png',
  ogType = 'website',
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
  const fullCanonicalUrl = canonical.startsWith('http')
    ? canonical
    : `https://www.drewcreative.com${canonical}`;

  // Get full OG image URL
  const fullOgImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `https://www.drewcreative.com${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
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
