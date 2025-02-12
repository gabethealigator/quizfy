import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID as string;
const SPOTIFY_REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI as string;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_REDIRECT_URI) {
  throw new Error('Missing required environment variables');
}

export const getAuthUrl = (): string => {
  const scopes = "user-read-private user-read-email playlist-read-private";
  return `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=${scopes}`;
};

export const getUserProfile = async (accessToken: string) => {
  const response = await axios.get("https://api.spotify.com/v1/me", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const getCurrentUserPlaylists = async (accessToken: string) => {
  const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};
