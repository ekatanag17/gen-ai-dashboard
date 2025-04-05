import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queries: [],
  currentQuery: "",
  results: null,
  loading: false,
  error: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.currentQuery = action.payload;
    },
    addQueryToHistory: (state, action) => {
      state.queries.unshift(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setQuery, addQueryToHistory, setLoading, setResults, setError } = querySlice.actions;
export default querySlice.reducer;
