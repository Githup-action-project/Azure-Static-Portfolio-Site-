import React from "react";

function About() {
  return (
    <section id="about" className="my-12 animate-fadeIn">
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Me</h2>
      <p className="text-gray-800 mb-6">
        I'm a Software Engineer Lead with a passion for building scalable cloud infrastructure and automating workflows using DevOps practices.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {['Azure', 'DevOps', 'Terraform', 'React', 'CI/CD', 'Infrastructure as Code'].map(skill => (
          <div key={skill} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <span className="text-blue-600 font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;