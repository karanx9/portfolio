import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Karan Soni",
  description: "Learn more about Karan Soni, a skilled SDET/QA expert with expertise in test automation, quality assurance, and software testing.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 