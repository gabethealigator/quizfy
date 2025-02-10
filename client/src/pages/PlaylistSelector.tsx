import { FaPlay } from "react-icons/fa6";
import { usePlaylists } from "../hooks";

function PlaylistSelector() {
  const {
    playlists,
    isLoading: playlistsIsLoading,
    error: playlistsError,
  } = usePlaylists();

  if (playlistsError) {
    return <div className="text-red-500 p-4">{playlistsError}</div>;
  }

  if (playlistsIsLoading) {
    return <div className="p-4">Loading playlists...</div>;
  }

  // Ensure playlists is always an array to prevent null issues
  const currentUserPlaylists = playlists ?? [];

  return (
    <div>
      {currentUserPlaylists.length > 0 ? (
        <ul className="list bg-base-100 shadow-md rounded-md">
          {currentUserPlaylists.map((playlist: { id: string; name: string }) => (
            <li key={playlist.id} className="list-row">
              <div>
                <img className="h-20 w-20 rounded-sm" src={playlist?.images?.[0]?.url} />
              </div>
              <div>
                <div className="text-base mb-1">
                  {playlist.name}
                </div>
                <div className="text-xs font-semibold opacity-80">
                  {playlist.owner.display_name}
                </div>
              </div>
              <div className="tooltip" data-tip="Play">
                <div className="btn btn-ghost rounded-full bg-primary text-primary-content w-11 h-11" role="button">
                  <FaPlay />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4">No playlists found.</div>
      )}
    </div>
  );
}

export default PlaylistSelector;
