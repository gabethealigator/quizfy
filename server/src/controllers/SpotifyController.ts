import type { Request, Response } from 'express';
import * as SpotifyService from '../services/SpotifyService';

export const getAuthUrl = (req: Request, res: Response) => {
  const url = SpotifyService.getAuthUrl();
  res.json({ url });
};

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userProfile = await SpotifyService.getUserProfile(req.headers.authorization as string);
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

