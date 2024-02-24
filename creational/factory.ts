// Abstract Product Class: Interface of all object
abstract class Vehicle {
  abstract start(): string;
}

// Concrete Products
class Car extends Vehicle {
  start(): string {
    return "Car engine started";
  }
}

class Bike extends Vehicle {
  start(): string {
    return "Bike engine started";
  }
}

// Vehicle Type
type VehicleType = "car" | "bike";

// Creator Class
class VehicleFactory {
  createVehicle(type: VehicleType): Vehicle {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      default:
        throw new Error("Vehicle type not supported");
    }
  }
}

// Usage
const vehicleFactory = new VehicleFactory();

const car = vehicleFactory.createVehicle("car");
console.log(car.start()); // Output: Car engine started

const bike = vehicleFactory.createVehicle("bike");
console.log(bike.start()); // Output: Bike engine started
