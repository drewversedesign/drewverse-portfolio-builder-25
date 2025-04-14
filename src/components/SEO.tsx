
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
  metadata?: Array<{
    name: string;
    content: string;
  }>;
  localBusiness?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'DrewVerse Design - Professional Web Development & Design',
  description = 'DrewVerse Design specializes in modern web development, design, and digital marketing strategies that elevate your brand and drive results.',
  keywords = 'web development, web design, UI/UX, branding, digital marketing, DrewVerse Design, Uganda website design, Kampala web development',
  canonical = 'https://drewversedesign.online',
  canonicalUrl,
  ogImage = '/lovable-uploads/7ffe5de1-8359-47de-94b6-f05851a6e354.png',
  ogType = 'website',
  ogUrl,
  twitterHandle = '@drewverse',
  twitterCard = 'summary_large_image',
  structuredData,
  alternateLanguages = [],
  metadata = [],
  localBusiness = false,
}) => {
  // Format JSON-LD structured data
  const structuredDataString = structuredData
    ? JSON.stringify(structuredData)
    : JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'DrewVerse Design',
        url: 'https://drewversedesign.online',
        description:
          'Professional web development, design, and digital marketing services for businesses in Uganda and East Africa.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://drewversedesign.online/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      });

  // Local business data
  const localBusinessData = localBusiness ? JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DrewVerse Design',
    image: 'https://drewversedesign.online/lovable-uploads/9d8eb58e-b3c8-4d28-afb4-0e85b24f49d9.png',
    '@id': 'https://drewversedesign.online/#LocalBusiness',
    url: 'https://drewversedesign.online',
    telephone: '+256772653789',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kampala Road',
      addressLocality: 'Kampala',
      postalCode: '256',
      addressCountry: 'UG'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '0.3476',
      longitude: '32.5825'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/drewversedesign',
      'https://twitter.com/drewversedesign',
      'https://www.instagram.com/drewversedesign',
      'https://www.linkedin.com/company/drewversedesign'
    ],
    priceRange: '$$',
    servesCuisine: 'Digital Services'
  }) : null;

  // Get full canonical URL
  // Use canonicalUrl if provided, otherwise build from canonical
  const fullCanonicalUrl = canonicalUrl 
    ? canonicalUrl 
    : (canonical.startsWith('http')
      ? canonical
      : `https://drewversedesign.online${canonical}`);

  // Get full OG image URL
  const fullOgImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `https://drewversedesign.online${ogImage}`;

  // Get full OG URL
  const fullOgUrl = ogUrl || fullCanonicalUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Additional metadata */}
      <meta name="author" content="DrewVerse Design" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Geographic metadata */}
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content="Kampala" />
      <meta name="geo.position" content="0.3476;32.5825" />
      <meta name="ICBM" content="0.3476, 32.5825" />

      {/* Custom metadata */}
      {metadata.map(meta => (
        <meta key={meta.name} name={meta.name} content={meta.content} />
      ))}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:site_name" content="DrewVerse Design" />
      <meta property="og:locale" content="en_UG" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />
      <meta name="twitter:creator" content={twitterHandle} />

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
      
      {/* Local Business Structured Data if enabled */}
      {localBusiness && (
        <script type="application/ld+json">{localBusinessData}</script>
      )}
    </Helmet>
  );
};

export default SEO;
