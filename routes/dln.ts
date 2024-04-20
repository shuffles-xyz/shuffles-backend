import express from "express";
import { getList } from "../controllers/DLN/getList";
const router = express.Router();

router.get("/token-list/:chainId", getList);

export default router;