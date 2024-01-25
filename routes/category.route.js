import express from "express";
import { categoryList, deleteCategory, getCategoryById, saveCategory } from "../controller/category.controller.js";

const router = express.Router();

router.post("/save", saveCategory);
router.get("/list", categoryList);

router.get("/:categoryId", getCategoryById);

router.delete("/categoryKiId", deleteCategory);

export default router;