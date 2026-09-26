import MatchCard from './MatchCard';

function MatchesList({ matches }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {matches.map((match) => (
        <MatchCard
          key={match.id}
          team1={match.team1}
          team2={match.team2}
          logo1={match.logo1}
          logo2={match.logo2}
          score1={match.score1}
          score2={match.score2}
          date={match.date}
          time={match.time}
          status={match.status}
        />
      ))}
    </div>
  );
}

export default MatchesList;