import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

function VisitorAnalytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch("https://my-function-f8eddzf5huh4f5dy.westeurope-01.azurewebsites.net/api/visitorcounter")
      .then((res) => res.json())
      .then((data) => setAnalytics(data))
      .catch((err) => console.error("Error fetching analytics:", err));
  }, []);

  if (!analytics) return <p className="text-center mt-4">Loading analytics...</p>;

  return (
    <section className="flex justify-center mt-8">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full hover:shadow-2xl transition transform hover:scale-105 duration-300">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Visitor Analytics
        </h2>
        <div className="space-y-3 text-center">
          <p className="text-lg font-semibold text-gray-700">
            Total Visitors:{" "}
            <span className="text-purple-600">
              <CountUp end={analytics.totalVisits} duration={1.5} />
            </span>
          </p>
          <p className="text-lg font-semibold text-gray-700">
            Unique Visitors:{" "}
            <span className="text-purple-600">
              <CountUp end={analytics.uniqueIPs} duration={1.5} />
            </span>
          </p>
          <p className="text-sm text-gray-500">
            Last Visit:{" "}
            <span className="text-gray-800">
               {analytics.lastVisit ? new Date(analytics.lastVisit).toLocaleString() : "N/A"}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisitorAnalytics;
