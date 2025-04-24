
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingBag, User, Search } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-gray-100 py-2">
        <div className="container flex justify-end items-center">
          <nav className="flex gap-4 text-sm">
            <Link to="/my-orders" className="hover:underline">Mis Pedidos</Link>
            <Link to="/" className="hover:underline">Atención al Cliente</Link>
            <Link to="/" className="hover:underline">Locales</Link>
            <Link to="/" className="hover:underline">Ingresa o Regístrate</Link>
          </nav>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl px-6">
            <div className="relative">
              <Input 
                className="w-full pl-10 pr-4 py-2" 
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
            <Button variant="ghost" size="sm">
              <User className="mr-2 h-5 w-5" />
              Mi Cuenta
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Carrito ({totalItems})
            </Button>
          </div>
        </div>
      </div>
      
      {/* Categories menu */}
      <div className="bg-primary text-white">
        <div className="container">
          <nav className="flex overflow-x-auto">
            <Link to="/" className="px-4 py-3 hover:bg-primary/80">Todas las Categorías</Link>
            <Link to="/category/hogar" className="px-4 py-3 hover:bg-primary/80">Hogar</Link>
            <Link to="/category/limpieza" className="px-4 py-3 hover:bg-primary/80">Limpieza</Link>
            <Link to="/category/tecnologia" className="px-4 py-3 hover:bg-primary/80">Tecnología</Link>
            <Link to="/category/ropa" className="px-4 py-3 hover:bg-primary/80">Ropa</Link>
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
