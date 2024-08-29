import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { coiny } from "./utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-sky-900 to-sky-600 text-white">
      <Navbar />
      <div className=" inset-0 flex flex-col mt-30 gap-4 lg:gap-0 md:mt-0 md:absolute justify-center text-start w-full items-center lg:flex-row-reverse md:content-center">
        <div className="w-[250px] md:w-[300px] lg:rounded-lg xl:w-[400px]">
          <Image
            src={
              "https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724176942/JHOSEPH_u3n1pb.jpg"
            }
            width={200}
            height={200}
            alt="Jose Caceres Aramayo"
            className="rounded-md w-full mt-20 md:mt-0 "
          />
        </div>
        <div className="flex flex-col  text-center justify-center gap-4 lg:w-[60%] lg:text-start ">
          <span className={`${coiny.className} text-xl  xl:text-4xl`}>
            Hola, Soy
          </span>
          <h1
            className={`${coiny.className} text-3xl mx-4 lg:mx-0 md:text-4xl  xl:text-5xl`}
          >
            <span className="text-sky-500">Jose Caceres Aramayo</span>
          </h1>
          <h3
            className={`${coiny.className} text-lg md:text-xl lg:text-2xl  xl:text-3xl`}
          >
            Desarrollador Web
          </h3>
          <p className="text-md text-justify mx-6 lg:mx-0 lg:mr-16 xl:mr-56 sm:mx-10 bg-sky-700 p-4 rounded-md md:text-lg xl:text-xl 2xl:text-2xl">
            Como{' '}
            <span className=" text-sky-400 font-bold">
              desarrollador de aplicaciones web
            </span>
            , empleo tecnologías como React, TypeScript, Next.js y Nest.js para
            crear soluciones eficientes y bien diseñadas. Mi objetivo es ofrecer
            aplicaciones que sean rápidas, accesibles y adaptadas a las
            necesidades del usuario, enfocándome en resolver problemas y
            optimizar el rendimiento en cada proyecto.
          </p>
          <div className="flex gap-4 pb-4 justify-center mt-4 lg:justify-start">
            <a
              href="https://www.instagram.com/jhoseph_caceres19/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                color="#ffffff"
                className="w-8 sm:w-10"
              />
            </a>
            <a
              href="https://www.facebook.com/jhoseph.caceresaramayo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                color="#ffffff"
                className="w-8 sm:w-10"
              />
            </a>
            <a
              href="https://linkedin.com/in/josé-caceres-aramayo-9b7548268"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                color="#ffffff"
                className="w-8 sm:w-10"
              />
            </a>
            <a
              href="https://github.com/Jhosephcaceres19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                color="#ffffff"
                className="w-8 sm:w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
