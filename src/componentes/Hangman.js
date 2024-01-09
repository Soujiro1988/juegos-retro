import React, { useState, useEffect } from 'react';

const palabras = ['react', 'javascript', 'ahorcado', 'programacion', 'web'];
const maxIntentos = 6;

function Hangman() {
  const [palabra, setPalabra] = useState('');
  const [mostrar, setMostrar] = useState('');
  const [intentos, setIntentos] = useState(maxIntentos);
  const [letrasUsadas, setLetrasUsadas] = useState([]);

  useEffect(() => {
    // Seleccionar una palabra al azar al inicio
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    setPalabra(palabraAleatoria);
    setMostrar('_'.repeat(palabraAleatoria.length));
  }, []);

  const adivinarLetra = (letra) => {
    if (letrasUsadas.includes(letra) || intentos === 0 || mostrar === palabra) {
      return;
    }

    let acierto = false;
    const mostrarArray = mostrar.split('');

    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letra) {
        mostrarArray[i] = letra;
        acierto = true;
      }
    }

    setMostrar(mostrarArray.join(''));
    setLetrasUsadas(prev => [...prev, letra]);

    if (!acierto) {
      setIntentos(prev => prev - 1);
    }
  };

  return (
    <div>
      <h2>Ahorcado</h2>
      <p>Intentos restantes: {intentos}</p>
      <p>{mostrar}</p>
      <p>Letras usadas: {letrasUsadas.join(', ')}</p>
      <div>
        {'abcdefghijklmnopqrstuvwxyz'.split('').map(letra => (
          <button key={letra} onClick={() => adivinarLetra(letra)} disabled={letrasUsadas.includes(letra)}>
            {letra}
          </button>
        ))}
      </div>
      {intentos === 0 && <p>¡Juego terminado! La palabra era: {palabra}</p>}
      {mostrar === palabra && <p>¡Felicidades! Adivinaste la palabra.</p>}
    </div>
  );
}

export default Hangman;
