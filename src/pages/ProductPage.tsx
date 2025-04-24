
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { products, categories } from '@/types/store';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products[id || ''];
  const { addToCart } = useCart();
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
          <p>Lo sentimos, el producto que buscas no existe.</p>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Volver a la página principal
          </Link>
        </div>
      </div>
    );
  }
  
  // Buscar las categorías a las que pertenece este producto
  const productCategories = categories.filter(
    category => product.categories.includes(category.id)
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        <Link to="/" className="flex items-center text-gray-600 hover:text-primary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a la tienda
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Imagen del producto */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain aspect-square"
              />
            </div>
            
            {/* Detalles del producto */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              {/* Categorías (multilista visual) */}
              <div className="flex flex-wrap gap-2 mb-4">
                {productCategories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/category/${cat.id}`}
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 hover:bg-gray-200"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                ))}
              </div>
              
              <div className="text-3xl font-bold text-primary mb-4">
                ${product.price.toFixed(2)}
              </div>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              {/* Características */}
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Características:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Calidad premium</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Envío gratis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Garantía de 12 meses</span>
                  </li>
                </ul>
              </div>
              
              {/* Disponibilidad */}
              <div className="mb-6">
                <span className="text-sm font-medium">Disponibilidad: </span>
                {product.stock > 0 ? (
                  <span className="text-green-600">{product.stock} en stock</span>
                ) : (
                  <span className="text-red-600">Agotado</span>
                )}
              </div>
              
              {/* Botón de compra */}
              <Button 
                className="w-full" 
                size="lg" 
                disabled={product.stock === 0}
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Añadir al carrito
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
