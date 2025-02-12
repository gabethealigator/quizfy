import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/v1/spotify/auth");
      const data = await response.json();
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-4xl font-bold mb-4">Login com Spotify</h1>
      <button
        onClick={handleLogin}
        className="btn btn-primary"
        disabled={isLoading}
      >
        {isLoading ? "Carregando..." : "Entrar com Spotify"}
      </button>
    </div>
  );
};

export default Login;
