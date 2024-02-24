// Abstract Products
abstract class UserManagement {
  abstract login(): void;
  abstract logout(): void;
}

abstract class ContentManagement {
  abstract createPost(): void;
  abstract deletePost(): void;
}

// Concrete Products for English
class EnglishUserManagement extends UserManagement {
  login(): void {
    console.log("Login");
  }
  logout(): void {
    console.log("Logout");
  }
}

class EnglishContentManagement extends ContentManagement {
  createPost(): void {
    console.log("Create post");
  }
  deletePost(): void {
    console.log("Delete post");
  }
}

// Concrete Products for Thai
class ThaiUserManagement extends UserManagement {
  login(): void {
    console.log("เข้าสู่ระบบ");
  }
  logout(): void {
    console.log("ออกจากระบบ");
  }
}

class ThaiContentManagement extends ContentManagement {
  createPost(): void {
    console.log("สร้างเนื้อหา");
  }
  deletePost(): void {
    console.log("ลบเนื้อหา");
  }
}

// Abstract Factory Interface
interface ILocaleFactory {
  createUserManagement(): UserManagement;
  createContentManagement(): ContentManagement;
}

// Abstract Factory
abstract class LocaleFactory implements ILocaleFactory {
  abstract createUserManagement(): UserManagement;
  abstract createContentManagement(): ContentManagement;
}

// Concrete Factories
class EnglishLocaleFactory extends LocaleFactory {
  createUserManagement(): UserManagement {
    return new EnglishUserManagement();
  }
  createContentManagement(): ContentManagement {
    return new EnglishContentManagement();
  }
}

class ThaiLocaleFactory extends LocaleFactory {
  createUserManagement(): UserManagement {
    return new ThaiUserManagement();
  }
  createContentManagement(): ContentManagement {
    return new ThaiContentManagement();
  }
}

// Locale Type
type Locale = "en" | "th";

// Usage based on locale
function getFactoryForLocale(locale: Locale): LocaleFactory {
  switch (locale) {
    case "en":
      return new EnglishLocaleFactory();
    case "th":
      return new ThaiLocaleFactory();
    default:
      throw new Error("Locale not supported");
  }
}

// Usage
const UIFactory = getFactoryForLocale("th"); // Thai

const userManagement = UIFactory.createUserManagement();
userManagement.login(); // Output: เข้าสู่ระบบ

const contentManagement = UIFactory.createContentManagement();
contentManagement.createPost(); // Output: สร้างเนื้อหา
