import express from "express";
import { signUp, signIn, viewAllUser, updateUser, viewProfile, addCategory, addBowler, addTeam } from "../controller/user.controller.js";
import { verifyToken } from "../middleware/user.autho.js";
const router = express.Router();

router.post("/signup", signUp);

router.post("/signin", verifyToken, signIn);

router.post("/viewuser", viewAllUser);

router.post("/update",verifyToken, updateUser);

router.post("/particular", viewProfile)

router.post("/insert", addCategory);

router.post("/addbowler", addBowler);

router.post("/addteam", addTeam);

export default router;
