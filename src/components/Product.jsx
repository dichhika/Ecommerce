import React from "react";
import { Button } from "../components/ui/button";

import woodenChair from "../assets/image/Chairss.jpg";
import modernChair from "../assets/image/chair.webp";
import queenBed from "../assets/image/bed.webp";
import singleBed from "../assets/image/bed.jpg";
import deskLamp from "../assets/image/Lamp.webp";
import nightLamp from "../assets/image/Lamp2.webp";
import diningTable from "../assets/image/dinning.avif";
import coffeeTable from "../assets/image/table2.jpg";

const products = [
  {
    id: 1,
    name: "Wooden Chair",
    category: "Chair",
    price: "$49.99",
    image: woodenChair,
  },
  {
    id: 2,
    name: "Modern Chair",
    category: "Chair",
    price: "$59.99",
    image: modernChair,
  },
  {
    id: 3,
    name: "Queen Bed",
    category: "Bed",
    price: "$199.99",
    image: queenBed,
  },
  {
    id: 4,
    name: "Single Bed",
    category: "Bed",
    price: "$149.99",
    image: singleBed,
  },
  {
    id: 5,
    name: "Desk Lamp",
    category: "Lamp",
    price: "$29.99",
    image: deskLamp,
  },
  {
    id: 6,
    name: "Night Lamp",
    category: "Lamp",
    price: "$34.99",
    image: nightLamp,
  },
  {
    id: 7,
    name: "Dining Table",
    category: "Table",
    price: "$249.99",
    image: diningTable,
  },
  {
    id: 8,
    name: "Coffee Table",
    category: "Table",
    price: "$129.99",
    image: coffeeTable,
  },
];

const Products = () => {
  return (
    <section id="products" className="min-h-screen bg-white p-8 scroll-mt-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-lg shadow p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="text-gray-600 mt-1">{product.price}</p>
            <Button className="mt-4 w-full">Add to Cart</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
