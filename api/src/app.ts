import express from "express";
import { Request, Response } from "express";
import linkRoutes from "./routes/link.routes";
import requestLogger from "./middlewares/requestLogger";
import errorHandler from "./middlewares/errorHandler";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(requestLogger);

app.use("/api", linkRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>API LBW... @eddev13</h1>");
});

app.use(errorHandler);

export default app;
