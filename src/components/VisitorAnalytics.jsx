import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

function VisitorAnalytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch("https://visitorcounter-func.azurewebsites.net/api/visitorcounter")
      .then((res) => res.json())
      .then((data) => setAnalytics(data))
      .catch((err) => console.error("Error fetching analytics:", err));
  }, []);

  if (!analytics) return <p className="text-center mt-4">Loading analytics...</p>;

  return (
    <section id="analytics" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-6 rounded-lg shadow-lg mt-6 max-w-md mx-auto transition transform hover:scale-105 duration-300">
      <h2 className="text-2xl font-bold mb-4">Visitor Analytics</h2>
      <p className="text-lg">Total Visitors: <CountUp end={analytics.totalVisitors} duration={2} /></p>
      <p className="text-lg">Unique Visitors: <CountUp end={analytics.uniqueVisitors} duration={2} /></p>
      <p className="text-sm mt-2">Last Visit: {new Date(analytics.lastVisit).toLocaleString()}</p>
    </section>
  );
}

export default VisitorAnalytics;