import './style.css';
import Books from './modules/class.js';
import Tasks from './modules/object.js';

const itemInput = document.getElementById('input-item');

const books = new Books();
books.updateToDoList();

itemInput.addEventListener('focusout', () => {
  const newTask = new Tasks(itemInput.value, books.toDoTasks.length + 1);
  books.addEntry(newTask);
  books.updateToDoList();
  itemInput.value = '';
});

itemInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const newTask = new Tasks(itemInput.value, books.toDoTasks.length + 1);
    books.addEntry(newTask);
    books.updateToDoList();
    itemInput.value = '';
  }
});

window.ticked = (index) => {
  document.getElementById(index).parentElement.classList.toggle('complete');
  books.toDoTasks[index - 1].completed = !books.toDoTasks[index - 1].completed;
  books.saveToDoList();
};

window.removeItem = (index) => {
  books.remove(index);
  books.updateToDoList();
};

window.clearAll = () => {
  books.clearTicked();
};

window.editItem = (index) => {
  books.updateItem(index, document.getElementById(`edit${index}`).value);
};