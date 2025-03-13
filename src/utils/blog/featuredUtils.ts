
import { BlogPostProps } from "./types";
import { blogPosts } from "./blogData";

// Get featured posts
export const getFeaturedPosts = (limit: number = 3): BlogPostProps[] => {
  return blogPosts
    .filter(post => post.featured)
    .slice(0, limit);
};

// Get trending posts
export const getTrendingPosts = (limit: number = 4): BlogPostProps[] => {
  return blogPosts
    .filter(post => post.trending)
    .slice(0, limit);
};
