import React from 'react';
import Slider from 'react-slick';
import CardCarousel from './CardCarrousel'; // Asegúrate de ajustar la ruta de importación según sea necesario
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProyectosGitHub = () => {
    const proyectos = [
        {
            id: 1,
            titulo: "PhishInOut AI",
            descripcion: "Un modelo de inteligencia artificial para la detección de correos electrónicos de phishing. Este proyecto incluye el desarrollo de un sistema basado en redes neuronales que distingue entre correos electrónicos maliciosos y benignos.",
            imagen: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            urlRepositorio: "https://github.com/tu-usuario/phishinout-ai"
        },
        {
            id: 2,
            titulo: "Automated ISM3 Evaluations",
            descripcion: "Este proyecto automatiza la evaluación de controles ISM3 mediante scripts en Python, permitiendo una mayor eficiencia y precisión en la auditoría de sistemas.",
            imagen: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            urlRepositorio: "https://github.com/tu-usuario/automated-ism3-evaluations"
        },
        {
            id: 3,
            titulo: "Cloudflare WAF Configuration Guide",
            descripcion: "Una guía exhaustiva para configurar correctamente el WAF de Cloudflare, destinada a mejorar la seguridad y rendimiento de aplicaciones web mediante la implementación de las mejores prácticas.",
            imagen: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            urlRepositorio: "https://github.com/tu-usuario/cloudflare-waf-configuration-guide"
        },
        
        // Agrega más proyectos aquí
    ];

    // Configuración del carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="p-20">
            <Slider {...settings}>
                {proyectos.map((proyecto) => (
                    <CardCarousel 
                        key={proyecto.id} 
                        titulo={proyecto.titulo} 
                        descripcion={proyecto.descripcion} 
                        imagen={proyecto.imagen} 
                        urlDocumentacion={proyecto.urlRepositorio} 
                    />
                ))}
            </Slider>
        </div>
    );
};

export default ProyectosGitHub;
