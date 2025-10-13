import React from "react";

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center py-20 animate-fadeIn">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Mohammed Ibrahim</h1>
      <p className="text-xl mb-6">Software Engineer Lead | Azure | DevOps | Terraform</p>
      <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        View My Work
      </a>
    </section>
  );
}

export default Hero;
