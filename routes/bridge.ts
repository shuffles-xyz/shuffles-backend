import express from "express";
import { createBridge, getBridgeTx, getAllTransactions } from "../controllers/bridge/bridge";
import { validateCreateBridge, validateGetBridge, validateGetAllBridge } from "../middlewares/bridge";

const router = express.Router();

router.post("/create", validateCreateBridge, createBridge);

router.post("/get", validateGetBridge, getBridgeTx);

router.post("/getAll", validateGetAllBridge, getAllTransactions);

export default router;