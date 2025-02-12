import { Router, Request, Response, RequestHandler } from "express";
import { getAuthUrl, getUserProfile, getCurrentUserPlaylists } from "../controllers/SpotifyController.js";

const router = Router();

router.get("/auth-url", getAuthUrl as RequestHandler);
router.get("/profile", getUserProfile as RequestHandler);
router.get("/playlists", getCurrentUserPlaylists as RequestHandler);

export default router;
