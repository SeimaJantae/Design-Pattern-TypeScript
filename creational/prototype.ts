class TextUI {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
    // Assume there are more complex fields here
  }

  clone(): TextUI {
    // The simplest approach to cloning, creating a new instance with the same values.
    return new TextUI(this.name, this.color);
  }

  toString(): string {
    return `Text: ${this.name}, Color: ${this.color}`;
  }
}

// Usage
const prototypeProfile = new TextUI("Display text 1", "red");

// Cloning the prototype to create a new profile
const newUserProfile = prototypeProfile.clone();
newUserProfile.name = "Display text 2"; // Changing the name for the new profile

console.log(prototypeProfile.toString()); // Output: Text: Display text 1, Color: red
console.log(newUserProfile.toString()); // Output: Text: Display text 2, Color: red
