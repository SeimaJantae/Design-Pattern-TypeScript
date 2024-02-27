abstract class ReportTemplate {
  // Template method
  public generateReport(): void {
    this.collectData();
    this.analyzeData();
    this.presentData();
  }

  protected abstract collectData(): void;
  protected abstract analyzeData(): void;
  protected abstract presentData(): void;
}

class SalesReport extends ReportTemplate {
  protected collectData(): void {
    console.log("Collecting sales data...");
  }

  protected analyzeData(): void {
    console.log("Analyzing sales data...");
  }

  protected presentData(): void {
    console.log("Presenting sales report...");
  }
}

class InventoryReport extends ReportTemplate {
  protected collectData(): void {
    console.log("Collecting inventory data...");
  }

  protected analyzeData(): void {
    console.log("Analyzing inventory data...");
  }

  protected presentData(): void {
    console.log("Presenting inventory report...");
  }
}

// Usage
const salesReport = new SalesReport();
salesReport.generateReport();

const inventoryReport = new InventoryReport();
inventoryReport.generateReport();
