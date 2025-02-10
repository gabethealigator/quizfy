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
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto sm:px-6">
      {/*Difficulty selector section*/}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body p-4 sm:p-6">
          <h2 className="card-title text-xl sm:text-2xl mb-4">
            Difficulty
          </h2>
          <div className="bg-base-100 w-full flex flex-col sm:flex-row gap-5 p-4 sm:p-5 rounded-lg">
            <div className="join join-vertical sm:py-2">
              <input
                className="join-item btn btn-soft btn-sm sm:btn-md"
                type="radio"
                name="options"
                aria-label="Easy"
                checked={difficulty === 'Easy'}
                onChange={() => setDifficulty('Easy')}
              />
              <input className="join-item btn btn-soft btn-sm sm:btn-md"
                type="radio"
                name="options"
                aria-label="Normal"
                checked={difficulty === 'Normal'}
                onChange={() => setDifficulty('Normal')}
              />
              <input className="join-item btn btn-soft btn-sm sm:btn-md"
                type="radio"
                name="options"
                aria-label="Medium"
                checked={difficulty === 'Medium'}
                onChange={() => setDifficulty('Medium')}
              />
              <input
                className="join-item btn btn-soft btn-sm sm:btn-md"
                type="radio"
                name="options"
                aria-label="Hard"
                checked={difficulty === 'Hard'}
                onChange={() => setDifficulty('Hard')}
              />
              <input
                className="join-item btn btn-soft btn-sm sm:btn-md"
                type="radio"
                name="options"
                aria-label="Insane"
                checked={difficulty === 'Insane'}
                onChange={() => setDifficulty('Insane')}
              />
            </div>
            <div className="flex flex-col ml-1 gap-3 sm:gap-4 justify-center text-sm sm:text-base text-base-content/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>1min music snippet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-info rounded-full"></div>
                <span>30s music snippet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span>15s music snippet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-error rounded-full"></div>
                <span>5s music snippet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>1s music snippet</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/*Players section*/}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
            <h2 className="card-title text-xl sm:text-2xl">Players</h2>
            <div className="badge badge-primary badge-lg">{players.length} Players</div>
          </div>

          <div className="flex flex-col gap-3">
            {players.map(player => (
              <div key={player.id}
                className="group flex items-center gap-2 bg-base-100 p-3 rounded-lg hover:bg-base-300/50 transition-colors">
                <div className="btn btn-circle btn-ghost bg-primary/10 pointer-events-none">
                  <FaUser />
                </div>
                <input
                  type="text"
                  value={player.name}
                  onChange={(e) => updatePlayerName(player.id, e.target.value)}
                  placeholder={`Player ${player.id}`}
                  className="input input-ghost input-sm sm:input-md w-full focus:bg-transparent"
                />
                {players.length > 1 && (
                  <button
                    onClick={() => removePlayer(player.id)}
                    className="btn btn-ghost btn-circle btn-sm sm:btn-md opacity-99 sm:opacity1 sm:group-hover:opacity-100 transition-all hover:bg-red-500/20 text-red-500"
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
      <div className='btn btn-block bg-base-300 hover:bg-primary text-primary-content mt-10'>
        Play
      </div>
    </div>
  );
}

export default GameSetup;
