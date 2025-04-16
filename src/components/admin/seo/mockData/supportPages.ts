
import { PageSEO } from '../types';

export const supportPagesSEO: PageSEO[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    path: '/portfolio',
    metaTitle: 'Our Work | Drew Creative Agency Portfolio',
    metaDescription: 'Browse our portfolio of successful projects across various industries. See how we have helped businesses transform their digital presence.',
    metaKeywords: 'portfolio, creative work, design examples, case studies, projects',
    focusKeyword: 'creative agency portfolio',
    score: 90
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '/contact',
    metaTitle: 'Contact Drew Creative Agency | Get In Touch',
    metaDescription: 'Ready to start your project? Contact our team for a free consultation and quote on your next digital venture.',
    metaKeywords: 'contact, get in touch, project quote, consultation',
    focusKeyword: 'contact creative agency',
    score: 88
  },
  {
    id: 'blog',
    title: 'Blog',
    path: '/blog',
    metaTitle: 'Design Insights & Tips | Drew Creative Blog',
    metaDescription: 'Get the latest insights, tips and trends in web design, branding and digital marketing from our expert team.',
    metaKeywords: 'blog, design tips, web design trends, creative insights',
    focusKeyword: 'design insights and tips',
    score: 75
  }
];
