import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const SingleProduct = () => {
  const context = useContext(ProductContext);

  const { fetchSingleProduct, products, singleProduct } = context;
  const params = useParams();
  const { id, category } = params;
  console.log("product id from url", id);
  console.log("product category from url", category);

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Single Product Page</h1>
      <p>Product ID: {id}</p>
      <p>Product Category: {category}</p>
      <p>Product Name: {singleProduct?.title}</p>
      <p>Product Completed: {singleProduct?.completed ? "Yes" : "No"}</p>{" "}
      {/* //ternary operator to check if the product is completed or not and display
      Yes or No accordingly */}
    </div>
  );
};

export default SingleProduct;
