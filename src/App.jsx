import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import './App.css'; // Vite generates this, better to delete it or leave empty if I overwrote

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
    </>
  );
}

export default App;
