import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Karan Soni",
  description: "Educational background and qualifications of Karan Soni, including specialization in Software Testing and Automation (SDET)."
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 