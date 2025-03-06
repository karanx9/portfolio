"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Software Testing in Automation (SDET)",
      institution: "Masai",
      period: "May 2024 - September 2024",
      description: "Specialized training in Software Development Engineering in Test, focusing on automation frameworks and quality assurance methodologies."
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Dr. Babasaheb Ambedkar Marathwada University",
      period: "February 2020 - July 2023",
      description: "Core computer science education covering programming fundamentals, data structures, algorithms, and software engineering principles."
    }
  ];

  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Heading as="h1" className="text-4xl font-bold mb-6">
            Education
          </Heading>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic journey and professional development
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline connector */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800" />
              )}
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <FaGraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                      <FaUniversity className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
} 