import express from "express";
import getbooks from "../controllers/bookcontroller.js";

const router = express.Router();

router.get("/", getbooks);

export default router;
