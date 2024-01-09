import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa estilos globales
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si deseas medir el rendimiento de tu aplicación, puedes utilizar reportWebVitals.
// Para más información: https://bit.ly/CRA-vitals
reportWebVitals();
