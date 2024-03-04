import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
// Importa los componentes que se renderizarán en cada ruta
import Home from './Components/Routes/Home';
import Detail from './Components/Routes/Detail';
import Movie from './Components/Routes/Movie';
import CV from './Components/Routes/CV';
import Footer from './Components/Footer';
import MatrixBackground from './Components/MatrixBackground';
import './index.css'; // Asegúrate de que esta línea esté presente

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <MatrixBackground></MatrixBackground>
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Navigate replace to="/" />} />
                        <Route path="/about-me" element={<Detail />} />
                        <Route path="/movie" element={<Movie />} />
                        <Route path="/CV" element={<CV />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
