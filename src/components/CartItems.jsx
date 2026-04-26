import React, { useContext } from "react";
import SmallHero from "./SmallHero";
import ProductContext from "../context/ProductContext";
import LoginImage from "../assets/login.png";

const CartItems = () => {
  const context = useContext(ProductContext);
  const {
    state: { cart },
    dispatch,
  } = context;
  const cartData = cart;
  console.log("cartdata", cartData);

  const Total = cartData.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
  console.log("cart total", Total);

  return (
    <div>
      <SmallHero title="My Cart Items" />

      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="max-w-7xl w-full px-4 py-8">
          <h4 className="text-2xl font-bold mb-6 text-gray-700">
            My Cart List
          </h4>

          <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
            <table className="min-w-full text-left">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Stock</th>
                </tr>
              </thead>

              <tbody>
                {cartData.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">
                      <img src={LoginImage} height={50} width={50} />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 text-green-600 font-semibold">
                      ${item.price}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <select
                          value={item.qty}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE_CART_ITEM",
                              payload: { _id: item._id, qty: e.target.value },
                            })
                          }
                        >
                          {[...Array(item.instock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Order Summary
            </h3>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Items</span>
              <span>{cartData.length}</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-4">
              <span>Total</span>
              <span className="font-bold text-green-600">
                ${Total.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
