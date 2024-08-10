import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import '../CSS/MiCV.css';

// Asegúrate de que la ruta al PDF es correcta
import cvPDF from '../assets/pdf/Spanish_Version.pdf';

// Configuración necesaria del worker de PDF.js para react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MiCV = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleClick = () => {
        setPageNumber(prevPageNumber => 
            prevPageNumber < numPages ? prevPageNumber + 1 : 1
        );
    };

    return (
        <div className="pdf-container flex justify-center items-center mt-5 ml-28"> {/* Ajuste de margen superior */}
            <Document
                file={cvPDF}
                onLoadSuccess={onDocumentLoadSuccess}
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden max-w-xl mx-auto border-2 border-gray-300 cursor-pointer" 
                onClick={handleClick} // Maneja el clic para cambiar de página
            >
                <Page 
                    pageNumber={pageNumber} 
                    width={window.innerWidth > 500 ? 600 : window.innerWidth - 20}
                    scale={0.8} // Reduce la escala para disminuir la altura del PDF
                />
            </Document>
            <div className="flex justify-center mt-4"> {/* Centrando el texto */}
                <p>Página {pageNumber} de {numPages}</p>
            </div>
        </div>
    );
};

export default MiCV;
