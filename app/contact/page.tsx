"use client";
import { useRef } from "react";
import Navbar from "../navbar";
import Image from "next/image";
import { coiny } from "../utils/fonts";
import emailjs from "@emailjs/browser";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { NavigationControl, Marker, Popup } from "react-map-gl";
import { Purple_Purse } from "next/font/google";

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);

  const getValidationSchema = () => {
    return Yup.object({
      user_name: Yup.string()
        .max(15, "El nombre debe tener 15 caracteres")
        .required("Requerido"),
      user_email: Yup.string()
        .email("Ingrese un email correcto")
        .required("Requerido"),
      affair: Yup.string()
        .max(50, "El asunto debe tener 50 caracteres")
        .required("Requerido"),
      message: Yup.string()
        .max(200, "El mensaje debe tener 200 caracteres")
        .required("Requerido"),
    });
  };

  const sendEmail = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    if (form.current) {
      emailjs
        .sendForm(
          "service_1dc6rhb",
          "template_ec0k0hp",
          form.current,
          "JRwk_eutmA9Tg6f7s"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Correo enviado a Jose");
            form.current?.reset();
            setSubmitting(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setSubmitting(false);
          }
        );
    } else {
      console.error("The form reference is not set");
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-black via-sky-900 to-sky-600 text-sky-300">
      <Navbar />
      <div className="mt-20 flex flex-col">
        <div className="grid max-w-screen-xl grid-cols-1 px-8 pb-10 mx-auto rounded-lg md:gap-8 lg:gap-10 xl:gap-20 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
          <div className="flex flex-col justify-start items-center">
            <div className="space-y-2">
              <h2
                className={`${coiny.className} text-4xl text-center font-bold leading-tight lg:text-5xl`}
              >
                Contacta conmigo
              </h2>
              <div className="text-center text-md">
                Email: caceresjose1929@gmail.com
              </div>
            </div>
            <Image
              src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724695040/456380104_2472919269575647_5686340869483867173_n_ccoidv.jpg"
              alt="Contact Image"
              width={400}
              height={600}
              className="p-6 h-[20rem] md:h-[24rem] "
            />
          </div>
          <Formik
            initialValues={{
              user_name: "",
              user_email: "",
              affair: "",
              message: "",
            }}
            validationSchema={getValidationSchema()}
            onSubmit={sendEmail}
          >
            <Form ref={form} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm">
                  TU NOMBRE
                </label>
                <Field
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder=""
                  className="w-full p-3 rounded dark:bg-gray-100 text-black"
                />
                <ErrorMessage
                  name="user_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  TU EMAIL
                </label>
                <Field
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder=""
                  className="w-full p-3 rounded dark:bg-gray-100 text-black"
                />
                <ErrorMessage
                  name="user_email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="asunto" className="text-sm">
                  ASUNTO
                </label>
                <Field
                  id="asunto"
                  name="affair"
                  type="text"
                  placeholder=""
                  className="w-full p-3 rounded dark:bg-gray-100 text-black"
                />
                <ErrorMessage
                  name="affair"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  MENSAJE
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full p-3 rounded dark:bg-gray-100 text-black"
                ></Field>
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 text-xl text-cyan-950 bg-sky-400 hover:bg-sky-500 hover:text-white font-bold tracking-wide uppercase rounded"
              >
                Enviar Mensaje
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="w-full px-8 mb-8">
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
          initialViewState={{
            longitude: -66.156798,
            latitude: -17.393801,
            zoom: 14,
          }}
          style={{ width: "100%", height: "40vh", borderRadius: "20px" }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          <Marker
            longitude={-66.156798}
            latitude={-17.393801}
            offset={[ -20, -10 ]}
          >
            <Image
              src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1724176942/JHOSEPH_u3n1pb.jpg"
              alt="Marker Icon"
              width={400}
              height={400}
              style={{ width: "40px", height: "40px", borderRadius:"100%" }}
            />
          </Marker>

          <Popup
            longitude={-66.156798}
            latitude={-17.393801}
            closeButton={true}
            closeOnClick={false}
            anchor="top"
            className="mt-4 "
          >
            <div className="text-center text-md xl:text-xl text-black">
              <h3>Cochabamba, Bolivia</h3>
            </div>
          </Popup>
          <NavigationControl position="top-right" />
        </Map>
      </div>
    </div>
  );
}
