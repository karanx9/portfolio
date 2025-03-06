"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-4 block">⚡</span>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my featured projects that demonstrate my expertise in QA automation, 
            testing frameworks, and quality assurance. Each project showcases different aspects 
            of my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <Products />
      </div>
    </Container>
  );
}
