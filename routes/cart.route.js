import express from "express";
import Cart from "../model/cart.model.js";

import { addProductToCart, removeProductToCart } from "../controller/cart.controller.js";
// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/addProductToCart", addProductToCart);

router.post("/removeProductToCart", removeProductToCart);

export default router;
