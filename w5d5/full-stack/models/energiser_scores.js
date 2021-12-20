import query from "../db/index.js";

export async function getAllScores() {
  const data = await query(`SELECT * FROM enscores;`);
  return data.rows;
}

export async function getScoreById(id) {
  const data = await query(`SELECT * FROM enscores WHERE id = $1;`, [id]);
  return data.rows;
}

export async function getScoresByName(name) {
  const data = await query(
    `SELECT * FROM enscores WHERE name ILIKE '%' || $1 || '%'; `,
    [name]
  );
  return data.rows;
}