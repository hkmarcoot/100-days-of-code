import express from "express";
const router = express.Router();

import { getAllScores, getScoreById, getScoresByName } from "../models/energiser_scores.js";

// GET all scores
router.get("/", async (req, res) => {
  //Example localhost:3000/enscores?name=Mary
  const { name, scores } = req.query;

  if (name) {
    const searchResults = await getScoresByName(name);
    res.json({
      success: true,
      message: `Searched names for ${name}`,
      payload: searchResults,
    });
    return;
  }
  //Example localhost:3000/enscores/
  const allScores = await getAllScores();

  res.json({ success: true, message: `all scores`, payload: allScores });
});

// GET specific book by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const requestedScore = await getScoreById(id);
  res.json({
    success: true,
    message: `Found energiser score for id ${id}`,
    payload: requestedScore,
  });
});

export default router;
