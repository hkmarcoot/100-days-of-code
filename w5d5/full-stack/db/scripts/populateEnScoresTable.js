// In db/scripts/

import query from "../index.js";
import enscores from "../../enScores-data.js";

async function populateEnScoresTable() {
  for (let i = 0; i < enscores.length; i++) {
    const name = enscores[i].name;
    const round = enscores[i].round;
    const score = enscores[i].score;

    const res = await query(
      `INSERT INTO enscores (name, round, score) VALUES ($1, $2, $3) RETURNING name`,
      [name, round, score]
    );
    console.log(res);
  }
}

populateEnScoresTable();