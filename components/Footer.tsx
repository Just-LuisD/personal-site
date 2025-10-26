import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className="flex flex-row items-center justify-center space-x-4 py-5 text-neutral-600 dark:text-neutral-400 border-t w-full">
      <a href="https://www.linkedin.com/in/luiseduran/" className="px-2">
        <FaLinkedin className="h-8 w-8" />
      </a>
      <a href="https://github.com/Just-LuisD" className="px-2">
        <FaGithub className="h-8 w-8" />
      </a>
    </div>
  );
}
