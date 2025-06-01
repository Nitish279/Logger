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

### Test the log parser

To run tests, add a test script to your `package.json` and use a test runner like Jest. Example:

Add to `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Then run:

```sh
npm test
```

## File Structure

- `src/hooks/useLogs.js`: Custom React hook for fetching and parsing logs
- `src/utils/parseLogs.js`: Log parsing logic
- `src/components/Logger.jsx`: Virtualized table for displaying jobs

## Testing

- Ensure `logs.log` exists in the `public/` directory
- The UI should show all jobs with correct durations and statuses
- Errors in fetching or parsing will be shown in the UI

---

MIT License
