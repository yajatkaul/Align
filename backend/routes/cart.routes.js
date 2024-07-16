import express from "express";
import { sendCard } from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/cart", sendCard);

export default router;
