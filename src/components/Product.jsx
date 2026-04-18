import React, { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const context = useContext(ProductContext);
  const { prod, fetchProducts, products } = context; //destructuring the context to get the products and fetchProducts function
  console.log("my products", context);
  console.log("products from api", products);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts(); //fetch products when the component mounts
  }, []); //empty dependency array means this effect runs only once when the component mounts
  const handleClick = (id, category) => {
    console.log("clicked product id", id);
    navigate(`/products/${id}/${category}`); //navigate to the single product page with the product id in the url
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-7xl w-full px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Products List</h1>
        <div className="mb-4 flex items-center">
          {context?.prod?.map((product) => (
            <div
              key={product.id}
              onClick={() => handleClick(product.id, product.category)}
              className="mb-2 p-4 bg-white rounded shadow"
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-green-500 font-bold">${product.price}</p>
              <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
