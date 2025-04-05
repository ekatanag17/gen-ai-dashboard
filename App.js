import React from "react";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultsDisplay from "./components/ResultsDisplay";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Gen AI Data Query Dashboard</h1>
      <QueryInput />
      <QueryHistory />
      <ResultsDisplay />
    </div>
  );
};

export default App;
