import { useNavigate } from 'react-router-dom';
import { GameType } from '../types/GameTypes';
import { FaMusic, FaUserAlt } from 'react-icons/fa';

function GuessOptions() {
  const navigate = useNavigate();

  const handleOptionSelect = (gameType: GameType) => {
    navigate(`/versus-local/${gameType}/playlists`);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
      <div className="text-center mb-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-base-content">Choose Game Mode</h1>
        <p className="text-base-content/70 mt-2">Select how you want to challenge your music knowledge</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
          onClick={() => handleOptionSelect(GameType.GUESS_SONG)}
        >
          <div className="card-body">
            <div className="flex items-center gap-4">
              <div className="btn btn-circle btn-primary btn-lg">
                <FaMusic className="text-2xl" />
              </div>
              <div>
                <h2 className="card-title text-xl sm:text-2xl text-base-content">Guess the Song</h2>
                <p className="text-base-content/70 mt-1">
                  Listen to snippets and guess the correct song title
                </p>
              </div>
            </div>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary w-full">
                Select Mode
              </button>
            </div>
          </div>
        </div>

        <div 
          className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
          onClick={() => handleOptionSelect(GameType.GUESS_ARTIST)}
        >
          <div className="card-body">
            <div className="flex items-center gap-4">
              <div className="btn btn-circle btn-primary btn-lg">
                <FaUserAlt className="text-2xl" />
              </div>
              <div>
                <h2 className="card-title text-xl sm:text-2xl text-base-content">Guess the Artist</h2>
                <p className="text-base-content/70 mt-1">
                  Listen to songs and identify the performing artist
                </p>
              </div>
            </div>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary w-full">
                Select Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuessOptions;
