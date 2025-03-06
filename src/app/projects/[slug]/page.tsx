// src/app/projects/[slug]/page.tsx
import { Metadata } from "next";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

type Props = {
  params: { slug: string };  // Destructure 'slug' from params
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params; // Extract slug from params

  // Find the product based on the slug, ensuring the product has a slug
  const product = products.find((p) => p.slug === slug) as Product | undefined;

  if (product) {
    return {
      title: `${product.title} | Karan Soni`,
      description: product.description,
    };
  } else {
    return {
      title: "Project Not Found | Karan Soni",
      description: "The requested project could not be found.",
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
      <Container>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600">The project you're looking for doesn't exist.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12">
        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.stack?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
              View Source
            </a>
            {product.demoUrl && (
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Images */}
        {product.images && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={`${product.title} screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}

        {/* Project Content */}
        <div className="prose prose-lg max-w-none">
          {product.content}
        </div>
      </div>
    </Container>
  );
}
