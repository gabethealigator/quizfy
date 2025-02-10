export interface SpotifyPlaylist {
  id: string;
  name: string;
  images?: { url?: string }[];
  owner?: { display_name: string };
} 