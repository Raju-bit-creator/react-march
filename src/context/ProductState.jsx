import React from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const prod = [
    {
      id: 1,
      name: "apple",
      description: "This is product apple",
      price: 10.99,
      category: "fruit",
    },
    {
      id: 2,
      name: "banana",
      description: "This is product banana",
      price: 19.99,
      category: "vegetable",
    },
    {
      id: 3,
      name: "mango",
      description: "This is product  mango",
      price: 19.99,
      category: "fruit",
    },
    {
      id: 4,
      name: "grapes",
      description: "This is product  grapes",
      price: 19.99,
      category: "food",
    },
  ];
  const [products, setProducts] = React.useState("kishor");

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      const data = await response.json();
      setProducts(data);
      console.log("data from api", data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <ProductContext.Provider value={{ prod: prod, fetchProducts, products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
