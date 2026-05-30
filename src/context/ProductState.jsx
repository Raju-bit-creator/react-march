import React, { useReducer } from "react";
import ProductContext from "./ProductContext";
import { cartReducer } from "./Reducer";

const ProductState = (props) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const prod = [
    {
      _id: 1,
      name: "apple",
      description: "This is product apple",
      price: 10.99,
      instock: 3,
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
  const [products, setProducts] = React.useState([]);

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    products: prod,
  });
  const [singleProduct, setSingleProduct] = React.useState([]);

  const fetchProducts = async (searchQuery = "") => {
    try {
      const response = await fetch(
        `${BASE_URL}/products/allproduct?searchQuery=${searchQuery}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        },
      );
      const data = await response.json();
      console.log("data from api first", data);
      setProducts(data);
      console.log("data from api second", data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const editProduct = async (id, updatedProduct) => {
    try {
      const response = await fetch(`${BASE_URL}/products/updateproduct/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await response.json();
      console.log("updated product data from api", data);
      fetchProducts(); //fetch products again to get the updated product list
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/products/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      const data = await response.json();
      console.log("deleted product data from api", data);
      fetchProducts(); //fetch products again to get the updated product list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
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
        editProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

// import { createContext, PropsWithChildren, useContext, useEffect, useMemo } from "react";

// type ProductType = {
//   male: true;
// };
// const ProductContext = createContext<null | ProductType>(null);

// export const useProductContext = () => {
//   const context = useContext(ProductContext);
//   if (!context) {
//     throw new Error("useProduct should be used within Product provider");
//   }
//   return context;
// };

// export const ProductProvider = ({ children }: PropsWithChildren) => {

//   const memoValue = useMemo(
//     () =>
//       ({
//         male: true,
//       }) as ProductType,
//     [],
//   );

//   return (
//     <ProductContext.Provider value={memoValue}>
//       {children}
//     </ProductContext.Provider>
//   );
// };
