interface TextStyleFlyweight {
  applyStyle(element: HTMLElement): void;
}

class ConcreteTextStyle implements TextStyleFlyweight {
  private fontSize: string;
  private fontWeight: string;
  private color: string;

  constructor(fontSize: string, fontWeight: string, color: string) {
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
    this.color = color;
  }

  applyStyle(element: HTMLElement): void {
    element.style.fontSize = this.fontSize;
    element.style.fontWeight = this.fontWeight;
    element.style.color = this.color;
  }
}

class TextStyleFactory {
  private styles: { [key: string]: TextStyleFlyweight } = {};

  // key logic for flyweight
  getStyle(fontSize: string, fontWeight: string, color: string): TextStyleFlyweight {
    const key = `${fontSize}-${fontWeight}-${color}`;
    if (!(key in this.styles)) {
      this.styles[key] = new ConcreteTextStyle(fontSize, fontWeight, color);
    }
    return this.styles[key];
  }
}

const styleFactory = new TextStyleFactory();

const style1 = styleFactory.getStyle("16px", "normal", "#000");
const style2 = styleFactory.getStyle("16px", "bold", "#000");
// Reuses existing flyweight if it was already created with the same properties
const style3 = styleFactory.getStyle("16px", "normal", "#000");

// Assuming we have some HTML elements to style
const element1 = document.createElement("p");
const element2 = document.createElement("span");
const element3 = document.createElement("div");

style1.applyStyle(element1);
style2.applyStyle(element2);
style3.applyStyle(element3);

console.log(element1.style.cssText); // font-size: 16px; font-weight: normal; color: #000;
console.log(element2.style.cssText); // font-size: 16px; font-weight: bold; color: #000;
console.log(element3.style.cssText); // font-size: 16px; font-weight: normal; color: #000;, same as element1
