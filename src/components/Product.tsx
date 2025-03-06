"use client";
import { Product as ProductType } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Product = ({ product }: { product: ProductType }) => {
  // Set activeImage to product.image initially, or fall back to the first image in product.images
  const [activeImage, setActiveImage] = useState<string>(
    product.images && product.images.length > 0 ? product.images[0] : product.image
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Link href={`/projects/${product.slug}`}>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={activeImage}
                alt={product.title}
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          {product.images && product.images.length > 0 && (
            <div className="flex gap-2 mt-4">
              {[product.image, ...product.images].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === img
                      ? "border-blue-500"
                      : "border-transparent hover:border-blue-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} preview ${idx + 1}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1">
          <Link href={`/projects/${product.slug}`}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {product.title}
            </h3>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {product.stack?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {product.githubUrl && (
              <a
                href={product.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm"
              >
                <FaGithub className="w-4 h-4" />
                View Source
              </a>
            )}
            {product.demoUrl && (
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
