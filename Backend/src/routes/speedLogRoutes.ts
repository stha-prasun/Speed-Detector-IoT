import { Router } from "express";
import { createLog } from "../controllers/speedLogController";

const router: Router = Router();

router.post("/create", createLog);

export default router;
