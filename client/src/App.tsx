import { useEffect } from 'react'
import './App.css'
import Router from './routes/Router';
import { AuthProvider, useAuth } from './context/AuthContext';

function AuthHandler() {
  const { login } = useAuth();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get('access_token');
      if (token) {
        login(token);
        window.location.hash = '';
        window.location.href = '/main';
      }
    }
  }, [login]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <AuthHandler />
      <Router />
    </AuthProvider>
  );
}

export default App

