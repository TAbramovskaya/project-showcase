import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "sales_analysis",
    title: "Sales Analysis",
    description: "Exploratory analysis of sales data with Python.",
    image: "/images/projects/project-01.webp",
    tags: ["Python", "Pandas", "Visualization"],
    url: "#",
  },
  {
    slug: "customer_segmentation",
    title: "Customer Segmentation",
    description: "Customer clustering and segment analysis.",
    image: "/images/projects/project-02.webp",
    tags: ["Python", "Clustering", "Statistics"],
    url: "#",
  },
  {
    slug: "multi-channel",
    title: "One does not simply mark all messages as read",
    description: "One does not simply mark all messages as read.",
    image: "/images/projects/project-03.webp",
    tags: ["Tableau", "Dashboard", "Analytics"],
    url: "https://github.com/TAbramovskaya/sml-multi-channel-communication/",
  },
];