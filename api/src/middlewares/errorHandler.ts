import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Erro capturado", err);

  if (err instanceof ZodError) {
    res.status(400).json({
      error: err.issues.map((issue) => issue.message),
    });
    return;
  }

  res.status(500).json({
    error: "Erro interno no servidor [@@@@] ", 
  });
  return;
};

export default errorHandler;
