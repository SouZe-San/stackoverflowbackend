import express from "express";
const router = express.Router();

// all Work function
import { subscriptionType, validationCheck } from "../controllers/subscriptions.js";

// middleware

// Routes
router.post("/verify", subscriptionType);
router.post("/validity", validationCheck);

export default router;
