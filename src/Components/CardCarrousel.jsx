import React from 'react';

const CardCarousel = ({ titulo, descripcion, imagen, urlDocumentacion }) => {
    return (
        <div className="box-shadow: 0 25px 50px -12px rgb(0 0 0 / 2.5)  bg-black hover:bg-black text-justify max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-500 overflow-hidden">
            {imagen && (
                <img className="rounded-t-lg w-full h-48 object-cover" src={imagen} alt="" />
            )}
            <div className="p-5 flex flex-col justify-between h-auto"> {/* Asegura que el contenido se ajuste al tamaño automáticamente */}
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descripcion}</p>
                </div>
                <div className="flex justify-center mt-4"> {/* Centra el botón horizontalmente */}
                    <a href={urlDocumentacion} target="_blank" rel="noopener noreferrer" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Leer más
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
