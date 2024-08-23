import React from "react";
import Navbar from "../navbar";
import CardPortfolio from "./CardPortfolio";
import { coiny } from "../utils/fonts";

export default function Page() {
  const contentData = [
    {
      imageSrc:
        "https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724354536/kttwkg4d8f1p4hibb2a3.png",
      name: "Pagina netflix",
      title:
        "Sitio web para buscar y ver información detallada sobre películas, incluyendo sinopsis, fechas de estreno, géneros y pósters. Implementación de funcionalidades avanzadas de búsqueda, filtrado por género y visualización de trailers, carrusel de imágenes con swiper.",
      web: "https://project-movie-self.vercel.app/",
      githubUrl: "https://github.com/Jhosephcaceres19/project-movie",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724354536/bjbjuqriuxpg2eqhdzgb.png",
      name: "Pagina de criptomoneda",
      title: "Sitio web para consultar información sobre criptomonedas en tiempo real, utilizando una API de criptomonedas. Implementación de gráficos de precios, noticias relacionadas y funcionalidades avanzadas de búsqueda.",
      web: "https://proyecto-react-criptomoneda.vercel.app/",
      githubUrl: "https://github.com/Jhosephcaceres19/proyecto-react-criptomoneda",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724354536/ul3txtguq1dwkg8k2anz.png",
      name: "Pagina web Pyday cochabamba",
      title: "Gestión y mantenimiento del sitio web oficial del evento PyDay 2024, asegurando su correcto funcionamiento y actualización continua.",
      web: "https://dev.pyday2024.pages.dev/",
      githubUrl: "https://github.com/pydaycbba/PyDay2024",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724430883/joseportfolio_u6rkmu.png",
      name: "Portafolio Web",
      title: "Sitio web de mi portafolio con datos de contacto y skill importantes. Tecnologia usada Next.js",
      web: "https://jhosephcaceres.vercel.app/",
      githubUrl: "https://github.com/Jhosephcaceres19/jhosephcaceres",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724354555/oiaidwaxonfa8klsztri.png",
      name: "Pagina de Watpro",
      title: "Sitio web de informacion relevante para una empresa de tratamiento de agua.",
      web: "https://wat-pro-2.vercel.app/",
      githubUrl: "https://github.com/Jhosephcaceres19/WatPro.2",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-sky-900 to-sky-600 text-white">
      <Navbar />
      <div className="mt-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className={`${coiny.className} text-2xl font-bold leading-none sm:text-5xl`}>
            PORTAFOLIO
          </h3>
          <p className="max-w-2xl dark:text-gray-600 text-center">
            Conoce mi portafolio. Estos son algunos de los proyectos en los que
            he trabajado como Desarrollador web.
          </p>
        </div>
        <div className="max-w-screen-2xl px-4 py-16 mx-auto sm:px-4 lg:px-1 lg:py-24">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            {contentData.map((item, index) => (
              <CardPortfolio
                key={index}
                imageSrc={item.imageSrc}
                name={item.name}
                title={item.title}
                web={item.web}
                githubUrl={item.githubUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
