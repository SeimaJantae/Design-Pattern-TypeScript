// Complex system
class PlumbingSystem {
  setPressure(v: number) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  setVotage(v: number) {}
  turnOn() {}
  turnOff() {}
}

class House {
  private plumbling = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  // Easy system
  public turnOnSystem() {
    this.plumbling.setPressure(100);
    this.plumbling.turnOn();
    this.electrical.setVotage(100);
    this.electrical.turnOn();
  }
  public turnOffSystem() {
    this.plumbling.setPressure(0);
    this.plumbling.turnOff();
    this.electrical.setVotage(0);
    this.electrical.turnOff();
  }
}

// Usage
const house = new House();
house.turnOnSystem(); // easy to use
house.turnOffSystem(); // easy to use
