import express from "express";
import { getTokenList } from "../controllers/DLN/getTokenList";
import { getList } from "../controllers/DLN/getList";
const router = express.Router();

router.get("/:chainId", getTokenList);
router.get("/token-list/:chainId", getList);

export default router;