import { Router } from "express";
import { getUserData } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = Router();

router.use(isAuthenticated);
router.get("/", getUserData);

export default router;
