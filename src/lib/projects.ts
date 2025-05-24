export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  icon: string;
  github?: string | null;
  demo?: string | null;
  image: string;
  featured: boolean;
  stars: number;
  status: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BetterQuery",
    description: "LLM-powered query optimization and prompt rewriting infrastructure. Built with Next.js, Tailwind, and LangChain for intelligent query enhancement.",
    longDescription: "A comprehensive platform that leverages large language models to optimize database queries and rewrite prompts for better performance and accuracy. Features intelligent caching, query analysis, and automated optimization suggestions.",
    tech: ["Next.js", "Tailwind CSS", "LangChain", "TypeScript", "OpenAI API"],
    category: "AI/ML",
    icon: "better_query",
    github: "https://github.com/betterquery",
    demo: null,
    image: "/api/placeholder/600/400",
    featured: true,
    stars: 89,
    status: "Active Development"
  },
  {
    id: 2,
    title: "Q-Oracle",
    description: "Market intelligence system with real-time scraping, price tracking, and insight generation via vector embeddings and ML-based classification.",
    longDescription: "Advanced market analysis platform that combines web scraping, real-time data processing, and machine learning to provide actionable market insights. Uses vector embeddings for semantic analysis and classification algorithms for trend prediction.",
    tech: ["Python", "Vector Embeddings", "ML Classification", "Web Scraping", "Real-time Processing"],
    category: "AI/ML",
    icon: "FiDatabase",
    github: "https://github.com/rekurrenzk",
    demo: null,
    image: "/api/placeholder/600/400",
    featured: true,
    stars: 156,
    status: "Active Development"
  },
  {
    id: 3,
    title: "Botanera Genomics",
    description: "Plant breeding optimization platform using NGS pipelines and decision making systems for agricultural innovation.",
    longDescription: "Cutting-edge genomics platform that optimizes plant breeding through Next-Generation Sequencing (NGS) analysis and intelligent decision-making systems. Helps agricultural researchers make data-driven breeding decisions.",
    tech: ["NGS Pipelines", "Bioinformatics", "Python", "Decision Systems", "Genomics"],
    category: "Biotechnology",
    icon: "botanera",
    github: "https://github.com/botanera",
    demo: null,
    image: "/api/placeholder/600/400",
    featured: true,
    stars: 67,
    status: "Active Development"
  },
  {
    id: 4,
    title: "Ottoman NLP Project",
    description: "Built corpora, lexicons, and tokenization tools for historical Turkish NLP. Published research at ACL SIGTURK 2024.",
    longDescription: "Comprehensive natural language processing toolkit for Ottoman Turkish, including corpus development, lexicon creation, and specialized tokenization. Contributes to preserving and analyzing historical Turkish texts through modern NLP techniques.",
    tech: ["Python", "NLP", "Corpus Linguistics", "Tokenization", "Historical Text Processing"],
    category: "AI/ML",
    icon: "ottominer",
    github: "https://github.com/Ottoman-NLP",
    demo: null,
    image: "/ottominer.png",
    featured: true,
    stars: 234,
    status: "Completed"
  },
  {
    id: 5,
    title: "NER-dsai",
    description: "BERT-based Named Entity Recognition system for Ottoman Turkish with full pipeline: training, evaluation, and performance visualization.",
    longDescription: "Advanced NER system specifically designed for Ottoman Turkish texts using BERT architecture. Includes comprehensive training pipeline, evaluation metrics, and visualization tools for performance analysis.",
    tech: ["BERT", "PyTorch", "NER", "Ottoman Turkish", "Performance Visualization"],
    category: "AI/ML",
    icon: "FaBrain",
    github: "https://github.com/rekurrenzk/NER-dsai",
    demo: null,
    image: "/api/placeholder/600/400",
    featured: false,
    stars: 123,
    status: "Completed"
  },
  {
    id: 6,
    title: "CDLI.ai",
    description: "Applied AGI initiative building cognitive infrastructure, robotics, and intelligent systems. Operating in stealth toward neuro-symbolic integration.",
    longDescription: "Ambitious artificial general intelligence project focused on developing cognitive infrastructure and neuro-symbolic AI systems. Combines robotics, advanced AI architectures, and philosophical approaches to intelligence.",
    tech: ["AGI", "Neuro-Symbolic AI", "Robotics", "Cognitive Architecture", "Philosophy of Mind"],
    category: "AI/ML",
    icon: "cdliai",
    github: null,
    demo: "https://cdli.ai",
    image: "/api/placeholder/600/400",
    featured: true,
    stars: 45,
    status: "Active Development"
  },
  {
    id: 7,
    title: "Neural Network Visualizer",
    description: "Interactive visualization of neural network architectures with real-time training monitoring and layer-by-layer analysis.",
    longDescription: "Advanced visualization tool for understanding neural network architectures and training processes. Features interactive layer exploration, real-time training metrics, and educational components for learning deep learning concepts.",
    tech: ["React", "TensorFlow.js", "D3.js", "WebGL", "Python"],
    category: "AI/ML",
    icon: "FaNetworkWired",
    github: "https://github.com/neural-viz",
    demo: "https://neural-visualizer.demo",
    image: "/api/placeholder/600/400",
    featured: true,
    stars: 312,
    status: "Active Development"
  }
];

// Featured projects için helper function
export const getFeaturedProjects = (limit: number = 3): Project[] => {
  return projects.filter(project => project.featured).slice(0, limit);
};

// Kategori bazında projeler
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};

// Kategorileri al
export const getCategories = (): string[] => {
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  return categories;
}; 