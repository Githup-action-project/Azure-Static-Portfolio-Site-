
import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Home() {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      id="home"
      className="text-center my-12"
    >
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4 tracking-tight">
        Mohammed Ibrahim
      </h1>
      <p className="text-xl text-gray-700 mb-2 font-medium">
        Software Engineer Lead | DevOps & Cloud Specialist | Helsinki
      </p>
      <p className="text-lg text-gray-600 mb-6">
        With over 8 years of experience, I specialize in cloud-native development, CI/CD automation, and observability solutions using Kubernetes, Docker, Azure, and Terraform.
      </p>

      {/* ✅ Resume Download Button */}
      <div className="mb-6">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <FaDownload className="mr-2" />
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}

export default Home;
