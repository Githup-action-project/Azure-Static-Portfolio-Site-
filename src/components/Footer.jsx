
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-purple-600">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-purple-600">
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="text-sm text-gray-600">© 2025 Mohammed Ibrahim. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
