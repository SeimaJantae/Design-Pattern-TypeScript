interface State {
  handle(context: Context): void;
}

class Context {
  private state: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.handle(this);
  }

  public request(): void {
    this.state.handle(this);
  }
}

class NewState implements State {
  public handle(context: Context): void {
    console.log("User account is in new state, activating now.");
  }
}

class ActiveState implements State {
  public handle(context: Context): void {
    console.log("User account is active. Suspending account.");
  }
}

class SuspendedState implements State {
  public handle(context: Context): void {
    console.log("User account is suspended. Closing account.");
  }
}

class ClosedState implements State {
  public handle(context: Context): void {
    console.log("User account is now closed.");
  }
}

// Usage
const contextState = new Context(new NewState());
contextState.transitionTo(new ActiveState());
contextState.transitionTo(new SuspendedState());
contextState.transitionTo(new ClosedState());
