
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  categories: string[];  // Permite multilista - un producto en varias categorías
  description: string;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  products: string[];  // IDs de productos en esta categoría
}

// Datos de ejemplo para nuestra tienda
export const categories: Category[] = [
  {
    id: "hogar",
    name: "Artículos del Hogar",
    icon: "🏠",
    products: ["h1", "h2", "h3", "m1"]
  },
  {
    id: "limpieza",
    name: "Productos de Limpieza",
    icon: "🧹",
    products: ["l1", "l2", "l3", "m1"]
  },
  {
    id: "tecnologia",
    name: "Tecnología",
    icon: "💻",
    products: ["t1", "t2", "t3"]
  },
  {
    id: "ropa",
    name: "Ropa y Accesorios",
    icon: "👕",
    products: ["r1", "r2", "r3"]
  }
];

// Productos de ejemplo - multilista implementada con arrays de categorías
export const products: Record<string, Product> = {
  "h1": {
    id: "h1",
    name: "Juego de Sábanas",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    categories: ["hogar"],
    description: "Juego de sábanas de algodón, 4 piezas",
    stock: 15
  },
  "h2": {
    id: "h2",
    name: "Lámpara de Mesa",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    categories: ["hogar"],
    description: "Lámpara moderna para mesa de noche",
    stock: 8
  },
  "h3": {
    id: "h3",
    name: "Juego de Toallas",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    categories: ["hogar"],
    description: "Juego de 3 toallas de baño",
    stock: 20
  },
  "l1": {
    id: "l1",
    name: "Detergente Multiusos",
    price: 5.99,
    image: "https://via.placeholder.com/150",
    categories: ["limpieza"],
    description: "Detergente concentrado para múltiples superficies",
    stock: 30
  },
  "l2": {
    id: "l2",
    name: "Escoba y Recogedor",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    categories: ["limpieza"],
    description: "Set de escoba y recogedor ergonómicos",
    stock: 10
  },
  "l3": {
    id: "l3",
    name: "Limpiador de Vidrios",
    price: 4.99,
    image: "https://via.placeholder.com/150",
    categories: ["limpieza"],
    description: "Spray limpiador para cristales y espejos",
    stock: 25
  },
  "t1": {
    id: "t1",
    name: "Auriculares Bluetooth",
    price: 59.99,
    image: "https://via.placeholder.com/150",
    categories: ["tecnologia"],
    description: "Auriculares inalámbricos con cancelación de ruido",
    stock: 12
  },
  "t2": {
    id: "t2",
    name: "Smartwatch",
    price: 129.99,
    image: "https://via.placeholder.com/150",
    categories: ["tecnologia"],
    description: "Reloj inteligente con monitoreo cardíaco",
    stock: 5
  },
  "t3": {
    id: "t3",
    name: "Cargador Inalámbrico",
    price: 24.99,
    image: "https://via.placeholder.com/150",
    categories: ["tecnologia"],
    description: "Base de carga rápida para smartphones",
    stock: 18
  },
  "r1": {
    id: "r1",
    name: "Camiseta Básica",
    price: 14.99,
    image: "https://via.placeholder.com/150",
    categories: ["ropa"],
    description: "Camiseta de algodón, disponible en varios colores",
    stock: 40
  },
  "r2": {
    id: "r2",
    name: "Pantalones Vaqueros",
    price: 34.99,
    image: "https://via.placeholder.com/150",
    categories: ["ropa"],
    description: "Jeans clásicos de corte recto",
    stock: 22
  },
  "r3": {
    id: "r3",
    name: "Zapatos Deportivos",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    categories: ["ropa"],
    description: "Zapatillas para running con suela amortiguada",
    stock: 15
  },
  // Ejemplo de producto que pertenece a múltiples categorías (multilista)
  "m1": {
    id: "m1",
    name: "Organizador Multiusos",
    price: 17.99,
    image: "https://via.placeholder.com/150",
    categories: ["hogar", "limpieza"], // Pertenece a dos categorías
    description: "Organizador para artículos del hogar o productos de limpieza",
    stock: 8
  }
};
