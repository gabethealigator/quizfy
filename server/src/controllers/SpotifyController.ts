import { type Request, type Response } from 'express';
import * as SpotifyService from '../services/SpotifyService';
import axios from 'axios';

export const getAuthUrl = (req: Request, res: Response) => {
  const url = SpotifyService.getAuthUrl();
  res.json({ url });
};

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ error: 'No authorization header' });
    }

    const token = authHeader.replace('Bearer ', '');
    const userProfile = await SpotifyService.getUserProfile(token);
    res.json(userProfile);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
    res.status(500).json({ error: (error as Error).message });
  }
};

