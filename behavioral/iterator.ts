// Iterator Interface
interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

// Aggregate Interface
interface Aggregate {
  createIterator(): Iterator<any>;
}

// Concrete Aggregate
class Numbers implements Aggregate {
  public collection: number[] = [];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  createIterator(): Iterator<number> {
    return new NumbersIterator(this);
  }
}

// Concrete Iterator
class NumbersIterator implements Iterator<number> {
  private collection: Numbers;
  private position: number = 0;

  constructor(collection: Numbers) {
    this.collection = collection;
  }

  next(): number {
    // Return the next element in the collection
    return this.collection.collection[this.position++];
  }

  hasNext(): boolean {
    // Check if there is a next element in the collection
    return this.position < this.collection.collection.length;
  }
}

// Using the iterator
const numbers = new Numbers([1, 2, 3, 4, 5]);
const iterator = numbers.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
