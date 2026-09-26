import Card from 'react-bootstrap/Card';

function MatchCard({ team1, team2, logo1, logo2, score1, score2, date, time, status }) {
  return (
    <Card className="match-card">
      <div className="match-status-wrapper">
        <span className="match-status" data-status={status}>{status}</span>
      </div>

      <Card.Body className="match-body">
        <div className="match-team">
          <img className="match-logo" src={logo1} alt={team1} />
          <span className="match-team-name">{team1}</span>
        </div>

        <div className="match-score">
          <span>{score1}</span>
          <span className="match-sep">:</span>
          <span>{score2}</span>
        </div>

        <div className="match-team">
          <img className="match-logo" src={logo2} alt={team2} />
          <span className="match-team-name">{team2}</span>
        </div>
      </Card.Body>

      <Card.Footer className="match-footer">
        <span>{date}</span>
        <span className="match-dot"></span>
        <span>{time}</span>
      </Card.Footer>
    </Card>
  );
}

export default MatchCard;