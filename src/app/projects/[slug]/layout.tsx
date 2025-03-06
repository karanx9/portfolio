import { Metadata } from "next";
import { products } from "@/constants/products";
import { Product } from "@/types/products";

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const product = products.find((p) => p.slug === slug) as Product | undefined;

  if (product) {
    return {
      title: `${product.title} | Karan Soni`,
      description: product.description,
    };
  }

  return {
    title: "Project Not Found | Karan Soni",
    description: "The requested project could not be found.",
  };
}

export default function ProjectLayout({ children }: Props) {
  return <>{children}</>;
} 