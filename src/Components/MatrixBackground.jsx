// MatrixBackground.js

import React, { useEffect } from 'react';
import '../CSS/MatrixBackground.css';

const MatrixBackground = () => {
    useEffect(() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const matrixContainer = document.querySelector('.matrix-container');
        for (let i = 0; i < 150; i++) { // Ajusta según la anchura de tu pantalla
            let column = document.createElement('div');
            column.classList.add('matrix');
            let animationDuration = Math.random() * 10 + 5; // Entre 5 y 15 segundos
            let animationDelay = Math.random() * -20; // Comienza en momentos aleatorios
            column.style.animationDuration = `${animationDuration}s`;
            column.style.animationDelay = `${animationDelay}s`;
            for (let j = 0; j < 100; j++) {
                column.innerHTML += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
            }
            matrixContainer.appendChild(column);
        }
    }, []);

    return <div className="matrix-container"></div>;
};

export default MatrixBackground;
