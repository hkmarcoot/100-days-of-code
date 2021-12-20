import query from "../db/index.js";

// import cats from "../cats-data.js";

// //Need to add curly brackets to cats to get data
// // import {cats} from "../app.js";

// export async function getCats() {
//     return cats;
// }

// export async function getCatById(requestId) {
//     const cat = cats.find(({ id }) => id === requestId);
  
//     if (cat) {
//       return cat;
//     }
  
//     throw new Error(`No cat with ${requestId} found.`);
// }

// export async function getCatsByName(search) {
    
//     const searchResults = cats.filter(({ name }) =>
//       name.toLowerCase().includes(search.toLowerCase())
//     );
  
//     return searchResults;
// }

export async function getCats() {
  const data = await query(`SELECT * FROM cats;`);
  return data.rows;
}

export async function getCatById(id) {
  const data = await query(`SELECT * FROM cats WHERE id = $1;`, [id]);
  return data.rows;
}

export async function getCatsByName(name) {
  const data = await query(
    `SELECT * FROM cats WHERE name ILIKE '%' || $1 || '%'; `,
    [name]
  );
  return data.rows;
}