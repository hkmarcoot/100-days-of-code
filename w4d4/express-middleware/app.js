import express from "express";
import * as actions from "./actions/books.js";

const PORT = 3000;
const app = express();

//The 'body-parser' middleware only handles JSON and urlencoded data, not multipart
//body-parser is now inbuilt with express.js.
app.use(express.json());

//Middleware Task 1
app.use(function (req, res, next) {
  console.log("Request received! ");
  //Make sure in postman the content type is JSON
  console.log("Body: ", req.body);

  next();
})

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//Task 2
app.post("/", function (req,res, next) {
  console.log("POST request received");
  const timestamp = new Date().toString();

  req.body.timestamp = timestamp;

  console.log("This is the timestamp", timestamp);

  next();
});

app.get("/books", actions.getAllBooks);

app.get("/books/:id", actions.getSingleBook);

app.post("/books", actions.createBook);

app.patch("/books/:id", actions.updateBook);

app.delete("/books/:id", actions.deleteBook);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
