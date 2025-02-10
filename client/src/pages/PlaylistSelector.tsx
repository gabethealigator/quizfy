import { usePlaylists } from "../hooks";
import { useNavigate, useParams } from 'react-router-dom';
import PlaylistCard from "../components/playlists/PlaylistCard";

function PlaylistSelector() {
  const navigate = useNavigate();
  const { gameType } = useParams();
  const {
    playlists,
    isLoading: playlistsIsLoading,
    error: playlistsError,
  } = usePlaylists();

  const handlePlaylistSelect = (playlistId: string) => {
    navigate(`/versus-local/${gameType}/${playlistId}/game-setup`);
  };

  if (playlistsError) {
    return <div className="text-red-500 p-4">{playlistsError}</div>;
  }

  if (playlistsIsLoading) {
    return (
      <div className="flex center justify-center min-h-[70vh] w-full">
        <div className="loading loading-dots loading-xl">
        </div>
      </div>
    )
  }

  // Ensure playlists is always an array to prevent null issues
  const currentUserPlaylists = playlists ?? [];

  return (
    <div>
      {currentUserPlaylists.length > 0 ? (
        <ul className="list bg-base-100 shadow-md rounded-md">
          {currentUserPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onSelect={handlePlaylistSelect}
            />
          ))}
        </ul>
      ) : (
        <div className="p-4">No playlists found.</div>
      )}
    </div>
  );
}

export default PlaylistSelector;
