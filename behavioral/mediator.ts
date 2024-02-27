interface Mediator {
  send(message: string, colleague: Colleague): void;
}

abstract class Colleague {
  constructor(protected mediator: Mediator) {}
  public abstract send(message: string): void;
  public abstract receive(message: string): void;
}

class ConcreteMediator implements Mediator {
  private colleagues: Colleague[] = [];

  public register(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }

  send(message: string, colleague: Colleague): void {
    this.colleagues.forEach((col) => {
      if (col !== colleague) {
        col.receive(message);
      }
    });
  }
}

class User extends Colleague {
  constructor(mediator: Mediator, public name: string) {
    super(mediator);
  }

  public send(message: string): void {
    console.log(`${this.name} sends message: ${message}`);
    this.mediator.send(message, this);
  }

  public receive(message: string): void {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Usage
const mediator = new ConcreteMediator();
const john = new User(mediator, "John");
const jane = new User(mediator, "Jane");

mediator.register(john);
mediator.register(jane);

john.send("Message from John");
jane.send("Message from Jane");
