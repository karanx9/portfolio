"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import { motion } from "framer-motion";
import { FaBriefcase, FaDownload } from 'react-icons/fa';

export default function Resume() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">💼</span>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my professional journey and achievements in software quality assurance and test automation.
          </p>
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1EzvZHyWjXBXeR43bMnccAr1ucaEue1kh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        <WorkHistory />
      </motion.div>
    </Container>
  );
}
