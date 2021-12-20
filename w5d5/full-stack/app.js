import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import router from "./routes/energiser_scores.js";

import { html } from "./config.js";

var app = express();

//This line magical solved "cannot find http://localhost:3000/main.js"
app.use(express.static("public"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/enscores", router);

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
    res.sendFile(html);
  });

export default app;
