import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import NavBar from "./NavBar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const { token, logout } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        setError(null);

        console.log("Fetching profile with token:", token); // Debug log

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
        console.log("Profile data:", data); // Debug log
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

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  // @ts-expect-error the image is fetching correcly, if it doenst then the error
  // probably here
  const imageUrl = profile?.images?.[0]?.url;

  return (
    <>
      <div className="m-5">
        <NavBar profileImageUrl={imageUrl} />
        <div className="p-4">
          {isLoading ? (
            <div>Carregando...</div>
          ) : profile ? (
            <div>
              <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
          ) : (
            <div>No profile data available</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
