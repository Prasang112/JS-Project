import express from "express";
import { signUp, signIn, viewUser, removeUser } from "../controller/admin.controller.js";
import { verifyToken } from "../middleware/admin.autho.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", verifyToken, signIn);
router.post("/viewuser", viewUser);
router.post("/remove", removeUser);

export default router;