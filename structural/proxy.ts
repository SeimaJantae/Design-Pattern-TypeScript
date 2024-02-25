interface Internet {
  connectTo(host: string): void;
}

class RealInternet implements Internet {
  connectTo(host: string): void {
    console.log(`Connect to ${host}`);
  }
}

class ProxyInternet implements Internet {
  private internet = new RealInternet();
  private bannedSites: Set<string>;
  constructor() {
    this.bannedSites = new Set();
    this.bannedSites.add("banned.com");
  }

  connectTo(host: string): void {
    if (this.bannedSites.has(host)) {
      console.log("Access Denied");
      return;
    }
    this.internet.connectTo(host);
  }
}

const internet = new ProxyInternet();
internet.connectTo("banned.com"); // Access Denied
internet.connectTo("google.com"); // Connect to google.com
