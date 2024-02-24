class ConfigManager {
  private static instance: ConfigManager | null = null;

  private constructor() {
    if (ConfigManager.instance) {
      throw new Error("Cannot create more than one instance of ConfigManager");
    }
    ConfigManager.instance = this;
  }

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  private _darkTheme: boolean;

  public setTheme(darkTheme: boolean): void {
    this._darkTheme = darkTheme;
  }

  public getTheme(): boolean {
    return this._darkTheme;
  }
}

// Usage:
const configManager = ConfigManager.getInstance();
configManager.setTheme(true);
console.log(configManager.getTheme()); // true
