import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "sales-analysis",
    title: "Sales Analysis",
    description: "Exploratory analysis of sales data with Python.",
    image: "/images/projects/project-01.webp",
    tags: ["Python", "Pandas", "Visualization"],
    url: "#",
  },
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation",
    description: "Customer clustering and segment analysis.",
    image: "/images/projects/project-02.webp",
    tags: ["Python", "Clustering", "Statistics"],
    url: "#",
  },
  {
    slug: "business-dashboard",
    title: "Business Dashboard",
    description: "Interactive dashboard for business performance analysis.",
    image: "/images/projects/project-03.webp",
    tags: ["Tableau", "Dashboard", "Analytics"],
    url: "#",
  },
];