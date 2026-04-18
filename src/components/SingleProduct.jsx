import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();
  const { id, category } = params;
  console.log("product id from url", id);
  console.log("product category from url", category);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Single Product Page</h1>
      <p>Product ID: {id}</p>
      <p>Product Category: {category}</p>
    </div>
  );
};

export default SingleProduct;
