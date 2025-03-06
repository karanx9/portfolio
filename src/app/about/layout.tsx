import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Karan Soni",
  description: "Dynamic SDET/QA expert with expertise in test automation, API testing, and quality assurance. Experienced in Selenium, Appium, and various testing frameworks."
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 