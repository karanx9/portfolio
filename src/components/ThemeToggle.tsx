"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed bottom-4 right-20 h-8 w-8 border border-neutral-200 dark:border-neutral-700 rounded-full backdrop-blur-sm flex items-center justify-center z-50 bg-white dark:bg-gray-800"
    >
      {theme === "dark" ? (
        <IconSun className="h-4 w-4 text-yellow-500" />
      ) : (
        <IconMoon className="h-4 w-4 text-blue-500" />
      )}
    </motion.button>
  );
}; 