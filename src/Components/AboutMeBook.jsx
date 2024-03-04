import React, { useState } from 'react';
import '../CSS/AboutMeBook.css'; // Asegúrate de tener este archivo CSS en tu proyecto

const AboutMeBook = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={`book-container ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
            <div className="book-cover">
                <span></span>
            </div>
            {isOpen && (
                <div className="book-content text-justify">
                    <h2>Dennis P. Juilland</h2>
                    <p>🚀 <strong>Quién Soy</strong></p>
                    <p>Soy Dennis, un apasionado Ingeniero de Sistemas y Computación con un Máster en Ciberseguridad de IEBS y una sólida base de conocimientos respaldada por varias certificaciones clave en el campo, incluyendo ISO 27001 Auditor Interno y diversas certificaciones de Globant y Mercado Libre en desarrollo tecnológico. Mi camino en la tecnología está marcado por una constante búsqueda de innovación y excelencia, lo que me llevó a completar un diplomado en Hacking Ético en EIA y participar en un intensivo Bootcamp de Ciberseguridad y Hacking Ético en UTEL.</p>
                    <p>💡 <strong>Objetivos Profesionales</strong></p>
                    <p>Mi visión se centra en profundizar en el espectro de la ciberseguridad, abarcando roles de Blue Team, Red Team y Purple Team. Estoy en camino a obtener un Máster en Tecnologías e Innovación y varias certificaciones avanzadas que me permitirán contribuir de manera significativa a cualquier equipo de seguridad informática, aportando soluciones creativas y efectivas a desafíos complejos.</p>
                    <p>🔍 <strong>Pasatiempos e Intereses</strong></p>
                    <p>Fuera del ámbito profesional, me encanta explorar nuevos lenguajes de programación, sumergirme en la investigación de ciberseguridad y aplicar mis conocimientos en entornos prácticos, especialmente en servidores locales con Kali Linux. El deporte, la música y el desarrollo de habilidades tanto en front-end como en back-end complementan mi vida, dándome un balance y una perspectiva amplia sobre el mundo tecnológico y más allá.</p>
                    <p>🎯 <strong>Fortalezas Principales</strong></p>
                    <ul>
                        <li>Profundo conocimiento en Seguridad Informática y Ética de Hacking.</li>
                        <li>Habilidad en Diseño de Interfaz de Usuario y desarrollo front-end.</li>
                        <li>Experiencia en administración de servidores y desarrollo con Node JS, JavaScript y React.</li>
                        <li>Competencia en el uso de herramientas de Kali, evaluación de vulnerabilidades, análisis forense y gestión de análisis de riesgos.</li>
                    </ul>
                    <p>🛠 <strong>Experiencia Laboral</strong></p>
                    <p>Mi experiencia incluye roles significativos en Con Altitud S.A.S como Ingeniero de Sistemas en el área de procesos de calidad y en Touchstone, donde me enfoqué en la administración de servidores y la optimización de sistemas. Estas experiencias me han dotado de una comprensión profunda de las necesidades tecnológicas y de seguridad de las organizaciones modernas.</p>
                    <p>📞 <strong>Contacto</strong></p>
                    <p>Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si estás interesado en discutir cómo puedo aportar a tu equipo o proyecto, no dudes en contactarme:</p>
                    <ul>
                        <li>Teléfono: (+57) 3215085296</li>
                        <li>Correo: dcr7juilland@gmail.com</li>
                        <li>Ubicación: Calle 6a # 22-75 Ciudadela Marymount, casa 104</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AboutMeBook;
