
import React from 'react';
import Header from '@/components/Header';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import CategoryIcons from '@/components/CategoryIcons';
import CategorySection from '@/components/CategorySection';
import { categories } from '@/types/store';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <FeaturedCarousel />
        <CategoryIcons />
        
        {/* Mostramos cada categoría por separado */}
        {categories.map(category => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>
      
      <footer className="bg-gray-800 text-white py-10 mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">MultiTienda</h3>
              <p className="text-gray-300">
                Tu tienda online con todo lo que necesitas para tu hogar, tecnología, limpieza y más.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contacto</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Preguntas Frecuentes</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Términos y Condiciones</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
              <p className="text-gray-300">
                info@multitienda.com<br />
                +123 456 7890
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            &copy; 2025 MultiTienda. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
