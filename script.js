// const collection = document.getElementById('collection');
// const title = document.getElementById('book_title');
// const author = document.getElementById('book_author');
// const form = document.getElementById('form');

// let books = [];

// const addBook = (book) => {
//   collection.innerHTML += `
//     <li id='${book.id}'>
//       <p>${book.title}</p>
//       <p>${book.author}</p>
//       <button id='delete' type='button' onclick = 'removeBook(${book.id})'>Remove</button>
//     </li>
// `;
// };

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   if (title.value && author.value !== '') {
//     const book = {
//       id: Math.random(),
//       title: title.value,
//       author: author.value,
//     };

//     if (localStorage.getItem('books') === null) {
//       books = [];
//     } else {
//       books = JSON.parse(localStorage.getItem('books'));
//     }
//     books.push(book);
//     localStorage.setItem('books', JSON.stringify(books));
//     addBook(book);
//     form.reset();
//   }
// });

// function removeBook(bookId) {
//   const deleteBook = JSON.parse(localStorage.getItem('books'));

//   const newArray = deleteBook.filter((book) => book.id !== bookId);
//   localStorage.setItem('books', JSON.stringify(newArray));

//   const booksId = document.getElementById(bookId);
//   booksId.remove();
// }

// const storedBooks = JSON.parse(localStorage.getItem('books')) || [];

// if (localStorage.getItem('books')) {
//   storedBooks.map((book) => addBook(book));
// }

// removeBook();


const bookList = document.querySelector('.booksList');
const form = document.querySelector('.form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addBtn = document.querySelector('#addBtn');

let books = [];

const addBook = (book) => {
  bookList.innerHTML += `
    <tr id='${book.id}'>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><button id='delete' type='button' onclick = 'removeBook(${book.id})'>Remove</button></td>
    </tr>
`;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    if (title.value && author.value !== '') {
      const book = {
        id: Math.random(),
        title: title.value,
        author: author.value,
      };
  
      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
      console.log(addBook(book));
      form.reset();
    }
  });
  