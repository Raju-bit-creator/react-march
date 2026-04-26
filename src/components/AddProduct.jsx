import React from "react";
import SmallHero from "./SmallHero";
import axios from "axios";
import { data } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    price: "",
    instock: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("product created");
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("instock", product.instock);

    if (product.image) {
      formData.append("myfile", product.image);
    }

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos/post",
        formData,
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        },
      );
      const data = await response.data;
      console.log("create product ", data);
      setProduct({
        name: "",
        description: "",
        price: "",
        instock: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setProduct({ ...product, [e.target.name]: e.target.files[0] });
      console.log("uploaded file", e.target.files[0]);
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };
  return (
    <div>
      <SmallHero title="Add New Product" />
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="max-w-7xl w-full px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md w-full max-w-md"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                value={product.name}
                name="name"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter product description"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter product price"
              />
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Instock
              </label>
              <input
                type="number"
                id="instock"
                name="instock"
                value={product.instock}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="In Stock"
              />
            </div>
            <label>Image file</label>
            <input type="file" name="image" multiple onChange={handleChange} />

            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
