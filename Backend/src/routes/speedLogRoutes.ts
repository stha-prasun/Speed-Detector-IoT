import { Router } from "express";
import { createLog, getAllLogs } from "../controllers/speedLogController";

const router: Router = Router();

router.post("/create", createLog);

router.get("/get/all/:userId", getAllLogs);

export default router;
