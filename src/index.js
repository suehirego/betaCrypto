import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BetaContext from './context/BetaContext';
import 'react-alice-carousel/lib/alice-carousel.css';


ReactDOM.render(
    <React.StrictMode>
      <BetaContext>
        <App />
      </BetaContext>
   
    </React.StrictMode>,
  document.getElementById('root')
);

