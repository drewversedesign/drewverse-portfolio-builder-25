
import { BlogPostProps } from "../types";
import { kampalaBusinessPosts } from "./website-design/kampalaBusinessPosts";
import { localServicesPosts } from "./website-design/localServicesPosts";
import { trendsAndBestPracticesPosts } from "./ui-ux/trendsAndBestPractices";
import { seoBlogPosts } from "./seo/seoBlogPosts";

// Combine all design-related blog posts
export const designPosts: BlogPostProps[] = [
  ...kampalaBusinessPosts,
  ...localServicesPosts,
  ...trendsAndBestPracticesPosts,
  ...seoBlogPosts
];
