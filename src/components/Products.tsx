"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';

export const Products = () => {
  return (
    <div className="grid grid-cols-1 gap-12">
      {products.map((product: Product, idx: number) => (
        <motion.div
          key={product.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-[300px]"
              />
            </div>
            <div className="flex-1">
              <Heading as="h3" className="text-xl font-bold text-gray-800 mb-3">
                {product.title}
              </Heading>
              <Paragraph className="text-gray-600 mb-4">
                {product.description}
              </Paragraph>

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

              <div className="flex gap-4">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm"
                >
                  <FaGithub className="w-4 h-4" />
                  View Source
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
