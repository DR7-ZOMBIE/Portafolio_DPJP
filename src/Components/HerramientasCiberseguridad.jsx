import React from 'react';
import CardCarousel from './CardCarrousel';// Asegúrate de ajustar la ruta de importación según sea necesario

const HerramientasCiberseguridad = () => {
    const herramientas = [
        {
            id: 1,
            titulo: "Wireshark",
            descripcion: "Wireshark es un analizador de protocolos de red que permite capturar y examinar detalladamente el tráfico en una red en tiempo real. Es ampliamente utilizado para la resolución de problemas de red, análisis y desarrollo de software, y educación en ciberseguridad.",
            imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9dj9ZPnFfXnrFUp2cFfKfQHaEK%26pid%3DApi&f=1&ipt=a4ccbb9e87d84473a32dece005b5f106692da14399147b075b6fc9bdfe8e13fc&ipo=images",
            urlDocumentacion:"https://www.wireshark.org/docs/"
        },
        {
            id: 2,
            titulo: "Metasploitable",
            descripcion: " Metasploit es un marco (framework) de prueba de penetración muy utilizado que facilita la búsqueda de vulnerabilidades en sistemas y redes. Permite a los profesionales de la seguridad desarrollar y ejecutar exploits contra objetivos remotos para probar su seguridad.",
            imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.todavianose.com%2Fwp-content%2Fuploads%2F2016%2F11%2Fmetasploit-and-metasploitable.1280x600.jpg&f=1&nofb=1&ipt=9bb9d39fee753f43672b9e7d30bf07738f107eb8052c43893f87d8bfa2ee5f01&ipo=images",
            urlDocumentacion:"https://docs.rapid7.com/metasploit/metasploitable-2/"
        },
        {
            id: 3,
            titulo: "Nessus",
            descripcion: "Nessus es una de las herramientas de escaneo de vulnerabilidades más conocidas y utilizadas. Proporciona un análisis rápido y preciso de las vulnerabilidades de seguridad en sistemas y redes para ayudar a identificar y corregir fallos antes de que puedan ser explotados.",
            imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-LFIkoYYo32Q%2FWVSqL60OuxI%2FAAAAAAAAKAM%2F8zHaJNm77NAPck0yTrgJCvFaTbH_2uc_QCLcBGAs%2Fs1600%2FNessus-Vulnerability-Scanner.jpg&f=1&nofb=1&ipt=aed4142cbd2bc5aaa1b4d6339387da0159d9951db9bf4138aa1ce6ff856a82ec&ipo=images",
            urlDocumentacion:"https://docs.tenable.com/Nessus.htm"
        },
        {
            id: 4,
            titulo: "Burp Suite",
            descripcion: "Burp Suite es una herramienta integral para la realización de pruebas de seguridad de aplicaciones web. Ofrece un conjunto de herramientas para realizar escaneos de vulnerabilidades, pruebas de penetración y ataques simulados en aplicaciones web para identificar posibles fallos de seguridad.",
            imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsecurityzines.com%2Fassets%2Fimg%2Fflyers%2Fdownloads%2Fburp.png&f=1&nofb=1&ipt=977c05d55a3683be43718c298e2cecfb63a00f56f6055a03fb4a61129792f250&ipo=images",
            urlDocumentacion:"https://portswigger.net/burp/documentation"
        },
        // Agrega más herramientas aquí
    ];

    return (
        <div className="flex flex-wrap justify-center gap-10 p-20">
            {herramientas.map((herramienta) => (
                <CardCarousel key={herramienta.id} titulo={herramienta.titulo} descripcion={herramienta.descripcion} imagen={herramienta.imagen} urlDocumentacion={herramienta.urlDocumentacion} />
            ))}
        </div>
    );
};

export default HerramientasCiberseguridad;
