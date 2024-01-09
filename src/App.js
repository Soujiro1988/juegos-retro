import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import Snake from './componentes/Snake';
import Hangman from './componentes/Hangman';
import TicTacToe from './componentes/TicTacToe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
