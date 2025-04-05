import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ResultDisplay = () => {
  const { results, loading } = useSelector((state) => state.query);
  const data = results ? [{ name: "Query", value: Math.random() * 100 }] : [];

  return (
    <div>
      {loading && <p>Loading...</p>}
      {results && (
        <div>
          <p>{results.message}</p>
          <BarChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
