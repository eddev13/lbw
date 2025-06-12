import { Router } from "express";
import { LinkController } from "../controllers/LinkController";

const router = Router();

router.post("/link", LinkController.createLink);
router.get("/link", LinkController.getLinks);
router.get("/link/:username", LinkController.getLinkByUsername);
router.put("/link/:username", LinkController.updateLink);
router.delete("/link/:username", LinkController.deleteLink);

export default router;
