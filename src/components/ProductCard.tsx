
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/store';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
          {product.stock < 5 && product.stock > 0 && (
            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              ¡Últimas unidades!
            </span>
          )}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-3 py-1 rounded-md font-medium">
                Agotado
              </span>
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description.substring(0, 60)}...</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <Button 
            size="sm"
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className="transition-all hover:scale-105"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
