
import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Mohammed Ibrahim</h1>
      <p className="text-xl mb-6">Software Engineer Lead | Azure | DevOps | Terraform</p>
      <Link
        to="/projects"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        View My Work
      </Link>
    </section>
  );
}

export default Hero;
