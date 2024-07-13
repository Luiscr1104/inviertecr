import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import MainCarousel from "@/components/MainCarousel";
import { PropertiesCarousel } from "@/components/PropertiesCarousel";

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper
          className="pb-24 pt-10 lg:grid 
          lg:grid-cols-2 sm:pb-28 lg:gap-x-8 
          lg:pt-15 xl:pt-10 lg:pb-48"
        >
          <div className="col-span-1 px-6 lg:px-0 lg:pt-4">
            <div
              className="relative mx-auto 
              text-center lg:text-left flex flex-col 
              items-center lg:items-start"
            >
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Descubre tu Terreno Ideal en{" "}
                <span className="bg-custom-violet px-2 text-white">
                  La Fortuna
                </span>
              </h1>

              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Asegura tu futuro invirtiendo en un terreno con{" "}
                <span className="font-semibold">InvierteCR</span>. Somos líderes
                en el mercado, garantizando la mejor inversión para ti.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-custom-violet" />
                  Financiamiento integral: 100% de su Quinta, Lote o Terreno.
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-custom-violet" />
                  Sin complicaciones: Sin prima, fiador ni estudios crediticios.
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-custom-violet" />
                  Flexibilidad de pago: Abonos extraordinarios sin penalidades.
                </li>
              </ul>

              <div
                className="mt-12 flex flex-col sm:flex-row 
                items-center sm:items-start gap-5"
              >
                <div className="flex -space-x-4">
                  <Image
                    width={100}
                    height={100}
                    className="inline-block object-cover h-10 w-10 rounded-full
                    ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="inline-block h-10 w-10 rounded-full
                    ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user2 image"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="inline-block h-10 w-10 rounded-full
                    ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user3 image"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="inline-block h-10 w-10 rounded-full
                    ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user4 image"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="inline-block h-10 w-10 rounded-full
                    ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user5 image"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-custom-violet fill-custom-violet" />
                    <Star className="h-4 w-4 text-custom-violet fill-custom-violet" />
                    <Star className="h-4 w-4 text-custom-violet fill-custom-violet" />
                    <Star className="h-4 w-4 text-custom-violet fill-custom-violet" />
                    <Star className="h-4 w-4 text-custom-violet fill-custom-violet" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex col-span-1 w-full justify-center items-center lg:mx-0 lg:mt-40 h-fit">
            <MainCarousel />
          </div>
        </MaxWidthWrapper>
      </section>

      {/*  Value proposition section*/}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Qué dicen nuestros clientes?
            </h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap0.5 mb-2">
                <Star className="h-5 w-5 text-custom-violet fill-custom-violet" />
                <Star className="h-5 w-5 text-custom-violet fill-custom-violet" />
                <Star className="h-5 w-5 text-custom-violet fill-custom-violet" />
                <Star className="h-5 w-5 text-custom-violet fill-custom-violet" />
                <Star className="h-5 w-5 text-custom-violet fill-custom-violet" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  Después de seis meses de haber adquirido un terreno en La
                  Fortuna, estoy completamente satisfecho con mi inversión. A
                  pesar de mis iniciales dudas,
                  <span className="p-0.5 bg-slate-800 text-white">
                    {" "}
                    el valor del terreno ha aumentado
                  </span>
                  y la zona promete un desarrollo emocionante. ¡Definitivamente
                  fue una excelente decisión!
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-custom-violet fill-custom-violet" />
                <Star className="h-5 w-5 text-custom-violet fill-custom-violet" />
                <Star className="h-5 w-5 text-custom-violet fill-custom-violet" />
                <Star className="h-5 w-5 text-custom-violet fill-custom-violet" />
                <Star className="h-5 w-5 text-custom-violet fill-custom-violet" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  La compra de mi lote ha sido una de las{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    mejores inversiones que he hecho.
                  </span>{" "}
                  En solo medio año, he visto cómo la zona ha comenzado a
                  desarrollarse y el valor del terreno sigue subiendo. Estoy muy
                  contento con la decisión y el potencial de crecimiento que
                  ofrece esta hermosa región de Costa Rica.
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-4.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper
          className="pb-24 pt-10 lg:grid 
          lg:grid-cols-1 sm:pb-28 lg:gap-x-8 
          lg:pt-15 xl:pt-10 lg:pb-48"
        >
          <div className="flex flex-col items-center gap-4 sm:gap-6 my-10">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Propiedades{" "}
              <span className="bg-custom-violet px-2 text-white">
                Disponibles
              </span>
            </h2>
          </div>
          <div className="p-10">
            <PropertiesCarousel />
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
