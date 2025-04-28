
import React from 'react';
import { Link } from 'react-router-dom';
import { Category, Product } from '@/types/store';
import { products } from '@/types/store';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  category: Category;
  limit?: number; // Opcional: limitar el número de productos a mostrar
}

const CategorySection = ({ category, limit = 4 }: CategorySectionProps) => {
  // Obtenemos solo los productos que corresponden a esta categoría
  const categoryProducts = category.products
    .map(id => products[id])
    .filter(Boolean)
    .slice(0, limit); // Limitamos la cantidad de productos mostrados

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span>{category.icon}</span> 
            {category.name}
          </h2>
          <Link 
            to={`/category/${category.id}`} 
            className="text-primary hover:underline"
          >
            Ver todos
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
