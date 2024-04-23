import express from "express";
import { getTokenBalance } from "../controllers/wallet/balance";
import validateGetTokenBalance from "../middlewares/wallet";
const router = express.Router();

router.get("/:address", validateGetTokenBalance, getTokenBalance);

export default router;