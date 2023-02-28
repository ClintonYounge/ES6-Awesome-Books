import { BookList } from './modules/booklist.js';
import { DateTime } from './modules/luxon.js';

// Display Date Time
const currentDateHTML = document.querySelector('.date-time');

setInterval(() => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  currentDateHTML.innerHTML = now;
}, 1000);

// Create a new instance of the BookList class
const bookList = new BookList();
bookList.displayBooks();