import { useEffect, useState } from "react";
import { parseLogs } from "../utils/parseLogs";

export function useLogs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/logs.log")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
        return res.text();
      })
      .then((text) => {
        const parsed = parseLogs(text);
        setJobs(parsed);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { jobs, loading, error };
}
