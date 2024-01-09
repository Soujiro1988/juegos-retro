import React, { useState, useEffect } from 'react';

function TicTacToe() {
  const initialState = Array(9).fill(null);
  const [tablero, setTablero] = useState(initialState);
  const [jugadorActual, setJugadorActual] = useState('X');
  const [ganador, setGanador] = useState(null);

  useEffect(() => {
    checkGanador();
    checkEmpate();
    // Cambiar turno
    setJugadorActual(jugadorActual === 'X' ? 'O' : 'X');
  }, [tablero]);

  const handleClick = index => {
    if (!tablero[index] && !ganador) {
      setTablero(tablero.map((item, itemIndex) => itemIndex === index ? jugadorActual : item));
    }
  };

  const checkGanador = () => {
    const lineasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lineasGanadoras.length; i++) {
      const [a, b, c] = lineasGanadoras[i];
      if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
        setGanador(tablero[a]);
      }
    }
  };

  const checkEmpate = () => {
    if (!tablero.includes(null) && !ganador) {
      setGanador('E'); // E de Empate
    }
  };

  const resetJuego = () => {
    setTablero(initialState);
    setJugadorActual('X');
    setGanador(null);
  };

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '300px' }}>
        {tablero.map((cell, i) => (
          <div key={i} onClick={() => handleClick(i)} style={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black' }}>
            {cell}
          </div>
        ))}
      </div>
      {ganador && <p>Ganador: {ganador === 'E' ? 'Empate' : ganador}</p>}
      <button onClick={resetJuego}>Reiniciar Juego</button>
    </div>
  );
}

export default TicTacToe;
