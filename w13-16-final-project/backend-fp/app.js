import express, { json } from "express";
import path from "path";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import connectDB from "./db/connection.js";
import dotenv from "dotenv";
dotenv.config();
import errorHandler from "./middlewares/errorHandler.js";

import eventsRouter from "./routes/eventsRouter.js";
import usersRouter from "./routes/usersRouter.js";
import commentRouter from "./routes/commentRouter.js";

const messages = [];
connectDB();

const app = express();
// import io from "./bin/www.js";

//---------middlewares---------------//

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(logger("dev"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/events", eventsRouter);
app.use("/users", usersRouter);
app.use("/comments", commentRouter);

app.use("/users", usersRouter);
app.use("/comments", commentRouter);

app.use(errorHandler);

// app.use(function (req, res, next) {
//   res
//     .status(404)
//     .json({ message: "We couldn't find what you were looking for 😞" });
// });

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

//-----------------------------------------//

export default app;
