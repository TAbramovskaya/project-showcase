export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  contentType: "markdown" | "notebook";
};