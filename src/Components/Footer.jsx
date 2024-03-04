import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 text-center space-y-4">
            <div className="text-lg font-bold">Conéctate conmigo</div>
            <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/dennis-patrick-j-a3362620b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="mailto:dcr7juilland@gmail.com" className="hover:text-gray-400">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
                <a href="https://wa.me/573215085296" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                    <FontAwesomeIcon icon={faWhatsappSquare} size="2x" />
                </a>
            </div>
            <div className="text-sm">
                © 2024 Dennis Patrick Juilland Prada. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
