import React from "react";
import { useLogs } from "./hooks/useLogs";
import Logger from "./components/Logger";
import "./App.css";

const Loading = () => <div className="loading">Loading logs…</div>;

const ErrorMsg = ({ error }) => (
  <div className="error">Error loading logs: {error}</div>
);
const NoJobs = () => <div className="no-jobs">No jobs found in logs.</div>;

const App = () => {
  const { jobs, loading, error } = useLogs();

  if (loading) return <Loading />;
  if (error) return <ErrorMsg error={error} />;
  if (jobs.length === 0) return <NoJobs />;

  return (
    <div className="app">
      <h1>Log Monitoring Report</h1>
      <Logger jobs={jobs} />
    </div>
  );
};

export default App;
