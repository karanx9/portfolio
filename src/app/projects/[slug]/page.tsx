import { Metadata } from "next";
import { products } from "@/constants/products";
import { Product } from "@/types/products";

type Props = {
  params: { slug: string };  // Destructure 'slug' from params
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params; // Extract slug from params

  // Find the product based on the slug
  const product = products.find((p) => p.slug === slug) as Product | undefined;

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | John Doe",
      description:
        "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    };
  }
}
