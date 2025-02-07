import { Router } from "express";
import * as SpotifyController from "../controllers/SpotifyController";

const router = Router();

router.get('/auth-url', SpotifyController.getAuthUrl);
router.get('/profile', SpotifyController.getUserProfile);

export default router;
