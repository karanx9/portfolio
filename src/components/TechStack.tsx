import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const TechStack = () => {
  const stack = [
    {
      title: "Java",
      src: "/images/logos/icons8-java-240.png",
      className: "h-12 w-12",
    },
    {
      title: "Selenium",
      src: "/images/logos/icons8-selenium-240.png",
      className: "h-12 w-12",
    },
    {
      title: "Appium",
      src: "/images/logos/appium-logo.png",
      className: "h-12 w-12",
    },
    {
      title: "Postman",
      src: "/images/logos/icons8-postman-inc-96.png",
      className: "h-12 w-12",
    },
    {
      title: "TestNg",
      src: "/images/logos/1_4BHz11q6OIX4z8FqtZjjSg.webp",
      className: "h-12 w-12",
    },
  ];

  return (
    <div className="mt-20">
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mb-8"
      >
        Tech Stack
      </Heading>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
        {stack.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative bg-gray-50 dark:bg-gray-700 p-4 rounded-xl hover:shadow-md transition-shadow duration-200">
              <Image
                src={item.src}
                width={48}
                height={48}
                alt={item.title}
                className={twMerge("object-contain", item.className)}
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
