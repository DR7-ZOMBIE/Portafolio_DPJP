// MatrixBackground.js

import React, { useEffect } from 'react';
import '../CSS/MatrixBackground.css';

const MatrixBackground = () => {
    useEffect(() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const matrixContainer = document.querySelector('.matrix-container');
        const columnWidth = 10; // Estima el ancho de cada columna (dependiendo del tamaño de fuente y del tipo de letra)
        const screenWidth = window.innerWidth;
        const numberOfColumns = Math.ceil(screenWidth / columnWidth);
    
        for (let i = 0; i < numberOfColumns; i++) {
            let column = document.createElement('div');
            column.classList.add('matrix');
            let animationDuration = Math.random() * 1 + 5; // Entre 5 y 15 segundos
            let animationDelay = Math.random() * -100; // Comienza en momentos aleatorios
            column.style.animationDuration = `${animationDuration}s`;
            column.style.animationDelay = `${animationDelay}s`;
            for (let j = 0; j < 100; j++) { // Puedes ajustar el número '100' si necesitas más o menos caracteres por columna
                column.innerHTML += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
            }
            matrixContainer.appendChild(column);
        }
    }, []);
    

    return <div className="matrix-container"></div>;
};

export default MatrixBackground;
