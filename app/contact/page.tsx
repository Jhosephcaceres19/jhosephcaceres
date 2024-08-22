import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import { coiny } from "../utils/fonts";

export default function page() {
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-sky-900 to-sky-600 text-sky-300">
      <Navbar />
      <div className="mt-20">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className={`${coiny.className} text-4xl font-bold leading-tight lg:text-5xl`}>
                Contacta conmigo
              </h2>
              <div className="">
                Email: caceresjose1929@gmail.com
              </div>
            </div>
            <Image
              src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724268197/cmj6z6scfg6fs0iixsxe.png"
              alt=""
              width="400"
              height="600"
              className="p-6 h-[24rem] md:h-[26rem] object-cover"
            />
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm">
                TU NOMBRE
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100 text-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                TU EMAIL
              </label>
              <input
                id="email"
                type="email"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100 text-black"
              />
            </div>
            <div>
              <label htmlFor="name" className="text-sm">
                ASUNTO
              </label>
              <input
                id="asunt"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100 text-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                MENSAJE
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full p-3 rounded dark:bg-gray-100 text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-xl text-black bg-sky-500 font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
