import React, { useState, useEffect, useCallback } from 'react';

const inicialSnake = [{ x: 2, y: 2 }];
const inicialComida = { x: 5, y: 5 };
const tamañoCuadro = 20;
const tamañoTablero = 10;

function Snake() {
  const [snake, setSnake] = useState(inicialSnake);
  const [comida, setComida] = useState(inicialComida);
  const [direccion, setDireccion] = useState('DERECHA');
  const [velocidad, setVelocidad] = useState(300);

  const moverSnake = useCallback(() => {
    setSnake(snake => {
      let cabeza = { ...snake[0] };
      switch (direccion) {
        case 'DERECHA': cabeza.x++; break;
        case 'IZQUIERDA': cabeza.x--; break;
        case 'ARRIBA': cabeza.y--; break;
        case 'ABAJO': cabeza.y++; break;
        default: break;
      }

      let nuevaSnake = [cabeza, ...snake];
      if (cabeza.x === comida.x && cabeza.y === comida.y) {
        // Generar nueva comida
        setComida({
          x: Math.floor(Math.random() * tamañoTablero),
          y: Math.floor(Math.random() * tamañoTablero),
        });
      } else {
        nuevaSnake.pop();
      }

      return nuevaSnake;
    });
  }, [direccion, comida.x, comida.y]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.keyCode) {
        case 37: setDireccion('IZQUIERDA'); break; // Flecha izquierda
        case 38: setDireccion('ARRIBA'); break;    // Flecha arriba
        case 39: setDireccion('DERECHA'); break;   // Flecha derecha
        case 40: setDireccion('ABAJO'); break;     // Flecha abajo
        default: break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const movimiento = setInterval(moverSnake, velocidad);

    return () => {
      clearInterval(movimiento);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [moverSnake, velocidad]);

  return (
    <div>
      <h2>Snake</h2>
      <div style={{ 
        width: `${tamañoTablero * tamañoCuadro}px`, 
        height: `${tamañoTablero * tamañoCuadro}px`, 
        border: '1px solid black' 
      }}>
        {snake.map((segmento, i) => (
          <div key={i} style={{ 
            position: 'absolute', 
            width: `${tamañoCuadro}px`, 
            height: `${tamañoCuadro}px`, 
            backgroundColor: i === 0 ? 'green' : 'black', 
            left: `${segmento.x * tamañoCuadro}px`, 
            top: `${segmento.y * tamañoCuadro}px` 
          }} />
        ))}
        <div style={{ 
          position: 'absolute', 
          width: `${tamañoCuadro}px`, 
          height: `${tamañoCuadro}px`, 
          backgroundColor: 'red', 
          left: `${comida.x * tamañoCuadro}px`, 
          top: `${comida.y * tamañoCuadro}px` 
        }} />
      </div>
    </div>
  );
}

export default Snake;
