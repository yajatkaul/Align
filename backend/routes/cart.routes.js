import express from "express";
import { sendCard } from "../controllers/cart.controller.js";
import {
  getCategories,
  getProducts,
  sendCategories,
  sendProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/cart", sendCard);
router.post("/category", sendCategories);
router.get("/category/get", getCategories);

router.post("/product", sendProducts);
router.get("/product/:id", getProducts);

export default router;
