import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const usePlaylists = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playlists, setPlaylists] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const { token, logout } = useAuth();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/spotify/playlists", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            logout();
            throw new Error("Session expired. Please login again.");
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
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
