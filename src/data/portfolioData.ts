
// Portfolio data for website designs
export const projectsData = [
  {
    id: 1,
    title: "InkMaster Tattoo Studio",
    category: "Web Design",
    image: "/lovable-uploads/7f1bdb8b-9567-4035-b245-46cef0683176.png",
    description: "Complete website for a professional tattoo studio with portfolio and booking functionality.",
    link: "/portfolio/tattoo-studio",
    clientName: "InkMaster Studios",
    completionDate: "March 2023",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Node.js"],
    services: ["UI/UX Design", "Front-end Development", "CMS Integration"]
  },
  {
    id: 2,
    title: "Alex Johnson Design Portfolio",
    category: "UI/UX Design",
    image: "/lovable-uploads/1f3b9f2c-9bf4-49eb-8512-827343264840.png",
    description: "Personal portfolio website for a UI/UX designer with interactive elements and skill showcase.",
    link: "/portfolio/creative-portfolio",
    clientName: "Alex Johnson Design",
    completionDate: "April 2023",
    technologies: ["React", "GSAP", "Three.js", "TailwindCSS"],
    services: ["Creative Direction", "Interactive Design", "Front-end Development"]
  },
  {
    id: 3,
    title: "ModernSpace Furniture Store",
    category: "E-commerce",
    image: "/lovable-uploads/25e54975-9718-4b57-a5c5-e13af9e13277.png",
    description: "Minimalist e-commerce site for a modern furniture brand with unique product visualization.",
    link: "/portfolio/furniture-collection",
    clientName: "ModernSpace Furniture",
    completionDate: "February 2023",
    technologies: ["Next.js", "Shopify API", "TailwindCSS", "Stripe"],
    services: ["E-commerce Development", "Payment Integration", "Product Photography"]
  },
  {
    id: 4,
    title: "Global Hope Foundation",
    category: "Non-profit",
    image: "/lovable-uploads/9ca6c79d-0038-44cb-84a8-826f90f37710.png",
    description: "Global aid network website featuring donation campaigns and community programs.",
    link: "/portfolio/charity-website",
    clientName: "Global Hope Foundation",
    completionDate: "May 2023",
    technologies: ["React", "Firebase", "Stripe", "TailwindCSS"],
    services: ["Donation System", "Campaign Management", "Volunteer Portal"]
  },
  {
    id: 5,
    title: "Sarah Williams Design Studio",
    category: "UI/UX Design",
    image: "/lovable-uploads/f30ebe5b-ddbb-48e6-bb0e-c815ab1635d2.png",
    description: "Portfolio website for a product designer with service offerings and experience timeline.",
    link: "/portfolio/product-designer",
    clientName: "Sarah Williams Design",
    completionDate: "June 2023",
    technologies: ["React", "Framer Motion", "Sanity CMS", "TailwindCSS"],
    services: ["Interactive Design", "CMS Setup", "SEO Optimization"]
  },
  {
    id: 6,
    title: "TechUniverse Electronics",
    category: "E-commerce",
    image: "/lovable-uploads/6f5c0670-0645-4624-a474-e26ed3215cac.png",
    description: "Feature-rich electronics e-commerce platform with product categories and promotions.",
    link: "/portfolio/electronics-store",
    clientName: "TechUniverse",
    completionDate: "July 2023",
    technologies: ["Next.js", "WooCommerce", "TailwindCSS", "Stripe"],
    services: ["E-commerce Development", "Inventory Management", "Payment Processing"]
  },
  {
    id: 7,
    title: "Culinary Masters Institute",
    category: "Education",
    image: "/lovable-uploads/18f77782-e5a0-4601-ba99-28b71b8b90d2.png",
    description: "Culinary education platform featuring courses from professional chefs and interactive lessons.",
    link: "/portfolio/cooking-school",
    clientName: "Culinary Masters Institute",
    completionDate: "August 2023",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    services: ["Learning Management System", "Video Integration", "Membership Portal"]
  },
  {
    id: 8,
    title: "GamersHaven Shop",
    category: "E-commerce",
    image: "/lovable-uploads/9af1d2e5-2854-4fe7-b508-fa1014aad445.png",
    description: "Online store for gaming equipment and accessories with dark-themed UI.",
    link: "/portfolio/gaming-shop",
    clientName: "GamersHaven",
    completionDate: "September 2023",
    technologies: ["Next.js", "Shopify API", "TailwindCSS", "Stripe"],
    services: ["UI/UX Design", "E-commerce Development", "SEO Optimization"]
  },
  {
    id: 9,
    title: "PureSound Wireless Headphones",
    category: "Product Landing",
    image: "/lovable-uploads/cd4a8928-d83b-469f-b461-02944638cb38.png",
    description: "Premium wireless headphones product page with immersive audio technology showcase and features comparison.",
    link: "/portfolio/wireless-headphones",
    clientName: "PureSound Audio",
    completionDate: "May 2024",
    technologies: ["React", "GSAP", "Three.js", "TailwindCSS"],
    services: ["Product Visualization", "3D Modeling", "Interactive Design", "E-commerce Integration"]
  },
  {
    id: 10,
    title: "HomeDesign Furniture Marketplace",
    category: "E-commerce",
    image: "/lovable-uploads/cf7289f9-2740-4d85-be2d-c838014cce83.png",
    description: "Modern furniture e-commerce marketplace with categorized collections and special offers.",
    link: "/portfolio/furniture-marketplace",
    clientName: "HomeDesign Collective",
    completionDate: "June 2024",
    technologies: ["Next.js", "Shopify API", "TailwindCSS", "Stripe"],
    services: ["E-commerce Development", "Inventory Management", "Payment Processing"]
  }
];

// Get unique categories from project data
export const portfolioCategories = ["All", ...new Set(projectsData.map(project => project.category))];

// Client testimonials
export const clientTestimonials = [
  {
    id: 1,
    name: "James Wilson",
    title: "CEO at Techmart",
    testimonial: "The team delivered exceptional work that exceeded our expectations. Their attention to detail and creative approach helped our e-commerce site stand out from competitors.",
    rating: 5,
    image: "/lovable-uploads/84374ba6-3462-4401-ad9e-186f427067dd.png"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Marketing Director at ModernSpace",
    testimonial: "Their design expertise transformed our brand's digital presence. The website they created perfectly captures our aesthetic while providing a seamless shopping experience for our customers.",
    rating: 5,
    image: "/lovable-uploads/417b86ce-ee86-46be-855a-cd8867e83dcd.png"
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Founder of SocialPulse",
    testimonial: "Working with this team was a game-changer for our SaaS platform. They understood our vision and built an intuitive dashboard that our clients love using. Highly recommended!",
    rating: 4,
    image: "/lovable-uploads/2e0711d4-b3c1-44b6-9c9a-87f6ea9fac06.png"
  }
];

// Project analytics and success metrics
export const projectMetrics = {
  deliveryRate: 94,
  clientReturnRate: 87,
  satisfactionRate: 98,
  projectSuccessRate: 96,
  totalCompletedProjects: 87,
  averageProjectDuration: "6 weeks"
};

// Services offered in relation to portfolio projects
export const portfolioServices = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Creating beautiful, functional websites that deliver exceptional user experiences.",
    icon: "Monitor",
    projects: 42
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Building online stores that drive sales and provide seamless shopping experiences.",
    icon: "ShoppingCart",
    projects: 28
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces and engaging user experiences that convert visitors.",
    icon: "Palette",
    projects: 35
  },
  {
    id: 4,
    title: "Web Applications",
    description: "Developing custom web applications that solve complex business challenges.",
    icon: "Code",
    projects: 19
  }
];
