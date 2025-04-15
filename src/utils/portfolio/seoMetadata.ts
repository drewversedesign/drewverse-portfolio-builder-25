
// SEO metadata for portfolio projects
export const projectSEOMetadata = {
  portfolio: {
    title: "Award-Winning Web Design Portfolio | DrewVerse Design Kampala",
    description: "Explore our diverse portfolio of stunning websites, mobile apps, and digital solutions. See how we've helped businesses in Uganda transform their online presence.",
    keywords: "web design portfolio, Uganda web development, Kampala web design, mobile app portfolio, UI/UX design showcase",
  },
  categories: {
    "Web Design": {
      title: "Professional Website Design Portfolio | Custom Web Solutions",
      description: "View our collection of custom-designed websites that deliver exceptional user experiences and drive business growth. See our web design expertise in action.",
      keywords: "website design, custom web development, responsive design, business websites, e-commerce solutions",
    },
    "UI/UX Design": {
      title: "UI/UX Design Portfolio | User-Centered Digital Experiences",
      description: "Discover our user interface and experience design work. See how we create intuitive, engaging digital experiences that delight users and achieve business goals.",
      keywords: "UI design, UX design, user interface, user experience, interaction design",
    },
    "E-commerce": {
      title: "E-commerce Website Portfolio | Online Store Development",
      description: "Browse our portfolio of successful online stores and e-commerce solutions. See how we help businesses sell effectively online with custom e-commerce websites.",
      keywords: "e-commerce website, online store design, e-commerce development, shopping cart integration",
    },
    "Product Landing": {
      title: "Product Landing Page Portfolio | Conversion-Focused Design",
      description: "Explore our collection of high-converting product landing pages. See how we create compelling digital experiences that showcase products effectively.",
      keywords: "landing page design, product showcase, conversion optimization, product marketing",
    },
  }
};

export const generateProjectSEO = (project: {
  title: string;
  category: string;
  description: string;
}) => {
  return {
    title: `${project.title} | DrewVerse Design Case Study`,
    description: project.description.length > 160 
      ? `${project.description.substring(0, 157)}...` 
      : project.description,
    keywords: `${project.category.toLowerCase()}, portfolio project, case study, web design Uganda, ${project.title.toLowerCase()}`
  };
};
