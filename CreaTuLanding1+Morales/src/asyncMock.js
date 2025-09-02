const products = [
  {
    id: "1",
    name: "Aros Corazón",
    category: "joyas",
    price: 1500,
    description: "Aros basicos de acero, delicados.",
  },
  {
    id: "2",
    name: "Anillo Baggy",
    category: "joyas",
    price: 3200,
    description: "Anillo dorado con piedra engarzada.",
  },
  {
    id: "3",
    name: "Bolso Cuero",
    category: "accesorios",
    price: 4500,
    description: "Bolso de cuero marrón, elegante y resistente.",
  },
  {
    id: "4",
    name: "Cartera Amayra",
    category: "accesorios",
    price: 1200,
    description: "Cartera espaciosa para cualquier ocasión.",
  },
  {
    id: "5",
    name: "Labial Rojo",
    category: "cosméticos",
    price: 800,
    description: "Labial rojo intenso de larga duración.",
  },
  {
    id: "6",
    name: "Paleta de Sombras",
    category: "cosméticos",
    price: 1500,
    description: "Paleta de sombras con tonos neutros y vivos.",
  },
  {
    id: "7",
    name: "Collar Miko",
    category: "joyas",
    price: 5600,
    description: "Collar totalmente original de la cantante young miko.",
  },
  {
    id: "8",
    name: "Contourn",
    category: "cosméticos",
    price: 4500,
    description: "Maquillaje para contornear el rostro y marcar sus facciones.",
  },
  {
    id: "9",
    name: "Cinto BELA",
    category: "accesorios",
    price: 3600,
    description: "Cinto para decorar cualquier outfit pensado.",
  },
  {
    id: "10",
    name: "Rimel",
    category: "cosméticos",
    price: 6500,
    description: "Rimel que combina volumen y larga duración.",
  },
  {
    id: "11",
    name: "Anillo de compromiso",
    category: "joyas",
    price: 7800,
    description: "Anillo de compromiso con piedra plateada engarzada.",
  },
  {
    id: "12",
    name: "Anillo de casamiento",
    category: "joyas",
    price: 10500,
    description: "Anillo simple de oro.",
  },
];

// Función que simula fetch asíncrono
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // 500ms de retardo
  });
};