// routes/user.route.js
import express from "express";
import { addUser, Login } from "../controllers/usercontroller.js";

const router = express.Router();

router.post("/signup", addUser);
router.post("/login", Login);

export default router;
