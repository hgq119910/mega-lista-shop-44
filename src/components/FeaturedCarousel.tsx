
import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const slides = [
  {
    title: "Grandes Ofertas en Tecnología",
    subtitle: "Hasta 30% de descuento",
    buttonText: "Ver ofertas",
    bgImage: "/lovable-uploads/6b82d451-32e6-4c77-af39-8df97ebe6f1a.png",
    link: "/category/tecnologia" // Enlace a la categoría de tecnología
  },
  {
    title: "Artículos del Hogar",
    subtitle: "Lo mejor para tu casa",
    buttonText: "Explorar",
    bgImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80",
    link: "/category/hogar" // Enlace a la categoría de hogar
  },
  {
    title: "Nuevas Colecciones de Moda",
    subtitle: "Descubre los últimos estilos",
    buttonText: "Ver colección",
    bgImage: "/lovable-uploads/a2d685a5-1dfd-4925-b808-78d072f42fae.png",
    link: "/category/ropa" // Enlace a la categoría de ropa
  }
];

export const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleButtonClick = () => {
    navigate(slides[currentSlide].link);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia de slide cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 transform ${
            currentSlide === index 
              ? 'opacity-100 translate-x-0' 
              : index > currentSlide 
                ? 'opacity-0 translate-x-full' 
                : 'opacity-0 -translate-x-full'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex flex-col items-start justify-center h-full px-8 md:px-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in"
              style={{
                animationDelay: '300ms'
              }}
            >
              {slide.title}
            </h2>
            <p 
              className="text-xl md:text-2xl text-white mb-8 animate-fade-in"
              style={{
                animationDelay: '500ms'
              }}
            >
              {slide.subtitle}
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg animate-fade-in hover:scale-105 transition-transform duration-200" 
              onClick={handleButtonClick}
              style={{
                animationDelay: '700ms'
              }}
            >
              {slide.buttonText}
            </Button>
          </div>
        </div>
      ))}
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors hover:scale-110 transform duration-200"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors hover:scale-110 transform duration-200"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
              currentSlide === index ? 'bg-white scale-110' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
