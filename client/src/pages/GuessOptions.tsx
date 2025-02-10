import { useNavigate } from 'react-router-dom';
import { GameType } from '../types/GameTypes';

function GuessOptions() {
  const navigate = useNavigate();

  const handleOptionSelect = (gameType: GameType) => {
    navigate(`/versus-local/${gameType}/playlists`);
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        className="btn btn-primary"
        onClick={() => handleOptionSelect(GameType.GUESS_SONG)}
      >
        Guess the Song
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleOptionSelect(GameType.GUESS_ARTIST)}
      >
        Guess the Artist
      </button>
    </div>
  );
}

export default GuessOptions;
