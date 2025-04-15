
import { BlogPostProps } from "../../types";
import { placeholderImages } from "../../../imageUtils";

export const trendsAndBestPracticesPosts: BlogPostProps[] = [
  {
    id: 5,
    title: "10 UI/UX Design Trends to Watch in 2023",
    excerpt: "Stay ahead of the curve with these emerging trends in user interface and experience design.",
    content: `// ... keep existing code (UI/UX trends content)`,
    author: "Alex Chen",
    date: "Oct 15, 2023",
    category: "Design",
    image: placeholderImages.portfolio1,
    slug: "ui-ux-design-trends-2023",
    featured: false,
    trending: false,
  },
  {
    id: 13,
    title: "Effective Mobile-First Design Strategies",
    excerpt: "Master the principles of mobile-first design to create exceptional user experiences across all device sizes.",
    content: `// ... keep existing code (mobile-first design content)`,
    author: "Naomi Park",
    date: "Jan 22, 2024",
    category: "Design",
    image: placeholderImages.portfolio9,
    slug: "mobile-first-design-strategies",
    featured: false,
    trending: false,
  }
];
