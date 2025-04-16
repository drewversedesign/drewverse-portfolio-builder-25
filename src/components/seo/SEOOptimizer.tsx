
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOMetadata } from '@/utils/seo/types';

interface SEOOptimizerProps extends SEOMetadata {
  path: string;
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  focusKeyword,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  authorityLinks,
  path,
  children
}) => {
  const fullCanonicalUrl = canonicalUrl || `https://drewversedesign.online${path}`;
  const fullOgImageUrl = ogImage?.startsWith('http') 
    ? ogImage 
    : `https://drewversedesign.online${ogImage}`;

  // Structured data for the page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": fullCanonicalUrl,
    "image": fullOgImageUrl,
    "keywords": keywords.join(", ")
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href={fullCanonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={fullCanonicalUrl} />
        <meta property="og:image" content={fullOgImageUrl} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullOgImageUrl} />
        
        {/* Focus Keyword Meta Tag */}
        <meta name="focus-keyword" content={focusKeyword} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Authority Links Section */}
      {authorityLinks && authorityLinks.length > 0 && (
        <div className="authority-links mt-8 text-sm text-gray-600">
          <h2 className="text-lg font-semibold mb-4">Additional Resources</h2>
          <ul className="space-y-2">
            {authorityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-drew-purple hover:underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {children}
    </>
  );
};

export default SEOOptimizer;
