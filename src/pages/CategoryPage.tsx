
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/types/store';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Encontrar la categoría seleccionada (asegurándonos de que coincida exactamente)
  const category = categories.find(cat => cat.id === id);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Categoría no encontrada</h1>
          <p className="mb-4">Lo sentimos, la categoría que buscas no existe.</p>
          <p className="text-gray-500 mb-8">ID de categoría buscado: "{id}"</p>
          
          <Link to="/">
            <Button className="inline-flex items-center gap-2">
              <Home size={16} />
              Volver a la página principal
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Obtener productos de esta categoría
  const categoryProducts = category.products
    .map(productId => products[productId])
    .filter(Boolean);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <span>{category.icon}</span> {category.name}
        </h1>
        <p className="text-gray-600 mb-6">
          {categoryProducts.length} productos encontrados
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
