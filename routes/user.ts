import express from "express";
import createUser from "../controllers/user/user";
import validateCreateUser from "../middlewares/user";

const router = express.Router();

router.post("/create", validateCreateUser, createUser);

export default router;