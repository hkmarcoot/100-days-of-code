import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

// import express, { Request, Response } from "express";
import express, { Express, Response, Request } from "express";
import StatusCodes from "http-status-codes";
import "express-async-errors";
import routes from "./routes/posts";
// import apiRouter from "./routes/api";
import logger from "jet-logger";

// Constants
// const app = express();
const router: Express = express();
const { BAD_REQUEST } = StatusCodes;

/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  router.use(morgan("dev"));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === "production") {
  router.use(helmet());
}

/***********************************************************************************
 *                         API routes and error handling
 **********************************************************************************/

// Add api router
router.use("/", routes);

// Setup Error handling
router.use((err: Error, _: Request, res: Response) => {
  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

// Export here and start in a diff file (for testing).
export default router;
