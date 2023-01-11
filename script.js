/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
const bookList = document.querySelector(".booksList");
const form = document.querySelector(".form");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const addBtn = document.querySelector("#addBtn");

const books = [];

class EachBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

