// Command Interface
interface Command {
  execute(): void;
}

// Receiver
class Light {
  turnOn(): void {
    console.log("The light is on");
  }

  turnOff(): void {
    console.log("The light is off");
  }
}

// Concrete Command to turn on the light
class TurnOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}

// Concrete Command to turn off the light
class TurnOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

// Invoker
class RemoteControl {      
  private command: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    this.command.execute();
  }
}

// Client
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(turnOnCommand);
remote.pressButton();

remote.setCommand(turnOffCommand);
remote.pressButton();
