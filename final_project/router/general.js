const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get the book list available in the shop
public_users.get("/", function (req, res) {
  // Send JSON response with formatted books data
  res.send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  // Send JSON response based on the ISBN
  let book = books[req.params.isbn];
  if (book) {
    res.send(JSON.stringify(book, null, 4));
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Get book details based on author
public_users.get("/author/:author", function (req, res) {
  // 1. Obtain all the keys for the ‘books’ object.
  // 2. Iterate through the ‘books’ array & check the author matches the one provided in the request parameters.
  let authorBooks = [];
  Object.keys(books).forEach((isbn) => {
    if (books[isbn].author.toLowerCase() === req.params.author.toLowerCase()) {
      authorBooks.push(books[isbn]);
    }
  });
  if (authorBooks.length > 0) {
    res.send(JSON.stringify(authorBooks, null, 4));
  } else {
    res.status(404).json({ message: "No books found by this author" });
  }
});

// Get all books based on title
public_users.get("/title/:title", function (req, res) {
  let titleBooks = [];
  Object.keys(books).forEach((isbn) => {
    if (books[isbn].title.toLowerCase() === req.params.title.toLowerCase()) {
      titleBooks.push(books[isbn]);
    }
  });
  if (titleBooks.length > 0) {
    res.send(JSON.stringify(titleBooks, null, 4));
  } else {
    res.status(404).json({ message: "No books found with this title" });
  }
});

//  Get book review
public_users.get("/review/:isbn", function (req, res) {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.general = public_users;
