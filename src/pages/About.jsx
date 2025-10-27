
import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import { FaDownload } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Helmet } from "react-helmet-async";





import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  CategoryScale,   // ✅ Needed for Bar chart
  LinearScale,     // ✅ Needed for Bar chart
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend
);



const experience = [
  {
    role: "Software Engineer Lead",
    company: "Capgemini",
    period: "2021 – Present",
    description: "Leading cloud-native solutions and DevOps automation for enterprise clients."
  },
  {
    role: "Cloud Engineer",
    company: "Microsoft",
    period: "2018 – 2021",
    description: "Built scalable Azure infrastructure and CI/CD pipelines for internal tools."
  }
];


function About() {
  
const [skills, setSkills] = useState([]);
  const [proficiency, setProficiency] = useState([]);
  const [chartType, setChartType] = useState("radar");


  useEffect(() => {
    fetch("/skills.json")
      .then(res => res.json())
      .then(data => {
        setSkills(data.skills);
        setProficiency(data.proficiency);
      })
      .catch(() => {
        setSkills(["Azure", "DevOps", "Terraform", "React", "CI/CD", "Infrastructure as Code"]);
        setProficiency([9, 9, 8, 7, 8, 9]);
      });
  }, []);


  const radarData = {
    labels: skills,
    datasets: [
      {
        label: "Proficiency",
        data: proficiency,
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        borderColor: "rgba(37, 99, 235, 1)",
        pointBackgroundColor: "rgba(37, 99, 235, 1)"
      }
    ]
  };

  const radarOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.formattedValue}/10`
        }
      }
    },
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: { stepSize: 2, color: "#374151" },
        grid: { color: "#e5e7eb" },
        angleLines: { color: "#e5e7eb" }
      }
    },
    animation: {
      duration: 2500,
      easing: "easeOutBounce"
    }
  };

  
const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.formattedValue}/10`
        }
      }
    },
    scales: {
      x: { ticks: { color: "#374151" }, grid: { color: "#e5e7eb" } },
      y: { min: 0, max: 10, ticks: { stepSize: 1, color: "#374151" } }
    }
  };

  
const barData = {
  labels: skills,
  datasets: [
    {
      label: "Proficiency",
      data: proficiency,
      backgroundColor: "rgba(37, 99, 235, 0.7)",
      borderRadius: 6
    }
  ]
};



  return (
    <section
      id="about"
      className="my-12 animate-fadeIn bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4"
    >
      <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-200 mb-6">
        I'm a Software Engineer Lead with a passion for building scalable cloud infrastructure and automating workflows using DevOps practices.
      </p>



<Helmet>
  {/* Basic SEO */}
  <title>Mohammed Ibrahim | Portfolio</title>
  <meta name="description" content="Portfolio showcasing Azure, DevOps, Terraform projects and skills." />
  <meta name="keywords" content="Azure, DevOps, Terraform, React, CI/CD, Cloud Engineer" />

 
  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohammed Ibrahim",
      jobTitle: "Software Engineer Lead",
      url: "https://yourdomain.com",
      sameAs: [
        "https://linkedin.com/in/yourusername",
        "https://github.com/yourusername"
      ]
    })}
  </script>
</Helmet>



      
{/* ✅ Resume Download Button */}
      <div className="mb-6">
        <a
          href="src/assets/resume.pdf"
          download
          className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <FaDownload className="mr-2" />
          Download Resume
        </a>
      </div>
      
  

{/* Experience Timeline */}
<div className="mb-10">
  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">Experience</h3>
  <ul className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 space-y-6">
    {experience.map((item, index) => (
      <li key={index} className="relative">
        <div className="absolute -left-3 top-1 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        <h4 className="text-lg font-bold">{item.role} @ {item.company}</h4>
        <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
        <p className="text-gray-700 dark:text-gray-300 mt-1">{item.description}</p>
      </li>
    ))}
  </ul>
</div>
      




{/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map(skill => (
          <div
            key={skill}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center shadow hover:shadow-lg transition"
          >
            <span className="text-blue-600 dark:text-blue-400 font-medium">{skill}</span>
          </div>
        ))}
      </div>


{/* Chart Toggle */}
      <div className="text-center mb-4  ">
        <button
          onClick={() => setChartType(chartType === "radar" ? "bar" : "radar")}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition mt-4  text-sm"
        >
          Switch to {chartType === "radar" ? "Bar" : "Radar"} Chart
        </button>
      </div>


{/* Chart Display */}
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        {skills.length > 0 ? (
          chartType === "radar" ? (
            <Radar data={radarData} options={radarOptions} />
          ) : (
            <Bar data={barData} options={barOptions} />
          )
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
    </section>
  );
}






export default About;