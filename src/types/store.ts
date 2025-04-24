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
    products: ["h1", "h2", "h3", "h4", "m1"]
  },
  {
    id: "limpieza",
    name: "Productos de Limpieza",
    icon: "🧹",
    products: ["l1", "l2", "l3", "l4", "m1"]
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
    name: "Juego de Sábanas Premium",
    price: 49.99,
    image: "/lovable-uploads/84b1dbc3-3acf-4b3f-b63d-a6a5ce776253.png",
    categories: ["hogar"],
    description: "Juego de sábanas de algodón egipcio de alta calidad, suaves y duraderas. Set completo que incluye sábana ajustable, sábana plana y fundas de almohada. Perfectas para un descanso confortable.",
    stock: 15
  },
  "h2": {
    id: "h2",
    name: "Lámpara de Mesa Espiral",
    price: 59.99,
    image: "/lovable-uploads/dffb38d7-f0cf-4bcb-ad71-bbaa323689c0.png",
    categories: ["hogar"],
    description: "Elegante lámpara LED de diseño moderno con forma espiral. Perfecta para tu mesa de noche o escritorio. Incluye iluminación LED cálida que crea un ambiente relajante en cualquier habitación.",
    stock: 8
  },
  "h3": {
    id: "h3",
    name: "Set de Toallas Premium",
    price: 39.99,
    image: "/lovable-uploads/85ee574e-24c6-4945-b2fa-5097e9795c6f.png",
    categories: ["hogar"],
    description: "Juego completo de 7 toallas de algodón de alta densidad y absorción. Incluye toallas de baño, de mano y toallitas faciales. Ultra suaves y duraderas, disponibles en elegante color gris.",
    stock: 20
  },
  "h4": {
    id: "h4",
    name: "Estantería Organizadora Multipiso",
    price: 45.99,
    image: "/lovable-uploads/b3ffde0a-4e93-4344-b553-a24fd8f20f9f.png",
    categories: ["hogar"],
    description: "Estantería de 5 niveles resistente y versátil. Perfecta para organizar libros, decoraciones, impresoras y artículos del hogar. Fácil de armar y con capacidad para soportar hasta 25kg por nivel.",
    stock: 12
  },
  "l1": {
    id: "l1",
    name: "Detergente Multiusos 3D",
    price: 5.99,
    image: "/lovable-uploads/b2b94b62-941a-4167-a5d3-ce6035bafafd.png",
    categories: ["limpieza"],
    description: "Detergente líquido multiusos con aroma fresco. Paquete de 2 unidades de 1.8L cada una. Ideal para pisos y superficies. Fórmula concentrada con tecnología 3D para una limpieza profunda.",
    stock: 30
  },
  "l2": {
    id: "l2",
    name: "Set Escoba y Recogedor Premium",
    price: 15.99,
    image: "/lovable-uploads/54550c9f-ca58-498f-ae83-4dc251f5bac2.png",
    categories: ["limpieza"],
    description: "Set de escoba y recogedor ergonómicos con acabado premium. Diseño innovador con recogedor de cierre automático. Mango extensible de acero inoxidable y cerdas resistentes de alta calidad.",
    stock: 20
  },
  "l3": {
    id: "l3",
    name: "Limpiador Multiusos Mr Músculo",
    price: 4.99,
    image: "/lovable-uploads/341414b9-6943-4224-acf9-0ed786a73b06.png",
    categories: ["limpieza"],
    description: "Limpiador en spray para vidrios y superficies. Fórmula sin vetas que deja un acabado brillante y sin marcas. Botella de 500ml con gatillo ergonómico.",
    stock: 45
  },
  "l4": {
    id: "l4",
    name: "Estantería Organizadora 5 Niveles",
    price: 29.99,
    image: "/lovable-uploads/7aa979ca-8e68-4531-a823-8f1326f389a4.png",
    categories: ["limpieza", "hogar"],
    description: "Estantería de plástico resistente con 5 niveles. Perfecta para organizar productos de limpieza o artículos del hogar. Fácil de ensamblar, resistente al agua y de gran capacidad.",
    stock: 15
  },
  "t1": {
    id: "t1",
    name: "AirPods 4 Bluetooth",
    price: 249.99,
    image: "/lovable-uploads/35b9fa30-7976-465b-8aa5-d205905e2d25.png",
    categories: ["tecnologia"],
    description: "Auriculares inalámbricos con cancelación activa de ruido, resistentes al agua y al sudor. Incluye estuche de carga con conexión USB-C y hasta 24 horas de batería.",
    stock: 15
  },
  "t2": {
    id: "t2",
    name: "Smartwatch Premium Series",
    price: 179.99,
    image: "/lovable-uploads/eca57e9a-e4ef-458b-a423-953e21eef893.png",
    categories: ["tecnologia"],
    description: "Reloj inteligente con pantalla AMOLED, monitoreo de salud 24/7, GPS integrado, resistente al agua y más de 100 modos deportivos. Compatible con iOS y Android.",
    stock: 20
  },
  "t3": {
    id: "t3",
    name: "Cargador Inalámbrico LED",
    price: 39.99,
    image: "/lovable-uploads/a5be3ee2-918a-4485-82a0-60bd7f1e12b3.png",
    categories: ["tecnologia"],
    description: "Base de carga rápida inalámbrica con iluminación LED ambiental. Compatible con todos los dispositivos Qi, carga rápida de 15W y diseño ultra delgado.",
    stock: 25
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
