import React from "react";
import { useSelector } from "react-redux";

const QueryHistory = () => {
  const queries = useSelector((state) => state.query.queries);

  return (
    <div className="mb-4">
      <h2 className="font-bold">Query History</h2>
      <ul>
        {queries.map((q, index) => (
          <li key={index} className="text-gray-700">{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
