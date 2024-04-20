import express from "express";
import { getTokenInfo } from "../controllers/tokens/tokenInfo";
const router = express.Router();

router.get("/:tokenAddress", getTokenInfo);

export default router;

