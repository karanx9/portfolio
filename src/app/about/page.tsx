"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { motion } from "framer-motion";
import { FaCode, FaTools, FaBug, FaRobot } from "react-icons/fa";

export default function About() {
  const skills = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Test Automation",
      description: "Expert in Selenium and Appium frameworks for web and mobile testing"
    },
    {
      icon: <FaTools className="w-6 h-6" />,
      title: "API Testing",
      description: "Proficient in Postman and REST API testing methodologies"
    },
    {
      icon: <FaBug className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Thorough testing processes and defect management"
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "Test Frameworks",
      description: "Experience with TestNG and other testing frameworks"
    }
  ];

  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" className="text-4xl font-bold mb-8 text-center">
            About Me
          </Heading>
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I am a <Highlight>Dynamic SDET/QA Expert</Highlight> with a passion for ensuring software quality through automated testing and comprehensive quality assurance processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
