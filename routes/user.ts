import express from "express";
import createUser from "../controllers/user/user";

const router = express.Router();

router.post("/create", createUser);

export default router;