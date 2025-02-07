import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

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

        const response = await fetch("/api/spotify/profile", {
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