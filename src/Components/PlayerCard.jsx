import Card from 'react-bootstrap/Card';

function PlayerCard({ name, position, team, nationality, jerseyNumber, age, image }) {
  return (
    <Card className="fut-card">
      <div className="fut-top">
        <span className="fut-number">{jerseyNumber}</span>
        <span className="fut-position">{position}</span>
      </div>

      <Card.Img className="fut-image" src={image} alt={name} />

      <Card.Body className="fut-body">
        <Card.Title className="fut-name">{name}</Card.Title>
        <div className="fut-divider"></div>
        <div className="fut-stats">
          <div className="fut-stat fut-stat-full">
            <span>Équipe</span>
            <strong>{team}</strong>
          </div>
          <div className="fut-stat">
            <span>Nationalité</span>
            <strong>{nationality}</strong>
          </div>
          <div className="fut-stat">
            <span>Âge</span>
            <strong>{age} ans</strong>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;