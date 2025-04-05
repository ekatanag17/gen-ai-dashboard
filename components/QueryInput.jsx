import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery, addQueryToHistory, setLoading, setResults } from "../redux/querySlice";

const QueryInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!input.trim()) return;
    dispatch(setLoading(true));
    dispatch(setQuery(input));
    dispatch(addQueryToHistory(input));

   
    setTimeout(() => {
      dispatch(setResults({ message: `Results for: ${input}` }));
    }, 1500);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-80"
        placeholder="Ask a business question..."
      />
      <button onClick={handleSubmit} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </div>
  );
};

export default QueryInput;
