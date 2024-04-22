import express from "express";
import { createDCA, getDCA, getAllDCA } from "../controllers/dca/dca";

const router = express.Router();

router.post("/create", createDCA);

router.post("/get", getDCA);

router.post("/getAll", getAllDCA);

export default router;