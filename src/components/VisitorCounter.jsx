import { useEffect, useState } from "react";

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://visitorcounter-func.azurewebsites.net/api/visitorcounter")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Error fetching visitor count:", err));
  }, []);

  return (
    <div className="text-center mt-4">
      <h3 className="text-lg font-semibold">Visitor Count: {count ?? "Loading..."}</h3>
    </div>
  );
}

export default VisitorCounter;