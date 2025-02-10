import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import PrivateRoute from './PrivateRoute';
import PlaylistSelector from '../pages/PlaylistSelector';
import Layout from '../components/Layout/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/playlists" element={<PlaylistSelector />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;