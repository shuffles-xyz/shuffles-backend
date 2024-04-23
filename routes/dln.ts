import express from "express";
import { getList } from "../controllers/DLN/getList";
import validateGetTokenList from "../middlewares/dln";
const router = express.Router();

router.get("/token-list/:chainId", validateGetTokenList, getList);

export default router;