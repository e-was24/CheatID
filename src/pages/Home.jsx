import { useState } from 'react';
import db from '../data/db.json';
import GameCard from '../components/GameCard';
import './Home.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = db.games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home container">
      <div className="hero">
        <h1 className="text-gradient">Discover Game Cheats</h1>
        <p className="hero-subtext text-muted">The ultimate database for your favorite games.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input glass-panel"
          />
        </div>
      </div>

      <div className="game-grid">
        {filteredGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
        {filteredGames.length === 0 && (
          <p className="no-results">No games found.</p>
        )}
      </div>
    </div>
  );
}
