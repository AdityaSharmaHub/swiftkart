import React from "react";
import Card from "../components/Card";
import products from "../utils/products.json";

const Products = () => {
  return (
    <section className="flex flex-col items-center py-12">
      <h1 className="font-medium text-4xl">
        Our
        <span className="font-semibold text-violet-500"> Products</span>
      </h1>
      <div className="flex gap-8 flex-wrap px-12 py-8">
        {products.map((product, id) => (
          <Card
            key={id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
