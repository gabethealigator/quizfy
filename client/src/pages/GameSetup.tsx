// import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FaUserPlus, FaTrash, FaUser } from 'react-icons/fa';

interface Player {
  id: number;
  name: string;
}

type Difficulty = 'Easy' | 'Normal' | 'Medium' | 'Hard' | 'Insane';

function GameSetup() {
  // const { gameType, playlistId } = useParams();
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: 'Player 1' },
  ]);
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');

  const addPlayer = () => {
    const newId = players.length + 1;
    setPlayers([...players, { id: newId, name: `Player ${newId}` }]);
  };

  const removePlayer = (id: number) => {
    if (players.length <= 1) return;
    const updatedPlayers = players
      .filter(player => player.id !== id)
      .map((player, index) => ({
        ...player,
        id: index + 1,
        name: player.name === `Player ${player.id}` ? `Player ${index + 1}` : player.name
      }));
    setPlayers(updatedPlayers);
  };

  const updatePlayerName = (id: number, newName: string) => {
    setPlayers(players.map(player =>
      player.id === id ? { ...player, name: newName || `Player ${id}` } : player
    ));
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
      {/* Difficulty selector section */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-xl sm:text-2xl text-base-content">
            Difficulty
          </h2>
          <div className="bg-base-100 rounded-box p-4 sm:p-6 flex flex-col gap-6">
            <div className="join join-vertical">
              {(['Easy', 'Normal', 'Medium', 'Hard', 'Insane'] as Difficulty[]).map((level) => (
                <input
                  key={level}
                  className="join-item btn btn-sm sm:btn-md"
                  type="radio"
                  name="difficulty"
                  aria-label={level}
                  checked={difficulty === level}
                  onChange={() => setDifficulty(level)}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4 mx-1 justify-center text-sm sm:text-base text-base-content/70 ">
              <DifficultyIndicator color="success" text="1min music snippet" />
              <DifficultyIndicator color="info" text="30s music snippet" />
              <DifficultyIndicator color="warning" text="15s music snippet" />
              <DifficultyIndicator color="error" text="5s music snippet" />
              <DifficultyIndicator color="purple-800" text="1s music snippet" />
            </div>
          </div>
        </div>
      </div>

      {/* Players section */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <h2 className="card-title text-xl sm:text-2xl text-base-content">Players</h2>
            <div className="badge badge-primary">{players.length} Players</div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            {players.map(player => (
              <div
                key={player.id}
                className="group flex items-center gap-3 bg-base-100 p-4 rounded-box hover:bg-base-300/50 transition-all"
              >
                <div className="btn btn-circle btn-ghost btn-sm bg-primary/10">
                  <FaUser className="text-primary" />
                </div>
                <input
                  type="text"
                  value={player.name}
                  onChange={(e) => updatePlayerName(player.id, e.target.value)}
                  placeholder={`Player ${player.id}`}
                  className="input input-ghost w-full focus:bg-transparent text-base-content"
                />
                {players.length > 1 && (
                  <button
                    onClick={() => removePlayer(player.id)}
                    className="btn btn-ghost btn-circle btn-sm opacity-0 group-hover:opacity-100 hover:bg-error/20 text-error transition-all"
                    title="Remove player"
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
            ))}

            <button
              onClick={addPlayer}
              className="btn btn-primary btn-sm sm:btn-md gap-2 mt-2 w-full sm:w-auto sm:self-end"
            >
              <FaUserPlus />
              Add Player
            </button>
          </div>
        </div>
      </div>

      <button className="btn btn-primary btn-lg w-full mt-6">
        Start Game
      </button>
    </div>
  );
}

const DifficultyIndicator = ({ color, text }: { color: string; text: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-2 h-2 rounded-full bg-${color}`} />
    <span>{text}</span>
  </div>
);

export default GameSetup;
