import Books from './class.js';
import Tasks from './object.js';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('Tests for Adding Items', () => {
  test('Add 1 item', () => {
    const newTask1 = new Tasks('list item 1', 1);
    const books = new Books();
    books.addEntry(newTask1);
    expect(books.toDoTasks[0].description).toBe('list item 1');
  });
});

describe('Tests for Removing Items', () => {
  test('Add 3 items then remove 1 item', () => {
    const newTask1 = new Tasks('list item 1', 1);
    const newTask2 = new Tasks('list item 2', 2);
    const newTask3 = new Tasks('list item 3', 3);
    const books = new Books();
    books.addEntry(newTask1);
    books.addEntry(newTask2);
    books.addEntry(newTask3);
    books.remove(2);
    expect(books.toDoTasks[0].description).toBe('list item 1');
    expect(books.toDoTasks[1].description).toBe('list item 3');
  });
});

describe('Tests for Removing Items', () => {
  test('Add 3 items then remove 1 item', () => {
    const newTask1 = new Tasks('list item 1', 1);
    const newTask2 = new Tasks('list item 2', 2);
    const newTask3 = new Tasks('list item 3', 3);
    const books = new Books();
    books.addEntry(newTask1);
    books.addEntry(newTask2);
    books.addEntry(newTask3);
    books.remove(2);
    expect(books.toDoTasks[0].description).toEqual('list item 1');
    expect(books.toDoTasks[1].description).toEqual('list item 3');
  });
});