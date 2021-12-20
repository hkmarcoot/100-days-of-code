import pg from "pg";

import * as config from './config.js';

console.log('dbPort', config.dbPort);
console.log('databaseHost:- ', config.databaseHost);
console.log('databaseName:- ', config.databaseName);
console.log('username:- ', config.username);
console.log('password:- ', config.password);

// const pool = new pg.Pool({
//     user: config.username,
//     host: config.databaseHost,
//     database: config.databaseName,
//     password: config.password,
//     port: config.dbPort,
//     ssl: {rejectUnauthorized: false}
// });

// export default function query(text, params, callback) {
//     return pool.query(text, params, callback);
// }