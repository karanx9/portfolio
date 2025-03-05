// src/app/projects/[slug]/page.tsx
import { Metadata } from "next";
import { products } from "@/constants/products";
import { Product } from "@/types/products";

type Props = {
  params: { slug: string };  // Destructure 'slug' from params
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params; // Extract slug from params

  // Find the product based on the slug, ensuring the product has a slug
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

// This is the Page Component for dynamic route [slug]
export default function ProjectPage({ params }: Props) {
  const { slug } = params;

  // Find the product based on the slug, ensuring the product has a slug
  const product = products.find(
    (p) => p.slug && p.slug === slug
  ) as Product | undefined;  // Ensure that we only access products with a slug

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {/* You can add more content here */}
    </div>
  );
}
