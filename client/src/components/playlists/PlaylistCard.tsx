import { FaPlay } from "react-icons/fa6";
import { SpotifyPlaylist } from "../../types/SpotifyTypes";

interface PlaylistCardProps {
  playlist: SpotifyPlaylist;
  onSelect: (playlistId: string) => void;
}

const PlaylistCard = ({ playlist, onSelect }: PlaylistCardProps) => {
  return (
    <li className="group list-row hover:bg-base-200 transition-colors">
      <div className="shrink-0">
        <img 
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-md shadow-md" 
          src={playlist?.images?.[0]?.url}
          alt={playlist.name}
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-base sm:text-lg mb-1 truncate">
          {playlist.name}
        </div>
        <div className="text-xs sm:text-sm font-medium text-base-content/60">
          {playlist.owner?.display_name || "Unknown"}
        </div>
      </div>
      <div className="shrink-0">
        <button
          onClick={() => onSelect(playlist.id)}
          className="btn btn-circle btn-primary btn-sm sm:btn-md sm:opacity-0 sm:group-hover:opacity-100 transition-all"
          title="Select playlist"
        >
          <FaPlay/>
        </button>
      </div>
    </li>
  );
};

export default PlaylistCard;
