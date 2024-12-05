// src/pages/about.tsx
import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import ContentAbout from "./ContentAbout";
import { coiny } from "../utils/fonts";

export default function About() {
  const contentData = [
    {
      date: "Noviembre 2022 - ahora",
      category: "Python",
      title: "Miembro de Python Cochabamba",
      description:
        "Participación activa en eventos y actividades de la comunidad de Python Cochabamba.",
      author: "Python Cochabamba",
      imageSrc: "",
      authorImage: "https://3dtownplus.com/wp-content/uploads/2022/09/LOTR.jpg",
    },
    {
      date: "Noviembre 2022 - ahora",
      category: "Hacking",
      title: "HackLab BrockHeads",
      description:
        "Participación activa en eventos y actividades de la comunidad.",
      author: "HackLab",
      imageSrc: "",
      authorImage: "https://3dtownplus.com/wp-content/uploads/2022/09/LOTR.jpg",
    },
    {
      date: "Noviembre 2022 - ahora",
      category: "Stem",
      title: "Mujeres TICS",
      description:
        "Participación activa en eventos y actividades de la comunidad",
      author: "Mujeres Tics",
      imageSrc: "/portada.jpeg",
      authorImage: "https://3dtownplus.com/wp-content/uploads/2022/09/LOTR.jpg",
    },
    {
      date: "Enero 2023 - ahora",
      category: "Python",
      title: "Pyladies Lapaz",
      description:
        "Colaboración y apoyo en la comunidad de mujeres en tecnología.",
      author: "Pyladies Lapaz",
      imageSrc: "/portada.jpeg",
      authorImage: "https://3dtownplus.com/wp-content/uploads/2022/09/LOTR.jpg",
    },
    {
      date: "Marzo 2023 - ahora",
      category: "Python",
      title: "Pyladies Cochabamba",
      description:
        "Colaboración y apoyo en la comunidad de mujeres en tecnología.",
      author: "Pyladies Cochabamba",
      imageSrc: "/portada.jpeg",
      authorImage: "https://3dtownplus.com/wp-content/uploads/2022/09/LOTR.jpg",
    },
    {
      date: "Abril 2023 - ahora",
      category: "Stem",
      title: "Nos Gusta la Ciencia",
      description:
        "Organización como subcoordinador y participación en eventos y actividades para promover la ciencia y la tecnología.",
      author: "Nos gusta la ciencia",
      imageSrc: "/portada.jpeg",
      authorImage: "https://3dtownplus.com/wp-content/uploads/2022/09/LOTR.jpg",
    },
    {
      date: "Diciembre 2023",
      category: "Mentor",
      title: "Mentor de Curso de cisco get connected",
      description:
        "Asesoramiento y guía a estudiantes en un curso de Cisco, ayudándoles a desarrollar sus habilidades técnicas y profesionales con la comunidad de mujeres tic Bolivia.",
      author: "Mentor",
      imageSrc: "/portada.jpeg",
      authorImage: "https://3dtownplus.com/wp-content/uploads/2022/09/LOTR.jpg",
    },
    // Agrega aquí otros 4 objetos con la misma estructura
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-sky-900 to-sky-600 text-white">
      <Navbar />
      <div className="flex-1 p-5 mx-auto sm:p-10 md:p-16">
        <div className="flex flex-col items-center justify-center mt-20 max-w-28xl mx-auto overflow-hidden rounded">
          <Image
            src={
              "https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724176942/JHOSEPHs_xsge3h.jpg"
            }
            width={1000}
            height={400}
            alt="Jose Caceres Aramayo"
            className="w-full h-52 sm:h-[10%] object-cover rounded-xl"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 bg-sky-950 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-xl">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/jhoseph.caceresaramayo/"
                target="_blank"
                className={`${coiny.className} inline-block text-2xl font-semibold sm:text-4xl`}
              >
                Jose Caceres Aramayo - apasionado por el Desarrollo web
              </a>
              <p className="text-xs dark:text-gray-600">
                By -
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  - Jhoseph
                </a>
              </p>
            </div>
            <div className="">
              <p className="text-justify">
              Desarrollador Full Stack Junior con formación en ingeniería informática. Tengo experiencia en el desarrollo de aplicaciones web, tanto en frontend como en backend, con un enfoque en la creación de soluciones escalables y eficientes. Poseo habilidades técnicas en varios lenguajes de programación y frameworks modernos, y manejo metodologías ágiles, control de versiones y herramientas de colaboración. Mi enfoque está en el aprendizaje continuo y la adaptabilidad para contribuir de manera efectiva en entornos de desarrollo dinámicos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {contentData.map((content, index) => (
          <ContentAbout
            key={index}
            date={content.date}
            category={content.category}
            title={content.title}
            description={content.description}
            author={content.author}
            imageSrc={content.imageSrc}
            authorImage={content.authorImage}
          />
        ))}
      </div>
    </div>
  );
}
