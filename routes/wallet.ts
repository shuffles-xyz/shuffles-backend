import express from "express";
import { getTokenBalance } from "../controllers/wallet/balance";
const router = express.Router();

router.get("/:address", getTokenBalance);


export default router;