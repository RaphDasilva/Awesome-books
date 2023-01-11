/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
const bookList = document.querySelector('.booksList');
const form = document.querySelector('.form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addBtn = document.querySelector('#addBtn');

const books = [];

class EachBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class AddBook {
  static putBook() {
    const book = new EachBook(title.value, author.value);
    books.push(book);
  }

  static bookUpload(arr) {
    bookList.innerHTML = '';
    for (let i = 0; i < arr.length; i += 1) {
      bookList.innerHTML += `
      <div class="book-wrapper">
        <div class="book-info">
        <p>"${arr[i].title}"</p>
        <p>by</p>
        <p>${arr[i].author}</p>
        </div>
        <button id='delete' type='button' onclick = 'AddBook.deleted(${i})'>Remove</button>
        </div>
       `;
      title.value = '';
      author.value = '';
    }
  }

  static deleted(index) {
    books.splice(index, 1);
    AddBook.bookUpload(books);
    localStorage.setItem('bookList', JSON.stringify(books));
  }
}

window.onload = () => {
  if (localStorage.getItem('bookList')) {
    const bookArr = JSON.parse(localStorage.getItem('bookList'));
    AddBook.bookUpload(bookArr);
  }
};

addBtn.addEventListener('click', () => {
  if (title.value === '' || author.value === '') return;
  AddBook.putBook();
  AddBook.bookUpload(books);
  localStorage.setItem('bookList', JSON.stringify(books));
});