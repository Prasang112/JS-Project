import express from "express";
import { add, update, remove, productList, particularProduct, productListByCategory } from "../controller/product.controller.js";
import multer from "multer";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
const upload = multer({ dest: "public/images/" });

router.post("/add", upload.single("image"), add);
router.post("/update", update);
router.post("/remove", remove);
router.get("/list", verifyToken, productList);
router.post("/patricular", particularProduct);
router.post("/bycategory", productListByCategory);

export default router;