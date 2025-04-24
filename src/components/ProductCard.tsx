
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2">{product.description.substring(0, 60)}...</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <Button 
            size="sm"
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
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
