import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header glass-panel">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="text-gradient">CheatDex</span>
        </Link>
        <nav>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
        </nav>
      </div>
    </header>
  );
}
