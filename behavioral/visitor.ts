interface Visitor {
  visitText(text: TextElement): void;
}

interface BaseElement {
  accept(visitor: Visitor): void;
}

class TextElement implements BaseElement {
  constructor(public text: string) {}

  accept(visitor: Visitor): void {
    visitor.visitText(this);
  }
}

class SEOAnalyzer implements Visitor {
  visitText(text: TextElement): void {
    console.log(`Analyzing SEO for text: ${text.text}`);
  }
}

// Usage
const element: BaseElement = new TextElement("Text Element");

const seoAnalyzer = new SEOAnalyzer();

element.accept(seoAnalyzer);
