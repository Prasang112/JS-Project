import express from "express";
import { add, viewEvent, registerEvent } from "../controller/event.controller.js";

const router = express.Router();

router.post("/add", add);

router.post("/viewevent", viewEvent);

router.post("/registerevent", registerEvent);

export default router;