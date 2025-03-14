
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BlogPostProps } from '../components/BlogPost';
import BlogHeader from '../components/blog/BlogHeader';
import BlogContent from '../components/blog/BlogContent';
import RelatedPosts from '../components/blog/RelatedPosts';
import BlogNotFound from '../components/blog/BlogNotFound';
import SocialShare from '../components/blog/SocialShare';
import SEO from '../components/SEO';
import { blogPosts, calculateReadingTime, findRelatedPosts, generateBlogPostSchema, generateBreadcrumbSchema } from '../utils/blog';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostProps | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostProps[]>([]);
  const [readingTime, setReadingTime] = useState<number>(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the current post by slug
    const currentPost = blogPosts.find((post) => post.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Calculate reading time
      const time = calculateReadingTime(currentPost.content);
      setReadingTime(time);
      
      // Get related posts
      const related = findRelatedPosts(currentPost, blogPosts);
      setRelatedPosts(related);
    }
  }, [slug]);
  
  if (!post) {
    return <BlogNotFound />;
  }
  
  // Get the current URL for sharing
  const currentUrl = window.location.href;
  
  // Generate structured data for the blog post
  const postSchema = generateBlogPostSchema(post);
  
  // Generate breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: post.title, path: `/blog/${post.slug}` }
  ]);
  
  // Combined structured data
  const structuredData = [postSchema, breadcrumbSchema];
  
  // Custom metadata for blog post
  const blogMetadata = [
    { name: 'article:published_time', content: post.date },
    { name: 'article:author', content: post.author || 'DrewVerse Design' },
    { name: 'article:section', content: post.category },
    { name: 'article:tag', content: post.tags?.join(', ') || post.category }
  ];
  
  return (
    <div className="min-h-screen bg-drew-black text-white">
      <SEO 
        title={`${post.title} | DrewVerse Design Blog`}
        description={post.excerpt}
        keywords={`${post.category}, ${post.tags?.join(', ') || ''}, blog, article, drewverse design, drew verse design, uganda web design`}
        ogType="article"
        ogImage={post.image}
        ogUrl={`https://drewversedesign.online/blog/${post.slug}`}
        structuredData={postSchema}
        metadata={blogMetadata}
      />
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <BlogHeader post={post} readingTime={readingTime} />
            <BlogContent post={post} />
            <SocialShare title={post.title} url={currentUrl} />
            <RelatedPosts relatedPosts={relatedPosts} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
