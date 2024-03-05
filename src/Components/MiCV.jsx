import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import '../CSS/MiCV.css'

// Asegúrate de que la ruta al PDF es correcta
import cvPDF from '../assets/pdf/Spanish_Version.pdf';

// Configuración necesaria del worker de PDF.js para react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MiCV = () => {
    const [numPages, setNumPages] = useState(null);

    // Esta función se llama cada vez que se carga con éxito el documento PDF
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // Renderiza el componente
    return (
        <div className="pdf-container flex justify-center items-center mt-3">
        <Document
            file={cvPDF}
            onLoadSuccess={onDocumentLoadSuccess}
            className="mt-7 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden max-w-xl mx-auto border-2 border-gray-300"
        >
            {numPages ? (
                <Page pageNumber={1} width={window.innerWidth > 768 ? 600 : window.innerWidth - 20}/>
            ) : null}
        </Document>
    </div>
    );
};

export default MiCV;
