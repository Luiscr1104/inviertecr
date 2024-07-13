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
import { DiVim } from "react-icons/di";

const images = [
    {
      src: "/property-image.jpg",
      alt: "Property Image",
      width: 600,
      height: 800,
    },
    {
      src: "/property-image.jpg",
      alt: "Property Image",
      width: 600,
      height: 800,
    },
    {
      src: "/property-image.jpg",
      alt: "Property Image",
      width: 600,
      height: 800,
    },
    {
      src: "/property-image.jpg",
      alt: "Property Image",
      width: 600,
      height: 800,
    },
    {
      src: "/property-image.jpg",
      alt: "Property Image",
      width: 600,
      height: 800,
    },
  ];

export const PropertiesCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                {
                    <Image
                      key={index}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      src={item.src}
                    />
                  }
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
