import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', image: '/images/bag.png' },
  { id: 2, name: 'Product 2', image: '/images/cap.png' },
  { id: 3, name: 'Product 3', image: '/images/toy.png' },
  { id: 4, name: 'Product 4', image: '/images/belt.png' },
  { id: 4, name: 'Product 4', image: '/images/card.png' },
  { id: 2, name: 'Product 2', image: '/images/cap.png' },
  { id: 1, name: 'Product 1', image: '/images/bag.png' },
  { id: 4, name: 'Product 4', image: '/images/card.png' },
  { id: 2, name: 'Product 2', image: '/images/cap.png' },
  { id: 3, name: 'Product 3', image: '/images/toy.png' },
  { id: 4, name: 'Product 4', image: '/images/belt.png' },
  { id: 1, name: 'Product 1', image: '/images/bag.png' },
  // Add more products if you have
];

function ProductGrid() {
  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
