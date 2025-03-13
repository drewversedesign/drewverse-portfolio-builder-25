
import { BlogPostProps } from "./types";
import { blogPosts } from "./blogData";

// All available categories extracted from blog posts
export const getAllCategories = (): string[] => {
  const categories = blogPosts.map(post => post.category);
  return ['All', ...Array.from(new Set(categories))].sort();
};
