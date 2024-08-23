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
        } bg-sky-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-40`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`${
          open ? "w-64" : "w-0"
        } bg-cyan-600 min-h-screen fixed top-0 right-0 z-50 transition-width duration-300 overflow-hidden`}
      >
        <div className="pt-3 text-white">
          <button
            className="ml-56 mt-4 mb-10"
            onClick={() => setOpen(false)}
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link href="/">
            <div className="text-center text-xl hover:bg-orange-400 cursor-pointer p-4">
              Inicio
            </div>
          </Link>
          <Link href="/about">
            <div className="text-center text-xl hover:bg-orange-400 cursor-pointer p-4">
              Sobre mi
            </div>
          </Link>
          <Link href="/skill">
            <div className="text-center text-xl hover:bg-orange-400 cursor-pointer p-4">
              Habilidades
            </div>
          </Link>
          <Link href="/portfolio">
            <div className="text-center text-xl hover:bg-orange-400 cursor-pointer p-4">
              Portafolio
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-center text-xl hover:bg-orange-400 cursor-pointer p-4">
              Contacto
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
