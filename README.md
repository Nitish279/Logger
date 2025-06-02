# Logger App

A simple React application to monitor and visualize job logs from a CSV-style log file. It fetches, parses, and displays job durations and statuses in a virtualized table for performance.

## Features

- Fetches and parses `logs.log` from the public directory
- Groups jobs by PID and calculates duration and status
- Displays jobs in a virtualized table for high performance
- Handles loading and error states

## Development

### Install dependencies

```sh
npm install
```

### Run the app

```sh
npm run dev
```

## File Structure

- `src/hooks/useLogs.js`: Custom React hook for fetching and parsing logs
- `src/utils/parseLogs.js`: Log parsing logic
- `src/components/Logger.jsx`: Virtualized table for displaying jobs

## Testing

- There are currently no automated test cases included.
- Ensure `logs.log` exists in the `public/` directory
- The UI should show all jobs with correct durations and statuses
- Errors in fetching or parsing will be shown in the UI

---

## Performance Optimization Ideas

To further optimize the performance and user experience of the Logger App, consider the following enhancements:

Virtualized Rendering (lazy load) with React Window: Only render visible rows so large log lists don’t bog down the UI.

Smarter Tables with React Table: Plug in React Table for built-in sorting, searching, filtering, and pagination.

Live Updates via SSE or WebSockets: Let the server push new log entries instantly so the user never has to hit “refresh.”

Polling as a Backup: If setting up SSE/WebSockets is too heavy, poll the server every few seconds for new logs.

Instant Feedback (Optimistic UI): Update the UI immediately when a user action occurs (e.g., clearing logs) and then sync with the server behind the scenes.

Prevent Unnecessary Renders: Wrap components in React.memo and use useMemo or useCallback to skip re-renders when props/state haven’t changed.

Offload Heavy Parsing: Move any CPU-intensive log-parsing into a Web Worker so the main thread stays responsive.
