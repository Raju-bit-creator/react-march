import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import productImage from "../assets/veg.png";

const SearchResult = () => {
  const { searchQuery } = useParams();
  const context = useContext(ProductContext);

  const {
    state: { cart },
    fetchProducts,
    products,
    dispatch,
  } = context;

  console.log("all product search ", products);

  useEffect(() => {
    fetchProducts(searchQuery);
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="max-w-7xl w-full px-4 py-8">
        <h4 className="font-bold text-md mb-6">Search Result</h4>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
          {products.map((item) => {
            return (
              <div key={item._id} className="col-md-3">
                <div className="card">
                  <img
                    src={
                      item.image?.[0]
                        ? `http://localhost:3000/uploads/${item.image[0]}`
                        : productImage
                    }
                    className="w-full h-48 object-cover rounded mb-3"
                    alt="product image"
                  />
                  <div className="card-body">
                    <div className="title-content">
                      <h5 className="card-title">{item.name}</h5>
                    </div>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Rs. {item.price}</p>

                    {/* ternary operator  */}

                    {cart && cart.some((p) => p._id === item._id) ? (
                      <button
                        href="#"
                        className="btn btn-danger"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          })
                        }
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        href="#"
                        className="btn btn-primary"
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: item,
                          })
                        }
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
