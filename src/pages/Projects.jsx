import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Somali Proverbs App",
      description: "A mobile app showcasing Somali proverbs with translations and cultural context.",
      github: "https://github.com/yourusername/somali-proverbs-app",
      demo: "https://somali-proverbs-app.vercel.app"
    },
    {
      title: "Azure DevOps CI/CD Pipelines",
      description: "Automated deployment pipelines using Azure DevOps for scalable cloud apps.",
      github: "https://github.com/yourusername/azure-devops-pipelines",
      demo: "https://azure-pipelines-demo.netlify.app"
    },
    {
      title: "Terraform Infrastructure Templates",
      description: "Reusable Terraform modules for provisioning Azure infrastructure.",
      github: "https://github.com/yourusername/terraform-azure-modules",
      demo: "https://terraform-modules-demo.vercel.app"
    }
  ];

  return (
    <section id="projects" className="my-12 px-4 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              {project.title}
            </h3>
            <p className="text-gray-900 dark:text-gray-200">{project.description}</p>

            {(project.github || project.demo) && (
              <div className="flex justify-center gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;