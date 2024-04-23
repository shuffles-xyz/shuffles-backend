import express from "express";
import { createDCA, getDCA, getAllDCA } from "../controllers/dca/dca";
import { validateCreateDCA, validateGetDCA, validateGetAllDCA } from "../middlewares/dca";

const router = express.Router();

router.post("/create", validateCreateDCA, createDCA);

router.post("/get", validateGetDCA, getDCA);

router.post("/getAll", validateGetAllDCA, getAllDCA);

export default router;