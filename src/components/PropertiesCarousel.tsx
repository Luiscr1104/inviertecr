import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const proyectos = [
  {
    id: 1,
    titulo: "Condominios en PREVENTA",
    descripcion:
      "Preventa de condominios: asegura tu futuro hogar en una ubicación privilegiada con amenidades premium. Una inversión inteligente en confort y estilo de vida.",
    src: "/preventa.jpg",
  },
  {
    id: 2,
    titulo: "Disponibles en Condominio",
    descripcion:
      "Oportunidad en condominio: últimos lotes disponibles para crear tu espacio ideal en una comunidad segura y con todas las comodidades.",
    src: "/condominio.jpg",
  },
  {
    id: 3,
    titulo: "Disponibles en Residencial",
    descripcion:
      "Lotes residenciales exclusivos disponibles, ideales para construir tu hogar soñado en un entorno seguro y natural. Una oportunidad única para calidad de vida y privacidad.",
    src: "/residencial.jpg",
  },
];

export const PropertiesCarousel = () => {
  return (
    <Carousel opts={{ align: "start" }} className="w-full ">
      <CarouselContent>
        {proyectos.map((proyecto) => (
          <CarouselItem key={proyecto.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 relative">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    alt={proyecto.titulo}
                    width={600}
                    height={800}
                    src={proyecto.src}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="bg-black/60 text-white text-center py-2">
                      <h3 className="font-bold text-lg">{proyecto.titulo}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
