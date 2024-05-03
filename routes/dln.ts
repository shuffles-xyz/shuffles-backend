import express from "express";
import { getList } from "../controllers/DLN/getList";
import validateGetTokenList from "../middlewares/dln";
const router = express.Router();

router.get("/token-list/:chainId", getList);

export default router;