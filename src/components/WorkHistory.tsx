"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const WorkHistory = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-6 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>

      {timeline.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex md:flex-row flex-col my-12 relative"
          key={`timeline-${index}`}
        >
          {/* Timeline dot with white background */}
          <div className="absolute left-6 md:left-6 transform -translate-x-1/2 mt-2.5 z-10">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          {/* Content with date on the right */}
          <div className="flex-1 pl-12">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <Heading as="h3" className="text-xl font-bold text-gray-800 mb-2">
                    {item.company}
                  </Heading>
                  <Heading as="h4" className="text-lg text-blue-600 mb-3 md:mb-0">
                    {item.title}
                  </Heading>
                </div>
                <div className="md:ml-4">
                  <div className="bg-gray-100 rounded-lg px-4 py-2 inline-block">
                    <Paragraph className="font-semibold text-blue-600 whitespace-nowrap">
                      {item.date}
                    </Paragraph>
                  </div>
                </div>
              </div>
              
              {item.description && (
                <Paragraph className="text-gray-600 mb-4">
                  {item.description}
                </Paragraph>
              )}

              <div className="space-y-3">
                {item.responsibilities.map((responsibility, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                    key={responsibility}
                  >
                    <Step>{responsibility}</Step>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-3 items-start">
      <IconCircleCheckFilled className="h-5 w-5 mt-0.5 text-blue-500 flex-shrink-0" />
      <Paragraph className="text-gray-600">
        {children}
      </Paragraph>
    </div>
  );
};
