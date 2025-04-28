import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 flex flex-col items-center text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h4 className="font-semibold mb-1">{product.name}</h4>
      <p className="text-sm text-gray-500">Sign in or Create an account to see pricing</p>
    </div>
  );
}

export default ProductCard;
