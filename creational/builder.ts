// User Interface
interface IUser {
  name: string;
  age?: number;
  phone?: string;
  address?: string;
}

// User Class
class User implements IUser {
  name: string;
  age?: number;
  phone?: string;
  address?: string;

  constructor(builder: UserBuilder) {
    this.name = builder.name;
    this.age = builder.age;
    this.phone = builder.phone;
    this.address = builder.address;
  }

  toString(): string {
    return JSON.stringify(this);
  }
}

// UserBuilder Class
class UserBuilder {
  name: string;
  age?: number;
  phone?: string;
  address?: string;

  constructor(name: string) {
    this.name = name;
  }

  setAge(age: number): UserBuilder {
    this.age = age;
    return this;
  }

  setPhone(phone: string): UserBuilder {
    this.phone = phone;
    return this;
  }

  setAddress(address: string): UserBuilder {
    this.address = address;
    return this;
  }

  build(): User {
    return new User(this);
  }
}

// Usage
// Creat object via builder: First set name only
const user1 = new UserBuilder("John Doe");

// Logic to get remaining data

//
// Set ohter data of user1 later -> when want to use user1 -> build()
user1.setAge(30).setPhone("1234567890").build();

// Use method of user1
console.log(user1.toString()); // User with name, age, and phone

// when something wrong, know from UserBuilder because user do not inheritance from User directly
