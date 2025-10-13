import React,{ useEffect, useState } from "react";


function VisitorAnalytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch("https://visitorcounter-func.azurewebsites.net/api/visitorcounter")
      .then((res) => res.json())
      .then((data) => setAnalytics(data))
      .catch((err) => console.error("Error fetching analytics:", err));
  }, []);

  if (!analytics) {
    return (
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">Loading visitor analytics...</h3>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-6 rounded-lg shadow-lg mt-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Visitor Analytics</h2>
      <p className="text-lg">Total Visitors: {analytics.totalVisitors}</p>
      <p className="text-lg">Unique Visitors: {analytics.uniqueVisitors}</p>
      <p className="text-sm mt-2">
        Last Visit: {analytics.lastVisit ? new Date(analytics.lastVisit).toLocaleString() : "N/A"}
      </p>
    </div>
  );
}

export default VisitorAnalytics;