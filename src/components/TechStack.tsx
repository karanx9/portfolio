import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Java",
      src: "/images/logos/icons8-java-240.png",

      className: "h-10 w-14",
    },
    {
      title: "Selenium",
      src: "/images/logos/icons8-selenium-240.png",

      className: "h-10 w-10",
    },
    {
      title: "Appium",
      src: "/images/logos/appium-logo.png",

      className: "h-10 w-8",
    },
    {
      title: "Postman",
      src: "/images/logos/icons8-postman-inc-96.png",

      className: "h-10 w-10",
    },
    {
      title: "TestNg",
      src: "/images/logos/1_4BHz11q6OIX4z8FqtZjjSg.webp",

      className: "h-10 w-12",
    },
    
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
