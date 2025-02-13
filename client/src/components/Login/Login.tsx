import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../utils/api";
import { FaSpotify } from "react-icons/fa";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const data = await api.get('/api/v1/spotify/auth');
      window.location.href = data.url;
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    window.location.href = "/home";
    return null;
  }

  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to Quizfy</h1>
        <p className="text-xl text-base-content/70">
          Test your music knowledge with friends
        </p>
      </div>

      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl mb-4">Get Started</h2>
          <p className="mb-6 text-base-content/70">
            Connect with your Spotify account to access your playlists and start playing
          </p>
          <button
            onClick={handleLogin}
            className="btn btn-primary btn-lg gap-3 w-full"
            disabled={isLoading}
          >
            <FaSpotify className="text-2xl" />
            {isLoading ? "Connecting..." : "Connect with Spotify"}
          </button>
        </div>
      </div>

      <div className="mt-8 text-sm text-base-content/60 text-center">
        <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
      </div>
    </div>
  );
};

export default Login;
