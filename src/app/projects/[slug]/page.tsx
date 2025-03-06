"use client";

// src/app/projects/[slug]/page.tsx
import { Metadata } from "next";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";

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
export default function Project({ params }: Props) {
  const { slug } = params;

  // Find the product based on the slug, ensuring the product has a slug
  const product = products.find(
    (p) => p.slug === slug
  ) as Product | undefined;  // Ensure that we only access products with a slug

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
          >
            ← Back to Projects
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <Heading className="text-3xl font-bold mb-4">{product.title}</Heading>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {product.description || "This project doesn&apos;t have a description yet."}
            </p>

            {/* Project Image */}
            <div className="mb-8">
              <Image
                src={product.image}
                alt={product.title}
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {product.githubUrl && (
                <a
                  href={product.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <FaGithub className="w-5 h-5" />
                  View Source
                </a>
              )}
              {product.demoUrl && (
                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
