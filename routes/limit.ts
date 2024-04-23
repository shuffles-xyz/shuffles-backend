import express from "express";
import { createLimitOrder, getLimitOrder, getAllLimitOrders } from "../controllers/limit/limit";
import { validateCreateLimit, validateGetAllLimit, validateGetLimit } from "../middlewares/limit";

const router = express.Router();

router.post("/create", validateCreateLimit, createLimitOrder);

router.post("/get", validateGetLimit, getLimitOrder);

router.post("/getAll", validateGetAllLimit, getAllLimitOrders);

export default router;