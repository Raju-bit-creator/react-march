import React, { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import productImage from "../assets/veg.png";
import SmallHero from "./SmallHero";
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

const Product = () => {
  const context = useContext(ProductContext);
  const {
    fetchProducts,
    products,
    state,
    editProduct,
    deleteProduct,
    dispatch,
  } = context;

  const params = useParams();
  const { searchQuery } = params;
  console.log("searchquery", searchQuery);

  const prod = state.products;
  const cart = state.cart;

  const navigate = useNavigate();

  const [menuVisible, setMenuVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const toggleMenu = (product_id) => {
    setMenuVisible((prevState) => ({
      ...prevState,
      [product_id]: !prevState[product_id],
    }));
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  const saveEdit = (updatedProduct) => {
    editProduct(selectedProduct._id, updatedProduct);
    setSelectedProduct(null);
    setModalVisible(false);
  };

  const handleDelete = async (product_id) => {
    await deleteProduct(product_id);
  };

  useEffect(() => {
    fetchProducts(searchQuery);
  }, [searchQuery]);

  const handleClick = (id, category) => {
    navigate(`/products/${id}/${category}`);
  };

  const title = "Our Products";

  return (
    <div>
      <SmallHero title={title} />
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="max-w-7xl w-full px-4 py-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
            <h1 className="text-2xl font-bold">Products List</h1>
            <button
              onClick={() => navigate("/addproduct")}
              className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Add New Product
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products &&
              products?.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded shadow p-4 flex flex-col"
                >
                  <img
                    src={
                      product.image?.[0]
                        ? `http://localhost:3000/uploads/${product.image[0]}`
                        : productImage
                    }
                    className="w-full h-48 object-cover rounded mb-3"
                    alt="product image"
                  />

                  <div className="flex justify-between items-start flex-1">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold truncate">
                        {product.name}
                      </h2>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="text-[#60BB46] font-bold mt-2">
                        ${product.price}
                      </p>

                      {cart && cart.some((p) => p._id === product._id) ? (
                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product,
                            })
                          }
                          className="mt-3 w-full px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                        >
                          Remove from Cart
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            dispatch({ type: "ADD_TO_CART", payload: product })
                          }
                          className="mt-3 w-full px-3 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>

                    <div className="relative ml-2 flex-shrink-0">
                      <BsThreeDots
                        onClick={() => toggleMenu(product._id)}
                        className="cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
                        size={20}
                      />
                      {menuVisible[product._id] && (
                        <div className="absolute right-0 z-10 mt-1 flex flex-col bg-white shadow-lg rounded overflow-hidden border border-gray-100">
                          <button
                            onClick={() => openEditModal(product)}
                            className="px-4 py-2 text-sm text-white bg-yellow-400 hover:bg-yellow-500 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {modalVisible && selectedProduct?._id === product._id && (
                    <EditProductModal
                      isOpen={modalVisible}
                      product={selectedProduct}
                      onClose={closeEditModal}
                      onSave={saveEdit}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
