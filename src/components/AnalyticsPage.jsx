import React, { useEffect, useState } from "react";
import AnalyticsDashboard from "../components/AnalyticsDashboard";

function AnalyticsPage() {
  const [analyticspage, setAnalytics] = useState(null);

  useEffect(() => {
    fetch("https://visitorcounter-func.azurewebsites.net/api/visitorcounter")
      .then((res) => res.json())
      .then((data) => setAnalytics(data))
      .catch((err) => console.error("Error fetching analyticspage:", err));
  }, []);

  return (
    <div className="pt-20 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Analytics Dashboard</h1>
      <AnalyticsDashboard data={analyticspage} />
    </div>
  );
}

export default AnalyticsPage;