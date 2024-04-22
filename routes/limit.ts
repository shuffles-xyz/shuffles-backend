import express from "express";
import { createLimitOrder, getLimitOrder, getAllLimitOrders } from "../controllers/limit/limit";

const router = express.Router();

router.post("/create", createLimitOrder);

router.post("/get", getLimitOrder);

router.post("/getAll", getAllLimitOrders);

export default router;