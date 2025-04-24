
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedCarousel = () => {
  const slides = [
    {
      id: 1,
      title: 'Grandes Ofertas en Tecnología',
      description: 'Hasta 30% de descuento',
      image: 'https://via.placeholder.com/1200x400/3498db/ffffff',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Artículos del Hogar',
      description: 'Encuentra todo para tu casa',
      image: 'https://via.placeholder.com/1200x400/e74c3c/ffffff',
      color: 'bg-red-500',
    },
    {
      id: 3,
      title: 'Nuevas Colecciones',
      description: 'Descubre las últimas tendencias',
      image: 'https://via.placeholder.com/1200x400/2ecc71/ffffff',
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="container mx-auto mt-6">
      <Carousel className="mx-auto">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div 
                className={`relative h-[400px] w-full rounded-lg overflow-hidden`}
                style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}
              >
                <div className={`absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-12`}>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-white mb-6">
                    {slide.description}
                  </p>
                  <button className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-opacity-90 transition-all">
                    Ver ofertas
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
