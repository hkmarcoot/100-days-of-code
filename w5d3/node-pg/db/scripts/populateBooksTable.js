// In db/scripts/

import query from "../index.js";
import books from "../../books-data.js";

async function populateBooksTable() {
  for (let i = 0; i < books.length; i++) {
    const title = books[i].title;
    const author = books[i].author;

    const res = await query(
      `INSERT INTO books (title, author) VALUES ($1, $2) RETURNING title`,
      [title, author]
    );
    console.log(res);
  }
}

populateBooksTable();