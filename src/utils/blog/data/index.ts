
import { BlogPostProps } from "../types";
import { designPosts } from "./designPosts";
import { developmentPosts } from "./developmentPosts";
import { businessPosts } from "./businessPosts";
import { marketingPosts } from "./marketingPosts";
import { ecommercePosts } from "./ecommercePosts";
import { brandingPosts } from "./brandingPosts";
import { techPosts } from "./techPosts";
import { sustainabilityPosts } from "./sustainabilityPosts";
import { web3Posts } from "./web3Posts";

// Combine all blog posts from different category files
export const blogPosts: BlogPostProps[] = [
  ...designPosts,
  ...developmentPosts,
  ...businessPosts,
  ...marketingPosts,
  ...ecommercePosts,
  ...brandingPosts,
  ...techPosts,
  ...sustainabilityPosts,
  ...web3Posts
].sort((a, b) => a.id - b.id);  // Sort by ID to maintain original order
