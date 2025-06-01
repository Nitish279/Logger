const parseLogLine = (line) => {
  const parts = line.split(",");
  const [timeStr, jobDesc, event, pid] = parts;
  const [hh, mm, ss] = timeStr.split(":").map(Number);
  const ts = new Date();
  ts.setHours(hh, mm, ss, 0);
  return {
    timestamp: ts,
    jobDescription: jobDesc,
    eventType: event,
    pid,
  };
};

const groupEntries = (entries) =>
  entries.reduce((groups, entry) => {
    const key = entry.pid;
    if (!groups[key]) groups[key] = { start: null, end: null };
    if (entry.eventType === "START") groups[key].start = entry;
    else groups[key].end = entry;
    return groups;
  }, {});

const getStatus = (durationSeconds) =>
  durationSeconds >= 600 ? "error" : durationSeconds >= 300 ? "warning" : "ok";

export const parseLogs = (rawText) => {
  const entries = rawText.split("\n").map(parseLogLine);
  const groups = groupEntries(entries);

  const results = Object.values(groups).map(({ start, end }) => {
    const durationSeconds = Math.floor(
      (end.timestamp - start.timestamp) / 1000
    );
    return {
      pid: start.pid,
      jobDescription: start.jobDescription,
      startTime: start.timestamp,
      endTime: end.timestamp,
      durationSeconds,
      status: getStatus(durationSeconds),
    };
  });
  return results;
};
