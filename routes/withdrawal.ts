import express from "express";
import createWithdrawal from "../controllers/withdraw/withdraw";
import validateWithdrawal from "../middlewares/withdraw/withdraw";

const router = express.Router();

router.post("/create", validateWithdrawal, createWithdrawal);

export default router;