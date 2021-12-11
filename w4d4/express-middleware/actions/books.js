import fs from "fs";

const FILENAME = "Books.json";

export function createBook(req, res) {
  const rawData = fs.readFileSync(FILENAME);
  const json = JSON.parse(rawData);

  const book = req.body;

  json.push(book);

  fs.writeFileSync(FILENAME, JSON.stringify(json, null, 2));

  res.json(book);
}

export function deleteBook(req, res) {
  const rawData = fs.readFileSync(FILENAME);
  const json = JSON.parse(rawData);

  const id = Number(req.params.id);

  const book = json.find((element) => element.id === id);

  const result = json.filter((element) => element.id !== id);

  fs.writeFileSync(FILENAME, JSON.stringify(result, null, 2));

  res.json(book);
}

export function getAllBooks(req, res) {
  const rawData = fs.readFileSync(FILENAME);
  const json = JSON.parse(rawData);

  res.json(json);
}

export function getSingleBook(req, res) {
  const rawData = fs.readFileSync(FILENAME);
  const json = JSON.parse(rawData);

  const id = Number(req.params.id);

  const book = json.find((element) => element.id == id);

  res.json(book);
}

export function updateBook(req, res) {
  const rawData = fs.readFileSync(FILENAME);
  const json = JSON.parse(rawData);

  const id = Number(req.params.id);

  const book = json.find((element) => element.id == id);

  book.title = req.body.title;

  const index = json.findIndex((element) => element.id === book.id);

  json[index] = book;

  fs.writeFileSync(FILENAME, JSON.stringify(json, null, 2));

  res.json(book);
}
