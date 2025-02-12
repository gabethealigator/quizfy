import dotenv from "dotenv";

dotenv.config();

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID as string;
const SPOTIFY_REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI as string;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_REDIRECT_URI) {
  throw new Error("Missing required environment variables");
}

export const getAuthUrl = (): string => {
  const scopes = encodeURIComponent("user-read-private user-read-email playlist-read-private");
  return `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=${scopes}`;
};

export const getUserProfile = async (accessToken: string) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

export const getCurrentUserPlaylists = async (accessToken: string) => {
  const response = await fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

