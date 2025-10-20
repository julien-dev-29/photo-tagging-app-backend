import { Router } from "express";
import controller from "../controllers/controller.ts";



const router = Router()

router.get("/", controller.get)
router.post("/check", controller.check)
router.post("/record", controller.record)
router.get("/records", controller.getRecords)

export default router