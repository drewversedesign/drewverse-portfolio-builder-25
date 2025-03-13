
import { BlogPostProps } from "./types";

// Calculate reading time (very rough estimate: 200 words per minute)
export const calculateReadingTime = (content: string = ''): number => {
  const wordCount = content.split(/\s+/).length || 0;
  return Math.max(1, Math.ceil(wordCount / 200));
};

// Find related posts (based on category)
export const findRelatedPosts = (currentPost: BlogPostProps, allPosts: BlogPostProps[], limit: number = 3): BlogPostProps[] => {
  // First try to find posts with the same category
  const sameCategory = allPosts.filter(post => 
    post.id !== currentPost.id && 
    post.category === currentPost.category
  );
  
  // If we don't have enough posts with the same category, add some random ones
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  
  // Add other posts that aren't the current one
  const otherPosts = allPosts.filter(post => 
    post.id !== currentPost.id && 
    post.category !== currentPost.category
  );
  
  // Combine same category posts with other posts
  return [...sameCategory, ...otherPosts].slice(0, limit);
};
