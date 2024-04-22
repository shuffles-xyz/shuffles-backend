import express from "express";
import { createBridge, getBridgeTx, getAllTransactions } from "../controllers/bridge/bridge";

const router = express.Router();

router.post("/create", createBridge);

router.post("/get", getBridgeTx);

router.post("/getAll", getAllTransactions);

export default router;