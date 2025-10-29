
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center py-20"
    >
      <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-4">
        Hi, I'm Mohammed Ibrahim
      </motion.h1>
      <motion.p variants={fadeUp} className="text-xl mb-6">
        Software Engineer Lead | Azure | DevOps | Terraform
      </motion.p>
      <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/projects"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          View My Work
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
