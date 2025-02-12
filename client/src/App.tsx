import { useEffect } from "react";
import "./App.css";
import Router from "./routes/Router";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { BrowserRouter, useNavigate } from "react-router-dom";

function AuthHandler() {
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get("access_token");
      if (token) {
        login(token);
        window.location.hash = "";
        navigate("/home");
      }
    }
  }, [login, navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHandler />
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
