import express from "express";
import { Request, Response } from "express";
// import linkRoutes from "./routes/link.routes";

const app = express();

app.use(express.json());

// app.use("/api", linkRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API LBW");
});

export default app;
