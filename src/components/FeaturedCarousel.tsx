import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: "Grandes Ofertas en Tecnología",
    subtitle: "Hasta 30% de descuento",
    buttonText: "Ver ofertas",
    bgImage: "/lovable-uploads/6b82d451-32e6-4c77-af39-8df97ebe6f1a.png"
  },
  {
    title: "Artículos del Hogar",
    subtitle: "Lo mejor para tu casa",
    buttonText: "Explorar",
    bgImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Nuevas Colecciones de Moda",
    subtitle: "Descubre los últimos estilos",
    buttonText: "Ver colección",
    bgImage: "/lovable-uploads/a2d685a5-1dfd-4925-b808-78d072f42fae.png"
  }
];

export const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex flex-col items-start justify-center h-full px-8 md:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
            <p className="text-xl md:text-2xl text-white mb-8">{slide.subtitle}</p>
            <Button variant="secondary" size="lg" className="text-lg">
              {slide.buttonText}
            </Button>
          </div>
        </div>
      ))}
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
