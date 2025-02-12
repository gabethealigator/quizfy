import { Router, Request, Response } from "express";
import spotifyRoutes from "./spotify.routes.js";

const router = Router();

// Add a health check endpoint
router.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

router.use('/spotify', spotifyRoutes);

export default router;
