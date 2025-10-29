import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaTools, FaLanguage, FaBuilding } from "react-icons/fa";
import { Radar, Bar } from "react-chartjs-2";
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
  CategoryScale,
  LinearScale,
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
    period: "2019 – Present",
    description: "Leading cloud-native solutions and DevOps automation for enterprise clients."
  },
  {
    role: "Senior Software Engineer",
    company: "GE Vernova, Energy Sector",
    period: "02/2025 – 05/2025",
    description: "Supported GE Vernova operations as part of the FCC Team, managing middleware and integration workflows using RedHat FUSE and Boomi, contributing to AML ESB service migration and payment issue debugging."
  },
  {
    role: "Operational Maintenance Lead",
    company: "Telia Telecommunication",
    period: "09/2021 – 06/2024",
    description: "Managed Kubernetes deployments with Helm, implemented monitoring with Prometheus, Grafana, and Kibana, and worked extensively with Apache Kafka, Kafka MirrorMaker, and Zookeeper."
  },
  {
    role: "Java Software Developer",
    company: "Arek Oy, Pension Insurance Sector",
    period: "01/2020 – 02/2021",
    description: "Built software solutions for pension providers, developing scalable applications to manage pension plans, automate calculations, and improve system efficiency. Provided technical recommendations and solutions."
  },
  {
    role: "Backend Developer",
    company: "FREE-Laskutus HR & Invoicing Services",
    period: "05/2017 – 07/2017",
    description: "Designed a platform to streamline the job-seeking process for employers and job seekers, delivering a user-friendly interface and robust backend as both frontend and backend developer."
  }
];

const certificates = [
  "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
  "AZ-204: Developing Solutions for Microsoft Azure",
  "AZ-900: Microsoft Azure Fundamentals",
  "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
  "Cisco CCNP Routing and Switching (2019)",
  "Associate Google Cloud Engineer Certification",
  "Certified Kubernetes Application Developer (CKAD)",
  "HashiCorp Certified: Terraform Associate"
];

const defaultSkills = [
  "Azure", "Kubernetes", "Docker", "Terraform", "GitHub", "Jenkins", "Helm", "Maven", "Ant"
];
const defaultProficiency = [9, 9, 8, 9, 8, 8, 7, 7, 6];

const languages = ["Finnish", "English", "Arabic"];
const location = "Helsinki";

function About() {
  const [skills, setSkills] = useState(defaultSkills);
  const [proficiency, setProficiency] = useState(defaultProficiency);
  const [chartType, setChartType] = useState("radar");

  useEffect(() => {
    fetch("/skills.json")
      .then(res => res.json())
      .then(data => {
        setSkills(data.skills);
        setProficiency(data.proficiency);
      })
      .catch(() => {
        setSkills(defaultSkills);
        setProficiency(defaultProficiency);
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

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-12 px-4"
    >
      <h2 className="text-3xl font-bold text-blue-700 mb-6">About Me</h2>
      <p className="text-gray-700 mb-8">
        Seasoned Software Engineer Lead with over 8 years of experience in application development, deployment, and DevOps. Proficient in Docker, Kubernetes, GitHub, and cloud platforms, with a strong track record in building automated CI/CD pipelines and implementing robust monitoring solutions.
      </p>
      {/* Advanced Experience Timeline */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
          <FaBuilding /> Experience
        </h3>
        <div className="relative border-l-4 border-blue-200 pl-8">
          {experience.map((item, idx) => (
            <div key={idx} className="mb-10 last:mb-0 relative">
              {/* Timeline Dot */}
              <span className="absolute -left-5 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></span>
              <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-lg font-bold text-blue-700">{item.role}</h4>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{item.period}</span>
                </div>
                <div className="text-sm text-gray-500 mb-1">{item.company}</div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skills */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2"><FaTools /> Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
      {/* Chart Toggle */}
      <div className="text-center mb-4">
        <button
          onClick={() => setChartType(chartType === "radar" ? "bar" : "radar")}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition mt-4 text-sm"
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
      {/* Certifications */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2"><FaCertificate /> Certifications</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {certificates.map((cert, idx) => (
            <li key={idx} className="bg-purple-50 text-purple-800 px-4 py-2 rounded shadow-sm font-medium">
              {cert}
            </li>
          ))}
        </ul>
      </div>
      {/* Languages & Location */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2"><FaLanguage /> Languages & Location</h3>
        <div className="flex gap-4 mb-2">
          {languages.map((lang, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">{lang}</span>
          ))}
        </div>
        <div className="text-gray-600 font-medium">Location: {location}</div>
      </div>
    </motion.section>
  );
}

export default About;