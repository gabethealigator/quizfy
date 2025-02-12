import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { SpotifyPlaylist } from "../types/SpotifyTypes";
import { api } from '../utils/api';

const usePlaylists = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { token, logout } = useAuth();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.get('/api/v1/spotify/playlists', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Playlists response from usePlaylists', data)
        setPlaylists(data.items);
      } catch (error) {
        console.error("Fetching playlists error: ", error);
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchPlaylists();
    }
  }, [token, logout]);

  return { playlists, isLoading, error };
};

export default usePlaylists; 
