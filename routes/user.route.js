import express from "express";
import User from "../model/user.model.js";
import { signUp, signIn, update, addresstable } from "../controller/user.controller.js";


const router = express.Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/update", update);

router.post("/address", addresstable);

export default router;