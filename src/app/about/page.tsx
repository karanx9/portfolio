"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBug, FaTools, FaUserCheck } from 'react-icons/fa';
import { TbTestPipe } from 'react-icons/tb';
import { Metadata } from "next";
import Image from "next/image";

import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Karan Soni",
  description:
    "Karan Soni is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function AboutPage() {
  const skills = [
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      title: "Test Automation",
      description: "Expertise in Selenium WebDriver, TestNG, and BDD Cucumber for robust automated testing frameworks."
    },
    {
      icon: <FaBug className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Strong background in manual testing, regression testing, and defect management."
    },
    {
      icon: <TbTestPipe className="w-6 h-6" />,
      title: "Test Planning",
      description: "Skilled in creating comprehensive test plans and test cases for optimal coverage."
    },
    {
      icon: <FaTools className="w-6 h-6" />,
      title: "Tools & Technologies",
      description: "Proficient in Python, Java, Git, and various testing tools and frameworks."
    }
  ];

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">💡</span>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate SDET professional dedicated to ensuring software quality and reliability
            through innovative testing solutions and automation strategies.
          </p>
        </div>

        {/* Professional Summary */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Summary</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a dynamic SDET/QA expert with a strong foundation in Python and test automation. 
              My expertise lies in designing and executing algorithmic test scenarios, with a particular 
              focus on creating efficient and maintainable test frameworks. I excel at leveraging 
              Generative AI and quickly adapting to new technologies, while maintaining strong 
              collaboration and documentation practices to ensure high-quality software delivery.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-blue-600">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Achievements</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <FaUserCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-600">Reduced manual testing effort by 70% through implementation of automated test frameworks</p>
            </li>
            <li className="flex items-start space-x-3">
              <FaUserCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-600">Successfully delivered comprehensive test coverage for critical business applications</p>
            </li>
            <li className="flex items-start space-x-3">
              <FaUserCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-600">Implemented efficient test automation solutions using Selenium WebDriver and TestNG</p>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </Container>
  );
}
