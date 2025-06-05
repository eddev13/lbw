import { Router, Request, Response } from "express";
import { LinkController } from "../controllers/LinkController";

const router = Router();

router.post("/link", LinkController.createLink);

export default router;
