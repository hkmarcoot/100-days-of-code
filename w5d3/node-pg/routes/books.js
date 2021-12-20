import express from "express";
const router = express.Router();

import { getAllBooks, getBookById, getBooksByTitle } from "../models/books.js";

// GET all books
router.get("/", async (req, res) => {
  // const { title } = req.query;
  //Example: localhost:3000/books?title=harry
  const title = req.query.title;

  if (title) {
    const searchResults = await getBooksByTitle(title);
    res.json({
      success: true,
      message: `Searched titles for ${title}`,
      payload: searchResults,
    });
    return;
  }

  const books = await getAllBooks();

  res.json({ success: true, message: `all books`, payload: books });
});

// GET specific book by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const requestedBook = await getBookById(id);
  res.json({
    success: true,
    message: `Found book ${id}`,
    payload: requestedBook,
  });
});

export default router;