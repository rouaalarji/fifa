import { useRef } from 'react';
import MatchCard from '../Components/MatchCard';

function MatchesCarousel({ matches }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const track = trackRef.current;
    const cardWidth = track.firstChild.offsetWidth + 32; // largeur carte + gap
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="carousel-wrapper">
      <button className="carousel-arrow left" onClick={() => scroll(-1)} aria-label="Précédent">
        ‹
      </button>

      <div className="carousel-track" ref={trackRef}>
        {matches.map((match) => (
          <div className="carousel-slide" key={match.id}>
            <MatchCard
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
          </div>
        ))}
      </div>

      <button className="carousel-arrow right" onClick={() => scroll(1)} aria-label="Suivant">
        ›
      </button>
    </div>
  );
}

export default MatchesCarousel;