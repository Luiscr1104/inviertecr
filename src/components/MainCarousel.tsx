
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Image from "next/image"


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
]


const MainCarousel = () => {
    return (
        <Carousel className="w-full ">
            <CarouselContent>
                {images.map((item, index) => (
                    <CarouselItem key={index}>
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
    )
}

export default MainCarousel