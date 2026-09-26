import PlayersList from './Components/PlayersList';
import MatchesList from './Components/MatchesList';
import Footer from './Components/Footer';
import AppNavbar from './Components/AppNavbar';
import TeamsList from './Components/TeamsList';
import haland from './assets/haland.jpg';
import herry from './assets/herry.jpg';
import lamine from './assets/lamine.jpg';
import mohamed from './assets/mohamed.jpg';
import ronaldo from './assets/ronaldo.jpg';
import real from './assets/real.jpg';
import fcb from './assets/fcb.png';
import ma from './assets/ma.png';
import li from './assets/li.png';
import fb from './assets/fb.png';
import psg from './assets/ps.png';
import juven from './assets/juven.jpg';
import mila from './assets/mila.png';
import '../src/App.css';
import MatchesCarousel from './Components/MatchesCarousel';
const players = [

  { id: 1, name: "Lamine Yamal", team: "FC Barcelona", nationality: "Espagne", jerseyNumber: 10, age: 19, image: lamine },
  { id: 2, name: "Harry Kane", position: "Avant-centre", team: "Bayern Munich", nationality: "Angleterre", jerseyNumber: 9, age: 33, image: herry },
  { id: 3, name: "Erling Haaland", position: "Avant-centre", team: "Manchester City", nationality: "Norvège", jerseyNumber: 9, age: 26, image: haland },

  { id: 4, name: "Mohamed Salah", team: "Liverpool", nationality: "Égypte", jerseyNumber: 11, age: 34, image: mohamed },
  { id: 5, name: "Cristiano Ronaldo", team: "Al Nassr", nationality: "Portugal", jerseyNumber: 7, age: 41, image: ronaldo },
];
const matches = [
  { id: 1, team1: "FC Barcelone", team2: "Real Madrid", logo1: fcb, logo2: real, score1: 2, score2: 1, date: "12/10/2026", time: "21:00", status: "Terminé" },
  { id: 2, team1: "Manchester City", team2: "Liverpool", logo1: ma, logo2: li, score1: 1, score2: 1, date: "18/10/2026", time: "17:30", status: "En cours" },
  { id: 3, team1: "Bayern Munich", team2: "PSG", logo1: fb, logo2: psg, score1: "-", score2: "-", date: "25/10/2026", time: "20:45", status: "À venir" },
  { id: 4, team1: "Juventus", team2: "Inter Milan", logo1: juven, logo2: mila, score1: "-", score2: "-", date: "01/11/2026", time: "19:00", status: "À venir" },
];
const teams = [
  { id: 1, name: "FC Barcelone", logo: fcb, country: "Espagne", stadium: "Camp Nou", founded: 1899, coach: "Hansi Flick" },
  { id: 2, name: "Real Madrid", logo: real, country: "Espagne", stadium: "Santiago Bernabéu", founded: 1902, coach: "Xabi Alonso" },
  { id: 3, name: "Manchester City", logo: ma, country: "Angleterre", stadium: "Etihad Stadium", founded: 1880, coach: "Pep Guardiola" },
  { id: 4, name: "Bayern Munich", logo: fb, country: "Allemagne", stadium: "Allianz Arena", founded: 1900, coach: "Vincent Kompany" },
];
function App() {
  return (
    <>
      <AppNavbar />

      <section id="home" className="text-center py-5">
        <h1 className="app-title">FIFA App</h1>
        <p className="lead">Découvre les joueurs et les matchs du moment.</p>
      </section>

      <section id="players" className="p-4">
        <h2 className="app-title">Joueurs</h2>
        <PlayersList players={players} />
      </section>

      <section id="matches" className="p-4">
        <h2 className="app-title">Matchs</h2>
        <MatchesList matches={matches} />
      </section>
      <section id="matches" className="p-4">
        <h2 className="app-title">Matchs</h2>
        <MatchesCarousel matches={matches} />
      </section>
      <section id="teams" className="p-4">
        <h2 className="app-title">Équipes</h2>
        <TeamsList teams={teams} />
      </section>
      <Footer />
    </>
  );
}

export default App;