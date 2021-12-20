// Don't change anything in this file! This helps serve the front end.
//From w4d5 recipe api Hackathon
import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const html = path.join(__dirname, `views`, `index.html`);

//---------------------------//
export const db = {
    user: process.env.USERNAME,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT
    // dbhost 
    // dbname 
    // username 
    // password
};