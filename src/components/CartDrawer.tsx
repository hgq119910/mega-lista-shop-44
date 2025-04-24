
import React from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Trash2 } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from '@/components/ui/drawer';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, removeFromCart, updateQuantity } = useCart();
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    // Por ahora solo cerramos el drawer
    // La funcionalidad de pago se implementará después
    onClose();
  };

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Carrito de Compras</DrawerTitle>
        </DrawerHeader>

        {items.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            Tu carrito está vacío
          </div>
        ) : (
          <div className="p-4">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between space-x-4 border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">${item.product.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <DrawerFooter>
          {items.length > 0 && (
            <>
              <div className="flex justify-between text-lg font-semibold mb-4">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button onClick={handleCheckout} className="w-full">
                Proceder al pago
              </Button>
            </>
          )}
          <Button variant="outline" onClick={onClose} className="w-full">
            Cerrar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
