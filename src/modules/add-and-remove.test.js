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
  
  global.localStorage = new LocalStorageMock;

  //TRY ONE

//   const setLocalStorage = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
//   };

//   test("data is added into local storage", () => {
//     const storageKey = "books";
//     const storageValue = new Tasks('workout', 1);;
//     setLocalStorage(storageKey, storageValue);
//     expect(localStorage.getItem(storageKey)).toEqual(JSON.stringify(storageValue));
//   });


//TRY TWO

  test("data is added into local storage", () => {
    const newTask = new Tasks('workout', 1);
    const books = new Books();
    const value = books.addEntry(newTask);
    expect(value).toEqual(newTask);
  });


//TRY THREE


// const setLocalStorage = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
//   };

//   test("data is added into local storage", () => {
//     const storageKey = "books";
//     const storageValue = new Tasks('workout', 1);;
//     setLocalStorage(storageKey, storageValue);
//     const books = new Books();
//     expect(localStorage.getItem(storageKey)).toEqual(books.addEntry(storageValue));
//   });
