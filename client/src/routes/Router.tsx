import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import PrivateRoute from './PrivateRoute';
import PlaylistSelector from '../pages/PlaylistSelector';
import Layout from '../components/Layout/Layout';
import GuessOptions from '../pages/GuessOptions';
import GameSetup from '../pages/GameSetup';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/versus-local" element={<GuessOptions />} />
            <Route path="/versus-local/:gameType/playlists" element={<PlaylistSelector />} />
            <Route path="/versus-local/:gameType/:playlistId/game-setup" element={<GameSetup />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
