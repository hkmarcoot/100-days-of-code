import query from "../db/index.js";

export async function getAllBooks() {
  const data = await query(`SELECT * FROM books;`);
  return data.rows;
}

export async function getBookById(id) {
  const data = await query(`SELECT * FROM books WHERE id = $1;`, [id]);
  return data.rows;
}

export async function getBooksByTitle(title) {
  const data = await query(
    `SELECT * FROM books WHERE title ILIKE '%' || $1 || '%'; `,
    [title]
  );
  return data.rows;
}