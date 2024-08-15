import express from "express";
import { exportToCSV } from "../utils/getCsv.js";

const router = express.Router();

router.get("/getCsv", exportToCSV);

export default router;
