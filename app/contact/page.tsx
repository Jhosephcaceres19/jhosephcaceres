"use client";
import { useRef } from 'react';
import Navbar from '../navbar';
import Image from 'next/image';
import { coiny } from '../utils/fonts';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.current){
      emailjs
      .sendForm(
        'service_1dc6rhb', 
        'template_ec0k0hp', 
        form.current, 
        'JRwk_eutmA9Tg6f7s'  // Aquí pasas la clave pública directamente
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Correo enviado")
          form.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    }else {
      console.error("The form reference is not set");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-sky-900 to-sky-600 text-sky-300">
      <Navbar />
      <div className="mt-20">
        <div className="grid max-w-screen-xl grid-cols-1 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
          <div className="flex flex-col justify-between items-center">
            <div className="space-y-2">
              <h2 className={`${coiny.className} text-4xl text-center font-bold leading-tight lg:text-5xl`}>
                Contacta conmigo
              </h2>
              <div className='text-center text-md'>
                Email: caceresjose1929@gmail.com
              </div>
            </div>
            <Image
              src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724695040/456380104_2472919269575647_5686340869483867173_n_ccoidv.jpg"
              alt="Contact Image"
              width={400}
              height={600}
              className="p-6 h-[20rem] md:h-[24rem]"
            />
          </div>
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="text-sm">
                TU NOMBRE
              </label>
              <input
                id="name"
                name="user_name"
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
                name="user_email"
                type="email"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100 text-black"
              />
            </div>
            <div>
              <label htmlFor="asunto" className="text-sm">
                ASUNTO
              </label>
              <input
                id="asunto"
                name="affair"
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
                name="message"
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
