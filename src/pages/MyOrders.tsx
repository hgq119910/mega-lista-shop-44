
import React from 'react';
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
import { Package } from 'lucide-react';

const MyOrders = () => {
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
                  <TableHead>ID Pedido</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
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
                      ${order.total.toFixed(2)}
                    </TableCell>
                  </TableRow>
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
