export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  moq: number; // Minimum Order Quantity
  increment: number; // Order increment step
  category: string;
  specifications?: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'tmt-bars-8mm',
    name: 'TMT Bars 8mm',
    description: 'High-strength TMT bars with superior corrosion resistance and earthquake resistance properties.',
    price: 380,
    imageUrl: 'products/tmt-bars.png',
    moq: 10,
    increment: 5,
    category: 'Raw Steel',
    specifications: '8mm diameter, Fe500 grade',
    inStock: true
  },
  {
    id: 'steel-pipes-round',
    name: 'Round Steel Pipes',
    description: 'Premium quality round mild steel pipes suitable for construction and industrial applications.',
    price: 149,
    imageUrl: 'products/steel-pipes.png',
    moq: 10,
    increment: 5,
    category: 'Raw Steel',
    specifications: 'Various sizes available',
    inStock: true
  },
  {
    id: 'steel-sheets',
    name: 'Steel Sheets & Coils',
    description: 'High-grade steel sheets and coils with excellent formability and surface finish.',
    price: 66,
    imageUrl: 'products/steel-sheets-coils.png',
    moq: 10,
    increment: 5,
    category: 'Raw Steel',
    specifications: 'Multiple gauges available',
    inStock: true
  },
  {
    id: 'steel-rods',
    name: 'Steel Rods',
    description: 'Solid steel rods manufactured to precise specifications for various industrial applications.',
    price: 75,
    imageUrl: 'products/steel-furniture.png',
    moq: 10,
    increment: 5,
    category: 'Raw Steel',
    specifications: '6mm - 25mm diameter',
    inStock: true
  },
  {
    id: 'industrial-racks',
    name: 'Industrial Storage Racks',
    description: 'Heavy-duty industrial storage racks designed for maximum load capacity and durability.',
    price: 15000,
    imageUrl: 'products/steel-rods.png',
    moq: 3,
    increment: 1,
    category: 'Fabricated',
    specifications: 'Custom sizes available',
    inStock: true
  },
  {
    id: 'steel-lockers-18door',
    name: '18-Door Steel Lockers',
    description: 'Robust 18-door steel lockers perfect for offices, factories, and institutional use.',
    price: 18000,
    imageUrl: 'products/steel-locker.png',
    moq: 3,
    increment: 1,
    category: 'Fabricated',
    specifications: '18 individual compartments',
    inStock: true
  },
  {
    id: 'steel-furniture',
    name: 'Commercial Steel Furniture',
    description: 'Durable steel tables, chairs, and dining sets designed for commercial and institutional use.',
    price: 19000,
    imageUrl: 'products/steel-furniture.png',
    moq: 3,
    increment: 1,
    category: 'Fabricated',
    specifications: 'Various designs available',
    inStock: true
  },
  {
    id: 'steel-beds',
    name: 'Steel Beds',
    description: 'Foldable and fixed steel beds with superior strength and comfort for institutional use.',
    price: 3000,
    imageUrl: 'products/steel-beds.png',
    moq: 5,
    increment: 1,
    category: 'Fabricated',
    specifications: 'Foldable and fixed options',
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};