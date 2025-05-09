
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronDown, ChevronRight, Package, ShoppingBag } from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { products } from '@/types/store';
import { formatCOP } from '@/lib/formatters';

const MyOrders = () => {
  // Estado para controlar qué pedido está expandido
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  // Consulta para obtener los pedidos
  const { data: orders, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  // Función para obtener el nombre del producto
  const getProductName = (productId: string) => {
    return products[productId]?.name || 'Producto no encontrado';
  };

  // Función para obtener la imagen del producto
  const getProductImage = (productId: string) => {
    return products[productId]?.image || '/placeholder.svg';
  };

  // Función para alternar la expansión de un pedido
  const toggleOrderExpansion = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        <div className="flex items-center gap-2 mb-6">
          <Package className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Mis Pedidos</h1>
        </div>
        
        {isLoading ? (
          <div className="text-center py-8">Cargando pedidos...</div>
        ) : !orders?.length ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No tienes pedidos aún</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10"></TableHead>
                  <TableHead>ID Pedido</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <React.Fragment key={order.id}>
                    <TableRow 
                      className="cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleOrderExpansion(order.id)}
                    >
                      <TableCell className="py-2">
                        <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                          {expandedOrder === order.id ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      </TableCell>
                      <TableCell className="font-medium">
                        {order.id.slice(0, 8)}
                      </TableCell>
                      <TableCell>
                        {format(new Date(order.created_at), 'PPp', { locale: es })}
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-sm bg-green-100 text-green-600">
                          {order.status === 'completed' ? 'Completado' : 'Pendiente'}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCOP(order.total)}
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell colSpan={5} className="p-0 border-b-0">
                        <Collapsible
                          open={expandedOrder === order.id}
                          className="w-full"
                        >
                          <CollapsibleContent className="p-4 bg-gray-50 space-y-4 animate-fade-in">
                            <div className="flex items-center gap-2 mb-2">
                              <ShoppingBag className="h-5 w-5 text-primary" />
                              <h3 className="text-lg font-medium">Detalles del pedido</h3>
                            </div>
                            
                            <div className="rounded-md border">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Producto</TableHead>
                                    <TableHead>Cantidad</TableHead>
                                    <TableHead className="text-right">Precio</TableHead>
                                    <TableHead className="text-right">Subtotal</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {order.order_items.map((item) => (
                                    <TableRow key={item.id} className="hover:bg-white">
                                      <TableCell>
                                        <div className="flex items-center gap-3">
                                          <Avatar className="h-10 w-10 rounded-md">
                                            <AvatarImage 
                                              src={getProductImage(item.product_id)} 
                                              alt={getProductName(item.product_id)}
                                              className="object-cover"
                                            />
                                            <AvatarFallback className="rounded-md bg-primary/10">
                                              {item.product_id.substring(0, 2).toUpperCase()}
                                            </AvatarFallback>
                                          </Avatar>
                                          <span className="font-medium text-sm">
                                            {getProductName(item.product_id)}
                                          </span>
                                        </div>
                                      </TableCell>
                                      <TableCell>{item.quantity}</TableCell>
                                      <TableCell className="text-right">{formatCOP(item.price)}</TableCell>
                                      <TableCell className="text-right">{formatCOP(item.price * item.quantity)}</TableCell>
                                    </TableRow>
                                  ))}
                                  <TableRow>
                                    <TableCell colSpan={2}></TableCell>
                                    <TableCell className="text-right font-bold">Total:</TableCell>
                                    <TableCell className="text-right font-bold">{formatCOP(order.total)}</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
};

export default MyOrders;
