/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
const bookContainer = document.querySelector('.booksList');
const form = document.querySelector('.form');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const addBtn = document.querySelector('#addBtn');

let bookList = [];

class SingleBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class DisplayBook {
  static bookUpload() {
    bookContainer.innerHTML = '';
    for (let i = 0; i < bookList.length; i += 1) {
      bookContainer.innerHTML += `
      <div class="book-wrapper">
      <div class="book-info">
      <p>"${bookList[i].title}"</p>
      <p>by</p>
      <p>${bookList[i].author}</p>
      </div>
      <button id='delete' type='button' onclick = 'DisplayBook.deleted(${i})'>Remove</button>
      </div>
     `;
      bookTitle.value = '';
      bookAuthor.value = '';
    }
  }

  static deleted(index) {
    bookList.splice(index, 1);
    DisplayBook.bookUpload();
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  static addBook() {
    const books = new SingleBook(bookTitle.value, bookAuthor.value);
    bookList.push(books);
  }
}

window.onload = () => {
  if (localStorage.getItem('bookList')) {
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }
  DisplayBook.bookUpload();
};

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  DisplayBook.addBook();
  DisplayBook.bookUpload();
  localStorage.setItem('bookList', JSON.stringify(bookList));
});
