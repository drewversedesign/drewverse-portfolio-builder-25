
import { BlogPostProps } from "./types";

// Helper function to calculate reading time in minutes
export const calculateReadingTime = (content: string): number => {
  // Average reading speed: 200 words per minute
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
};

// Find related posts based on category or content similarity
export const findRelatedPosts = (
  currentPost: BlogPostProps,
  allPosts: BlogPostProps[],
  limit: number = 3
): BlogPostProps[] => {
  // Filter out the current post and posts that are already related
  const otherPosts = allPosts.filter(
    (post) => post.id !== currentPost.id
  );
  
  // First try to find posts with the same category
  let sameCategoryPosts = otherPosts.filter(
    (post) => post.category === currentPost.category
  );
  
  // If we don't have enough posts with the same category, add some random posts
  if (sameCategoryPosts.length < limit) {
    const remainingPosts = otherPosts.filter(
      (post) => !sameCategoryPosts.includes(post)
    );
    
    // Shuffle the remaining posts to get random ones
    const shuffled = [...remainingPosts].sort(() => 0.5 - Math.random());
    
    // Add random posts until we reach the limit
    sameCategoryPosts = [
      ...sameCategoryPosts,
      ...shuffled.slice(0, limit - sameCategoryPosts.length)
    ];
  }
  
  // Return the limited number of related posts
  return sameCategoryPosts.slice(0, limit);
};

// Generate structured data for blog posts with enhanced SEO
export const generateBlogPostSchema = (post: BlogPostProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date, // Since updatedAt doesn't exist, use date instead
    "author": {
      "@type": "Person",
      "name": post.author || "DrewVerse Design"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DrewVerse Design",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drewversedesign.online/lovable-uploads/9d8eb58e-b3c8-4d28-afb4-0e85b24f49d9.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://drewversedesign.online/blog/${post.slug}`
    },
    "keywords": post.tags?.join(", ") || post.category || "website design, branding",
    "articleSection": post.category,
    "wordCount": post.content ? post.content.split(/\s+/).length : 0,
    "inLanguage": "en-UG",
    "isAccessibleForFree": "True",
    "isPartOf": {
      "@type": "WebSite",
      "name": "DrewVerse Design",
      "url": "https://drewversedesign.online"
    }
  };
};

// Generate breadcrumb structured data with improved SEO
export const generateBreadcrumbSchema = (items: Array<{label: string, path: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://drewversedesign.online${item.path}`
    }))
  };
};

// Generate FAQ structured data for improved SEO
export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate service structured data
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "DrewVerse Design",
      "url": "https://drewversedesign.online"
    },
    "url": `https://drewversedesign.online${service.url}`,
    "image": service.image || "https://drewversedesign.online/lovable-uploads/9d8eb58e-b3c8-4d28-afb4-0e85b24f49d9.png",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "0.3476",
        "longitude": "32.5825"
      },
      "geoRadius": "100000"
    },
    "serviceType": service.name
  };
};
