
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
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      // 1. Crear la orden primero
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          total,
          status: 'completed',
          user_id: '00000000-0000-0000-0000-000000000000' // Demo user ID
        })
        .select();

      if (orderError) throw orderError;

      if (!order || order.length === 0) {
        throw new Error("No se pudo crear la orden");
      }

      // 2. Crear los items de la orden
      const orderItems = items.map(item => ({
        order_id: order[0].id,
        product_id: item.product.id,
        quantity: item.quantity,
        price: item.product.price
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      toast.success("¡Pedido realizado con éxito!");
      clearCart(); // Limpiar el carrito después de la compra
      onClose();
      navigate('/my-orders'); // Redirigir a la página de pedidos
    } catch (error) {
      console.error('Error al procesar el pedido:', error);
      toast.error("Error al procesar el pedido");
    }
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
