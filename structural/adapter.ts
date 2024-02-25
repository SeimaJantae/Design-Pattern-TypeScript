interface OldLogger {
  log(message: string): void;
}

// NewLogger.ts
interface NewLogger {
  info(message: string): void;
  error(message: string): void;
  debug(message: string): void;
}

// LoggerAdapter.ts
class LoggerAdapter implements OldLogger {
  private newLogger: NewLogger;

  constructor(newLogger: NewLogger) {
    this.newLogger = newLogger;
  }

  log(message: string): void {
    // Use the 'info' method of the new logger for standard logging
    this.newLogger.info(message);
  }
}

// Application.ts
const newLoggerInstance: NewLogger = {
  info: (message: string) => console.log(`Info: ${message}`),
  error: (message: string) => console.log(`Error: ${message}`),
  debug: (message: string) => console.log(`Debug: ${message}`),
};

const logger: OldLogger = new LoggerAdapter(newLoggerInstance); // Can use old logger with new implemented logger -> Do not change .log to .info in all project
logger.log("This is a log message."); // Outputs: Info: This is a log message.
