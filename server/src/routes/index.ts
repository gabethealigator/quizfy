import { Router } from "express";
import spotifyRoutes from "./spotify.routes";

const router = Router();

router.use('/spotify', spotifyRoutes);

export default router;
