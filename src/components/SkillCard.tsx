"use client";

import { motion } from "framer-motion";
import { IconBrandGithub } from "@tabler/icons-react";

interface SkillCardProps {
  name: string;
  proficiency: number;
  icon: React.ReactNode;
  description: string;
}

export const SkillCard = ({ name, proficiency, icon, description }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">{name}</h3>
            <span className="text-blue-600 dark:text-blue-400 font-medium">{proficiency}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
            <motion.div 
              className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${proficiency}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}; 