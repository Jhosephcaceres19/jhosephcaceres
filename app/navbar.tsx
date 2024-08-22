import React from "react";
import Link from "next/link";
import { coiny } from "./utils/fonts";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-around text-2xl font-bold p-4 text-white bg-gradient-to-r from-sky-950 via-sky-900 to-sky-700 font-family:Coiny bg-opacity-90 transition-opacity duration-300 ease-in-out">
      <div className="">
        <Link href="/" className={`${coiny.className} p-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text`}>
          {/* <Image src="/next.svg" width={100} height={50} alt="jose caceres" /> */}
          JOSE CACERES
        </Link>
      </div>
      <div className={`${coiny.className} flex gap-4`}>
        <Link href="/" className="bg-inherit hover:underline">INICIO</Link>
        <Link href="/about" className="hover:underline">SOBRE MI</Link>
        <Link href="/skill" className="hover:underline">HABILIDADES</Link>
        <Link href="/portfolio" className="hover:underline">PORTAFOLIO</Link>
        <Link href="/contact" className="hover:underline">CONTACTO</Link>
      </div>
      
    </nav>
  );
}
