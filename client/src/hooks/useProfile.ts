import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from '../utils/api';

const useProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const { token, logout } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.get('/api/v1/spotify/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(data);
      } catch (error) {
        console.error("Fetching user profile error: ", error);
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token, logout]);

  return { profile, isLoading, error };
};

export default useProfile; 