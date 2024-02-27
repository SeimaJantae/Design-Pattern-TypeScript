// Strategy Interface
interface NotificationStrategy {
  send(user: string, message: string): void;
}

// Concrete Strategies
class EmailNotification implements NotificationStrategy {
  send(user: string, message: string): void {
    console.log(`Sending email to ${user} with message: ${message}`);
  }
}

class SmsNotification implements NotificationStrategy {
  send(user: string, message: string): void {
    console.log(`Sending SMS to ${user} with message: ${message}`);
  }
}

class PushNotification implements NotificationStrategy {
  send(user: string, message: string): void {
    console.log(`Sending push notification to ${user} with message: ${message}`);
  }
}

// Context
class NotificationContext {
  private strategy: NotificationStrategy;

  constructor(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  public notify(user: string, message: string): void {
    this.strategy.send(user, message);
  }
}

// Usage
const user = "User Name";
const message = "Notification Message";

// Can choose strategy methode via context
const context = new NotificationContext(new EmailNotification());
context.notify(user, message);

context.setStrategy(new SmsNotification());
context.notify(user, message);

context.setStrategy(new PushNotification());
context.notify(user, message);
