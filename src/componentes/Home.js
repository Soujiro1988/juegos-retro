import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a los Juegos Retro</h1>
      <h2>Elige un juego para empezar:</h2>
      <nav>
        <ul>
          <li>
            <Link to="/snake">Jugar Snake</Link>
          </li>
          <li>
            <Link to="/hangman">Jugar Ahorcado</Link>
          </li>
          <li>
            <Link to="/tictactoe">Jugar Tres en Raya</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
