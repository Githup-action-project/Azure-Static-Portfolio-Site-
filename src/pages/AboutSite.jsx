import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCloud, FaServer, FaCodeBranch, FaCogs } from "react-icons/fa";

function AboutSite() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-white px-4 py-16"
    >
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4 text-center tracking-tight">
          About This Website
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-700 text-lg mb-6 text-center"
        >
          <strong>This portfolio was designed and developed from scratch by me, Mohammed Ibrahim.</strong> It demonstrates my expertise in modern web development, cloud, and DevOps.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-blue-50 rounded-lg p-4 shadow"
          >
            <FaReact className="text-blue-500 text-2xl" />
            <span className="font-medium text-blue-700">React & Tailwind CSS</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-purple-50 rounded-lg p-4 shadow"
          >
            <FaCloud className="text-purple-500 text-2xl" />
            <span className="font-medium text-purple-700">Azure Static Web Apps</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-blue-50 rounded-lg p-4 shadow"
          >
            <FaServer className="text-blue-500 text-2xl" />
            <span className="font-medium text-blue-700">Azure Functions (Serverless)</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-purple-50 rounded-lg p-4 shadow"
          >
            <FaCogs className="text-purple-500 text-2xl" />
            <span className="font-medium text-purple-700">Terraform (IaC)</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-blue-50 rounded-lg p-4 shadow"
          >
            <FaCodeBranch className="text-blue-500 text-2xl" />
            <span className="font-medium text-blue-700">GitHub Actions (CI/CD)</span>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gray-700 text-center"
        >
          Every aspect, from design to deployment, is managed and automated by me. This site is fully cloud-native, automated, and a showcase of my end-to-end skills.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default AboutSite;