import { useParams, Link } from 'react-router-dom';
import db from '../data/db.json';
import './GameDetail.css';

export default function GameDetail() {
  const { id } = useParams();
  const game = db.games.find(g => g.id === id);

  if (!game) {
    return (
      <div className="container not-found">
        <h2>Game Not Found</h2>
        <Link to="/" className="back-link text-gradient">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="game-detail container">
      <Link to="/" className="back-link">← Back</Link>
      
      <div className="detail-header glass-panel">
        <div className="detail-img-container">
          <img src={game.image} alt={game.title} />
        </div>
        <div className="detail-info">
          <h1 className="text-gradient">{game.title}</h1>
          <p className="developer">Developer: {game.developer}</p>
          <p className="platform">Platform: {game.platform}</p>
          <p className="release">Release: {game.releaseYear}</p>
          <p className="description">{game.description}</p>
        </div>
      </div>

      <div className="cheats-section glass-panel">
        <h2>Cheat Codes</h2>
        <div className="table-responsive">
          <table className="cheats-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              {game.cheats.map((cheat, idx) => (
                <tr key={idx}>
                  <td className="code-cell"><span className="code-badge">{cheat.code}</span></td>
                  <td>{cheat.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
