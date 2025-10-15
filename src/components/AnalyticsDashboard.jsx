
import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function AnalyticsDashboard({ data }) {
  if (!data) return <p className="text-center">Loading analytics...</p>;

  const lineData = {
    labels: data.dailyStats.map((d) => d.date),
    datasets: [
      {
        label: "Daily Visitors",
        data: data.dailyStats.map((d) => d.visits),
        borderColor: "#6366F1",
        backgroundColor: "rgba(99,102,241,0.2)",
        fill: true,
        tension: 0.4
      }
    ]
  };

  const pieData = {
    labels: data.geoStats.map((g) => g.country),
    datasets: [
      {
        label: "Visitors by Country",
        data: data.geoStats.map((g) => g.visits),
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Visitor Analytics Dashboard</h2>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <Line data={lineData} />
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
