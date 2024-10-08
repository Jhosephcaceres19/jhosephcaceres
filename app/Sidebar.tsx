"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Botón para abrir el Sidebar */}
      <button
        className="fixed top-4 right-4 z-50 text-white bg-cyan-600 p-2 rounded-full md:hidden"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5h16.5M3.75 12h16.5M3.75 19h16.5"
          />
        </svg>
      </button>

      {/* Fondo que oscurece el contenido cuando el Sidebar está abierto */}
      <div
        className={`${
          !open && "hidden"
        } bg-sky-600/5 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-40`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`${
          open ? "w-64" : "w-0"
        } bg-cyan-600 pt-2 h-auto rounded-bl-2xl fixed top-0 right-0 z-50 transition-width duration-300 overflow-hidden`}
      >
        <div className=" text-white top-0">
          <button
            className="ml-[200px] mt-2 bg-sky-700 p-1 rounded-full mb-5"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mb-5">
          <Link href="/">
            <div className="text-center text-xl hover:bg-orange-400 cursor-pointer p-4 rounded-xl">
              Inicio
            </div>
          </Link>
          <Link href="/about">
            <div className="text-center text-xl hover:bg-orange-400 cursor-pointer p-4 rounded-xl">
              Sobre mi
            </div>
          </Link>
          <Link href="/skill">
            <div className="text-center text-xl hover:bg-orange-400 cursor-pointer p-4 rounded-xl">
              Habilidades
            </div>
          </Link>
          <Link href="/portfolio">
            <div className="text-center text-xl hover:bg-orange-400 cursor-pointer p-4 rounded-xl">
              Portafolio
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-center text-xl hover:bg-orange-400 cursor-pointer p-4 rounded-xl">
              Contacto
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
