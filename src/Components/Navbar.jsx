import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons'; // Importa el icono específico

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 justify-end">
                
                <li>
                    <Link className="text-white hover:text-gray-300" to="/">Home</Link>
                </li>
                <li>
                    <Link className="text-white hover:text-gray-300" to="/CV">CV</Link>
                </li>
                <li>
                    <Link className="text-white hover:text-gray-300" to="/about-me">About Me</Link>
                </li>
                <li>
                    <Link className="text-white hover:text-gray-300" to="/movie">Movie</Link>
                </li>
                <li>
                <FontAwesomeIcon icon={faGhost} />
                </li>

            </ul>
        </nav>
    );
}

export default Navbar