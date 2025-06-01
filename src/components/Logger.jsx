import React from "react";
import { formatTime } from "../utils/formatTime";
import "./Logger.css";

const Logger = React.memo(({ jobs }) => {
  return (
    <div className="logger-container">
      <table className="log-table">
        <thead>
          <tr>
            <th className="log-th">PID</th>
            <th className="log-th">Job Description</th>
            <th className="log-th">Start Time</th>
            <th className="log-th">End Time</th>
            <th className="log-th">Duration (s)</th>
            <th className="log-th">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => {
            let rowClass = "";
            if (job.status === "warning") {
              rowClass = "log-warning";
            } else if (job.status === "error") {
              rowClass = "log-error";
            }
            return (
              <tr key={`${job.pid}-${job.jobDescription}`} className={rowClass}>
                <td className="log-td">{job.pid}</td>
                <td className="log-td">{job.jobDescription}</td>
                <td className="log-td">
                  {formatTime(new Date(job.startTime))}
                </td>
                <td className="log-td">{formatTime(new Date(job.endTime))}</td>
                <td className="log-td">{job.durationSeconds}</td>
                <td className="log-td">{job.status.toUpperCase()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});

export default Logger;
