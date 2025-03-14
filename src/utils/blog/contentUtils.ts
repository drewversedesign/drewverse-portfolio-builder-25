
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

// Add a function to generate structured data for blog posts
export const generateBlogPostSchema = (post: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.description,
    "image": post.coverImage || post.image,
    "datePublished": post.date,
    "dateModified": post.updatedAt || post.date,
    "author": {
      "@type": "Person",
      "name": post.author || "DrewVerse Design"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DrewVerse Design",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drewverse.design/lovable-uploads/9d8eb58e-b3c8-4d28-afb4-0e85b24f49d9.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://drewverse.design/blog/${post.slug}`
    },
    "keywords": post.tags?.join(", ") || post.category || "website design, branding"
  };
};

// Generate breadcrumb structured data
export const generateBreadcrumbSchema = (items: Array<{label: string, path: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://drewverse.design${item.path}`
    }))
  };
};
