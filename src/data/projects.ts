import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "dear_neighbour",
    title: "Dear Neighbour",
    description: "Exploring sales, products, customers, stores, and business performance.",
    image: "/images/projects/project_img_dear_neighbour.png",
    tags: ["Power BI", "Dashboard", "Python"],
    url: "https://github.com/TAbramovskaya/dear-neighbour",
    contentType: "markdown",
  },
  {
    slug: "project-markdown",
    title: "Customer Segmentation",
    description: "Test project with markdown and notebook.",
    image: "/images/projects/project_img_project_markdown.png",
    tags: ["Python", "Clustering", "Statistics"],
    url: "#",
    contentType: "notebook",
  },
  {
    slug: "multi-channel",
    title: "One does not simply mark all messages as read",
    description: "One does not simply mark all messages as read.",
    image: "/images/projects/project_img_multi-channel.png",
    tags: ["Tableau", "Dashboard", "Analytics"],
    url: "https://github.com/TAbramovskaya/sml-multi-channel-communication/",
    contentType: "markdown",
  },
];