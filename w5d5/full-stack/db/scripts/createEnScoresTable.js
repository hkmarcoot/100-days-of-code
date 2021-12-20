/*
- Import query from db/index.js 
- Write SQL query to create a table - look at the books data to decide on columns and name 
- Use our query function and hand it our SQL string inside of a createBooksTable function 
- Call our createBooksTable function
*/

import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS enscores (id SERIAL PRIMARY KEY, name TEXT, round INT, score INT)`;

async function createEnScoresTable() {
    const res = await query(sqlString);
    console.log("Created scores table", res);
}

createEnScoresTable();