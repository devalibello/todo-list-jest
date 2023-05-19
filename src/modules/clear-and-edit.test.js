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

describe('Test Updating Item', () => {
  beforeEach(() => {
    global.localStorage.clear();
  });
  test('Test updating new item description', () => {
    const newItem1 = new Tasks('Item 1', 1);
    const books = new Books();
    books.addEntry(newItem1);
    books.updateItem(1, 'New Item 1');
    expect(books.toDoTasks[0].description).toBe('New Item 1');
  });

  test('Test new item index', () => {
    const newItem1 = new Tasks('Item 1', 1);
    const books = new Books();
    books.addEntry(newItem1);
    books.updateItem(1, 'New Item 1');
    expect(books.toDoTasks[0].index).toBe(1);
  });
});