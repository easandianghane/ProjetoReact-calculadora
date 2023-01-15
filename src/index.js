import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculador from './Components/Calculador';
import "../src/Calculadora.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className = "container">
        <Calculador/>
    </div>
    
);
