// Abstraction for message display -> Bridge class
abstract class MessageDisplay {
  protected messageSource: MessageSource;

  constructor(messageSource: MessageSource) {
    this.messageSource = messageSource;
  }

  abstract display(): void;
}

// Implementor for message source
interface MessageSource {
  getMessage(): string;
}

// RefinedAbstraction for displaying messages as alerts
class AlertMessageDisplay extends MessageDisplay {
  display(): void {
    const message = this.messageSource.getMessage();
    console.log(message);
  }
}

// RefinedAbstraction for displaying messages in a modal
class ModalMessageDisplay extends MessageDisplay {
  display(): void {
    const message = this.messageSource.getMessage();
    // Implementation for displaying message in a modal would go here
    console.log(`Modal: ${message}`);
  }
}

// ConcreteImplementor for static message source
class StaticMessageSource implements MessageSource {
  getMessage(): string {
    return "Message from static message";
  }
}

// ConcreteImplementor for API message source
class ApiMessageSource implements MessageSource {
  getMessage(): string {
    return "Message from API";
  }
}

// Example usage
const staticSource = new StaticMessageSource();
const alertDisplay = new AlertMessageDisplay(staticSource);
alertDisplay.display(); // Displays an alert with "Static message"

const apiSource = new ApiMessageSource();
const modalDisplay = new ModalMessageDisplay(apiSource);
modalDisplay.display(); // Logs "Modal: Message from API" to the console
