import { Router } from "express";
import spotifyRoutes from "./spotify.routes.js";

const router = Router();

router.use('/spotify', spotifyRoutes);

export default router;
