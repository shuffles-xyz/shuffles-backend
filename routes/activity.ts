import express from "express";
import { createActivity, getActivity } from "../controllers/activity/activity";
import { validateCreateActivity, validateGetActivity } from "../middlewares/activity";

const router = express.Router();

router.post("/create", validateCreateActivity, createActivity);

router.post("/get", validateGetActivity, getActivity);

export default router;