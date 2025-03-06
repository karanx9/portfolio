import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Karan Soni",
  description: "Explore my portfolio of QA automation and testing projects, showcasing my expertise in software quality assurance.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 