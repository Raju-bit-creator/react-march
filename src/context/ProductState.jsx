import React, { useReducer } from "react";
import ProductContext from "./ProductContext";
import { cartReducer } from "./Reducer";

const ProductState = (props) => {
  const prod = [
    {
      _id: 1,
      name: "apple",
      description: "This is product apple",
      price: 10.99,
      instock: 5,
      category: "fruit",
    },
    {
      _id: 2,
      name: "banana",
      description: "This is product banana",
      price: 19.99,
      instock: 10,
      category: "vegetable",
    },
    {
      _id: 3,
      name: "mango",
      description: "This is product  mango",
      price: 19.99,
      category: "fruit",
      instock: 2,
    },
    {
      _id: 4,
      name: "grapes",
      description: "This is product  grapes",
      price: 19.99,
      category: "food",
      instock: 5,
    },
  ];
  const [products, setProducts] = React.useState("kishor");

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    products: prod,
  });
  const [singleProduct, setSingleProduct] = React.useState("kishor");

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

  const fetchSingleProduct = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`, //fetch single product by id from api template literal to pass the id in the url
      );
      const data = await response.json();
      setSingleProduct(data);
      console.log("single product data from api", data);
    } catch (error) {
      console.error("Error fetching single product:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        prod: prod,
        fetchProducts,
        products,
        fetchSingleProduct,
        singleProduct,
        state,
        dispatch,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
