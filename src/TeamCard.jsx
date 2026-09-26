import Card from 'react-bootstrap/Card';

function TeamCard({ name, logo, country, stadium, founded, coach }) {
  return (
    <Card className="team-card">
      <div className="team-logo-wrapper">
        <img className="team-logo" src={logo} alt={name} />
      </div>

      <Card.Body className="team-body">
        <Card.Title className="team-name">{name}</Card.Title>
        <p className="team-country">{country}</p>

        <div className="team-divider"></div>

        <div className="team-infos">
          <div className="team-info">
            <span>Stade</span>
            <strong>{stadium}</strong>
          </div>
          <div className="team-info">
            <span>Fondé en</span>
            <strong>{founded}</strong>
          </div>
          <div className="team-info team-info-full">
            <span>Entraîneur</span>
            <strong>{coach}</strong>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TeamCard;