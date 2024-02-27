abstract class Logger {
  protected level: number;
  // Next element in the chain of responsibility
  protected nextLogger: Logger;

  constructor(level: number) {
    this.level = level;
  }

  setNextLogger(nextLogger: Logger): void {
    this.nextLogger = nextLogger;
  }

  logMessage(level: number, message: string): void {
    if (this.level <= level) {
      this.write(message);
    }
    if (this.nextLogger != null) {
      this.nextLogger.logMessage(level, message);
    }
  }

  protected abstract write(message: string): void;
}

class LoggerChain1 extends Logger {
  constructor(level: number) {
    super(level);
  }

  protected write(message: string): void {
    console.log("Logger1: " + message);
  }
}

class LoggerChain2 extends Logger {
  constructor(level: number) {
    super(level);
  }

  protected write(message: string): void {
    console.error("Logger2: " + message);
  }
}

class LoggerChain3 extends Logger {
  constructor(level: number) {
    super(level);
  }

  protected write(message: string): void {
    console.log("Logger3: " + message);
  }
}

// Setting up the chain
const chainLogger = new LoggerChain1(1);
const logger2 = new LoggerChain2(2);
const logger3 = new LoggerChain3(3);

chainLogger.setNextLogger(logger2);
logger2.setNextLogger(logger3);

// Making requests
chainLogger.logMessage(3, "Message");
