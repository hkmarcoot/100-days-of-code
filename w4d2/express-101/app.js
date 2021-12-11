import express from "express";

import {getBooks, findBookByID} from "./models/books.js";

console.log(getBooks);

const app = express();

const PORT = 3000;

//handle the requests

//Get "/" {message: "Welcome to our book API"} , "/" is the path

app.get("/", function (req, res) {
  const data = { message: "Welcome to the best book API in the world" };
  res.json(data);
});

//Send all of the books
app.get("/books", function (req, res) {
  console.log("Hello there, I was requested");
  const books = getBooks();
  res.json(books);
});

//We want to send back a single book
// GET "/books/1" return book with the ID 1
app.get("/books/:id", function (req, res) {
  console.log(req.params.id);
  //ID from a string into a number
  const id = Number(req.params.id);
  //find the correct book with the id from the books array
  const found = findBookByID(id);

  //if we didn't find the book, then tell the user it doesn't exist
  if (found === undefined) {
    res.json({ message: `Book does not exist with as id of ${req.params.id}` });
    return;
  }
  //give back the correct book
  res.json({ message: "I found the book for you", books: found });
});

//test the request route
app.get("/user/:id?", function userIdHandler(req, res) {
  console.log(req.route);
  res.send("GET");
});

//test the request route
app.get('/search', (req, res) => {
  console.log(req.query.keyword) // "great-white"
})

//get the server to listen to requests

app.listen(PORT, function () {
  console.log("I'm up and listening");
});
