
import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Somali Proverbs App",
      description: "A mobile app showcasing Somali proverbs with translations and cultural context."
    },
    {
      title: "Azure DevOps CI/CD Pipelines",
      description: "Automated deployment pipelines using Azure DevOps for scalable cloud apps."
    },
    {
      title: "Terraform Infrastructure Templates",
      description: "Reusable Terraform modules for provisioning Azure infrastructure."
    }
  ];

  return (
    <section id="projects" className="my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
