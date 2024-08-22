// src/pages/about.tsx
import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import ContentAbout from "./ContentAbout";
import { describe } from "node:test";
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
      imageSrc: "/portada.jpeg",
      authorImage: "/portada.jpeg",
    },
    {
      date: "Noviembre 2022 - ahora",
      category: "Hacking",
      title: "HackLab BrockHeads",
      description:
        "Participación activa en eventos y actividades de la comunidad.",
      author: "HackLab",
      imageSrc: "",
      authorImage: "/portada.jpeg",
    },
    {
      date: "Noviembre 2022 - ahora",
      category: "Stem",
      title: "Mujeres TICS",
      description:
        "Participación activa en eventos y actividades de la comunidad",
      author: "Mujeres Tics",
      imageSrc: "/portada.jpeg",
      authorImage: "/portada.jpeg",
    },
    {
      date: "Enero 2023 - ahora",
      category: "Python",
      title: "Pyladies Lapaz",
      description:
        "Colaboración y apoyo en la comunidad de mujeres en tecnología.",
      author: "Pyladies Lapaz",
      imageSrc: "/portada.jpeg",
      authorImage: "/portada.jpeg",
    },
    {
      date: "Marzo 2023 - ahora",
      category: "Python",
      title: "Pyladies Cochabamba",
      description:
        "Colaboración y apoyo en la comunidad de mujeres en tecnología.",
      author: "Pyladies Cochabamba",
      imageSrc: "/portada.jpeg",
      authorImage: "/portada.jpeg",
    },
    {
      date: "Abril 2023 - ahora",
      category: "Stem",
      title: "Nos Gusta la Ciencia",
      description:
        "Organización como subcoordinador y participación en eventos y actividades para promover la ciencia y la tecnología.",
      author: "Nos gusta la ciencia",
      imageSrc: "/portada.jpeg",
      authorImage: "/portada.jpeg",
    },
    {
      date: "Diciembre 2023",
      category: "Mentor",
      title: "Mentor de Curso de cisco get connected",
      description:
        "Asesoramiento y guía a estudiantes en un curso de Cisco, ayudándoles a desarrollar sus habilidades técnicas y profesionales con la comunidad de mujeres tic Bolivia.",
      author: "Mentor",
      imageSrc: "/portada.jpeg",
      authorImage: "/portada.jpeg",
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
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 bg-sky-950 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-xl dark:bg-gray-50 dark:text-gray-800">
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
            <div className="dark:text-gray-800">
              <p className="text-justify">
                Soy un estudiante de Ingeniería Informática apasionado por el
                desarrollo web y las tecnologías emergentes. A lo largo de mi
                formación académica, he adquirido un sólido conocimiento en
                lenguajes de programación como TypeScript, JavaScript, Python,
                Go y Java, y he trabajado en diversos proyectos que abarcan
                desde la creación de sitios web dinámicos hasta la
                implementación de sistemas backend eficientes. Mi enfoque se
                centra en construir soluciones web intuitivas y escalables,
                utilizando herramientas y frameworks modernos como React,
                Node.js, y Express. Además, me interesa profundamente la
                ciberseguridad y el software libre, lo que me motiva a estar en
                constante aprendizaje para mantenerme al día con las mejores
                prácticas y tendencias del sector. Mi experiencia en proyectos
                colaborativos me ha enseñado la importancia de la comunicación
                efectiva y el trabajo en equipo, habilidades que considero
                esenciales para el éxito en cualquier entorno de desarrollo.
                Estoy en busca de oportunidades donde pueda aplicar y expandir
                mis conocimientos, contribuyendo al crecimiento y la innovación
                de la empresa. Si buscas un desarrollador web comprometido, con
                una mentalidad proactiva y una pasión por aprender, estaría
                encantado de ser parte de tu equipo y ayudar a llevar tus
                proyectos al siguiente nivel.
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
