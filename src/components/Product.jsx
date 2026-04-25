import React, { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import productImage from "../assets/veg.png";
import SmallHero from "./SmallHero";
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

const Product = () => {
  const context = useContext(ProductContext);
  const { fetchProducts, products, state, dispatch } = context; //destructuring the context to get the products and fetchProducts function
  // console.log("my products", context);
  // console.log("products from api", products);
  // console.log("initial state from reducer value111111", state);
  const prod = state.products; //getting the products from the reducer state
  const cart = state.cart; //getting the cart from the reducer state

  console.log("products from  state", prod);
  console.log("cart from state22222", cart);

  const navigate = useNavigate();

  const [menuVisible, setMenuVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const toggleMenu = (product_id) => {
    console.log("clicked product id", product_id);
    setMenuVisible((prevState) => ({
      ...prevState,
      [product_id]: !prevState[product_id], //toggle the menu visibility for the clicked product
    }));
  };

  const openEditModal = (product) => {
    setSelectedProduct(product); //set the selected product to be edited
    setModalVisible(true); //open the edit modal
  };

  const closeEditModal = () => {
    setSelectedProduct(null);
    setModalVisible(false); //close the edit modal
  };

  const saveEdit = (updatedProduct) => {
    console.log("updated product 3333", updatedProduct);
    // TODO: Implement remainging
  };

  const handleDelete = (product_id) => {
    console.log("delete product id", product_id);
    // TODO: Implement remainging
  };

  useEffect(() => {
    fetchProducts(); //fetch products when the component mounts
  }, []); //empty dependency array means this effect runs only once when the component mounts
  const handleClick = (id, category) => {
    console.log("clicked product id", id);
    console.log("clicked product category", category);
    navigate(`/products/${id}/${category}`); //navigate to the single product page with the product id in the url
  };
  const title = "Our Products";
  return (
    <div>
      <SmallHero title={title} />
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="max-w-7xl w-full px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Products List</h1>
          <div className="mb-4 flex items-center">
            {prod?.map((product) => (
              <div
                key={product.id}
                // onClick={() => handleClick(product.id, product.category)}
                className="mb-2 p-4 bg-white rounded shadow"
              >
                <img src={productImage} alt="" />
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{product.name}</h2>

                    <p>{product.description}</p>
                    <p className="text-[#60BB46] font-bold">${product.price}</p>

                    {cart && cart.some((p) => p._id === product._id) ? (
                      <button
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                      >
                        Remove form Cart
                      </button>
                    ) : (
                      <button
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={() =>
                          dispatch({ type: "ADD_TO_CART", payload: product })
                        }
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                  <div>
                    <BsThreeDots
                      onClick={() => toggleMenu(product._id)}
                      className="cursor-pointer"
                    />
                    {menuVisible[product._id] && (
                      <div className="menu-options flex flex-col bg-white">
                        <button
                          onClick={() => openEditModal(product)}
                          className="text-white bg-yellow-400 p-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="text-white bg-red-500 p-2"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  {modalVisible && selectedProduct._id === product._id && (
                    <EditProductModal
                      isOpen={modalVisible}
                      product={selectedProduct}
                      onClose={closeEditModal}
                      onSave={saveEdit}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
