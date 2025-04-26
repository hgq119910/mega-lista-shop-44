
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingBag, User, Search } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from './CartDrawer';
import { useSearch } from '@/hooks/useSearch';

const Header = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { searchQuery, setSearchQuery, handleSearch } = useSearch();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-gray-100 py-2">
        <div className="container flex justify-end items-center">
          <nav className="flex gap-4 text-sm">
            <Link to="/my-orders" className="hover:text-primary transition-colors duration-300">Mis Pedidos</Link>
            <Link to="/" className="hover:text-primary transition-colors duration-300">Atención al Cliente</Link>
            <Link to="/" className="hover:text-primary transition-colors duration-300">Locales</Link>
            <Link to="/" className="hover:text-primary transition-colors duration-300">Ingresa o Regístrate</Link>
          </nav>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Logo />
          </div>
          
          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl px-6">
            <div className="relative transform transition-all duration-300 hover:scale-[1.02]">
              <Input 
                className="w-full pl-10 pr-4 py-2 transition-shadow duration-300 hover:shadow-md" 
                placeholder="Buscar productos..." 
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>
          
          {/* User options */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="transition-all duration-300 hover:scale-105"
            >
              <User className="mr-2 h-5 w-5" />
              Mi Cuenta
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsCartOpen(true)}
              className="transition-all duration-300 hover:scale-105 relative"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Carrito
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Categories menu */}
      <div className="bg-primary text-white">
        <div className="container">
          <nav className="flex overflow-x-auto">
            {["Todas las Categorías", "Hogar", "Limpieza", "Tecnología", "Ropa"].map((category, index) => (
              <Link 
                key={index}
                to={category === "Todas las Categorías" ? "/" : `/category/${category.toLowerCase()}`} 
                className="px-4 py-3 hover:bg-primary/80 transition-colors duration-300 relative group"
              >
                {category}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      <CartDrawer 
        open={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </header>
  );
};

export default Header;
