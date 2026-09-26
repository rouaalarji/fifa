import PlayerCard from './PlayerCard';

function PlayersList({ players }) {
  return (
    <div className="d-flex flex-wrap gap-4">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          image={player.image}
        />
      ))}
    </div>
  );
}

export default PlayersList;