import TeamCard from '../TeamCard';

function TeamsList({ teams }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          name={team.name}
          logo={team.logo}
          country={team.country}
          stadium={team.stadium}
          founded={team.founded}
          coach={team.coach}
        />
      ))}
    </div>
  );
}

export default TeamsList;