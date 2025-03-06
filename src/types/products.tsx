import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  slug: string;
  description: string;
  image: string;
  images?: string[];
  stack?: string[];
  githubUrl?: string;
  demoUrl?: string;
  content?: string;
};

