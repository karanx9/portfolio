"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/images/Photo1.png"
                alt="Karan Soni"
                width={120}
                height={120}
                className="rounded-full border-4 border-white shadow-lg"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg"
              >
                👋
              </motion.div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Hello, I&apos;m Karan Soni
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <span className="text-xl md:text-2xl text-gray-600">
              Software Development Engineer in Test (SDET)
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            I&apos;m passionate about <Highlight>Quality Analysis of Software and Web Applications</Highlight>,
            dedicated to delivering bug-free solutions that enhance the user experience.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-4 mb-8"
          >
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">1+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">10+</div>
              <div className="text-gray-600">Projects Tested</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="https://github.com/karanx9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
              View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/karan-soni-6263412b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <FaLinkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Projects Section */}
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
        >
          What I&apos;ve been working on
        </Heading>
        <Products />
        <TechStack />
      </div>
    </Container>
  );
}
