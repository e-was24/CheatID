import { Link } from 'react-router-dom';
import './GameCard.css';

export default function GameCard({ game }) {
  return (
    <Link to={`/game/${game.id}`} className="game-card glass-panel">
      <div className="game-img-container">
        <img src={game.image} alt={game.title} className="game-img" />
      </div>
      <div className="game-info">
        <h3>{game.title}</h3>
        <p className="platform text-gradient">{game.platform}</p>
        <div className="cheats-count">
          <span>{game.cheats.length} Cheats Available</span>
        </div>
      </div>
    </Link>
  );
}
