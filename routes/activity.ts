import express from "express";
import { createActivity, getActivity } from "../controllers/activity/activity";

const router = express.Router();

router.post("/create", createActivity);

router.post("/get", getActivity);

export default router;