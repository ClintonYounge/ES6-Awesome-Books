export class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.table = document.querySelector('#book-list tbody');
    this.form = document.querySelector('form');
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');

    // Bind event listeners
    this.form.addEventListener('submit', this.addBook.bind(this));
    this.table.addEventListener('click', this.removeBook.bind(this));
    // Display books
    this.displayBooks();
  }

  // Save books to local storage
  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  // Display all books in the list
  displayBooks() {
    this.table.innerHTML = '';
    this.books.forEach((book) => {
      const row = document.createElement('tr');
      row.className = 'row';
      row.innerHTML = `
        <td class="content"><strong>${book.title}</strong><em> &ensp;by&ensp; </em>  <strong>${book.author}<strong></td> 
        <td class ="delete-btn" ><button class="delete"><strong class="delete-button">Remove</strong></button></td>
      `;
      this.table.appendChild(row);
    });
  }

  // Add a new book to the list
  addBook(e) {
    e.preventDefault();
    const title = this.titleInput.value.trim();
    const author = this.authorInput.value.trim();
    if (!title || !author) {
      return;
    }
    const book = { title, author };
    this.books.push(book);
    this.saveBooks();
    this.displayBooks();
    this.titleInput.value = '';
    this.authorInput.value = '';
  }

  // Remove a book from the list
  removeBook(e) {
    if (!e.target.classList.contains('delete-button')) {
      return;
    }
    const row = e.target.closest('tr');
    const index = Array.from(this.table.children).indexOf(row);
    this.books.splice(index, 1);
    this.saveBooks();
    this.displayBooks();
  }
}