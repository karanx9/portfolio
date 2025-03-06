"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { motion } from "framer-motion";
import { FaCode, FaTools, FaBug, FaRobot, FaCheckCircle, FaCertificate } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const skills = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Test Automation",
      description: "Expert in Selenium and Appium frameworks for web and mobile testing",
      details: ["Selenium WebDriver", "Appium", "TestNG", "Cucumber BDD"]
    },
    {
      icon: <FaTools className="w-6 h-6" />,
      title: "API Testing",
      description: "Proficient in Postman and REST API testing methodologies",
      details: ["Postman", "REST APIs", "API Automation", "Performance Testing"]
    },
    {
      icon: <FaBug className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Thorough testing processes and defect management",
      details: ["Test Planning", "Test Cases", "Bug Tracking", "Quality Metrics"]
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "Test Frameworks",
      description: "Experience with TestNG and other testing frameworks",
      details: ["TestNG", "JUnit", "Maven", "Jenkins"]
    }
  ];

  const achievements = [
    {
      title: "Test Automation Success",
      description: "Reduced manual testing effort by 70% through implementation of automated test frameworks"
    },
    {
      title: "Quality Improvement",
      description: "Achieved 95% test coverage in critical business applications"
    },
    {
      title: "Process Optimization",
      description: "Streamlined QA processes reducing testing cycle time by 40%"
    }
  ];

  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12">
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
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/images/Photo1.png"
                alt="Karan Soni"
                width={150}
                height={150}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </motion.div>
          </div>
          
          <Heading as="h1" className="text-4xl font-bold mb-6 text-center">
            About Me
          </Heading>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose dark:prose-invert max-w-none mb-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a <Highlight>Dynamic SDET/QA Expert</Highlight> with a passion for ensuring software quality through automated testing and comprehensive quality assurance processes. My expertise lies in designing and implementing robust test automation frameworks that enhance software reliability and user experience.
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <Heading as="h2" className="text-2xl font-bold mb-8 text-center">
            Technical Expertise
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
                <div className="space-y-2">
                  {skill.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaCheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Heading as="h2" className="text-2xl font-bold mb-8 text-center">
            Key Achievements
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaCertificate className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </Container>
  );
}
