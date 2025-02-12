import express from 'express'
import * as SpotifyService from '../services/SpotifyServices'

const router = express.Router();

interface SpotifyError {
  status: number;
  message: string;
}

router.get('/auth', (_req, res) => {
  const url = SpotifyService.getAuthUrl();
  res.json({ url })
})

router.get('/profile', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "No authorization header" });
    }

    const token = authHeader.replace("Bearer ", "");
    const userProfile = await SpotifyService.getUserProfile(token);
    res.json(userProfile);
  } catch (error) {
    const spotifyError = error as SpotifyError;

    if (spotifyError.status === 401) {
      return res.status(401).json({
        error: "Invalid or expired token"
      });
    }

    console.error('Profile fetch error:', error);
    res.status(500).json({
      error: spotifyError.message || "An unexpected error occurred"
    });
  }
});

router.get('/playlists', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "No authorization header" });
    }

    const token = authHeader.replace("Bearer ", "");
    const playlists = await SpotifyService.getCurrentUserPlaylists(token);
    res.json(playlists)
  } catch (error) {
    const spotifyError = error as SpotifyError;

    if (spotifyError.status === 401) {
      return res.status(401).json({
        error: "Invalid or expired token"
      });
    }

    console.error('Playlists fetch error:', error);
    res.status(500).json({
      error: spotifyError.message || "An unexpected error occurred"
    });
  }
})

export default router;
